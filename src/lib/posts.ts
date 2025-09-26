import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import hljs from 'highlight.js';
import { Post } from '@/types/post';
import { calculateReadingTime } from './utils';

const postsDirectory = path.join(process.cwd(), 'posts');

// Configure marked with syntax highlighting using extension
marked.setOptions({
  breaks: true,
  gfm: true,
});

// Define types for the highlight extension
interface HighlightToken {
  type: string;
  raw: string;
  lang: string;
  code: string;
  highlighted: string;
}

// Create a custom extension for syntax highlighting
const highlightExtension = {
  name: 'highlight',
  level: 'block' as const,
  start(src: string) { return src.match(/^```/)?.index; },
  tokenizer(src: string) {
    const rule = /^```([^\n]*)\n([\s\S]*?)\n```/;
    const match = rule.exec(src);
    if (match) {
      const lang = match[1].trim();
      const code = match[2];
      let highlighted;
      
      if (lang && hljs.getLanguage(lang)) {
        try {
          highlighted = hljs.highlight(code, { language: lang }).value;
        } catch {
          highlighted = hljs.highlightAuto(code).value;
        }
      } else {
        highlighted = hljs.highlightAuto(code).value;
      }
      
      return {
        type: 'highlight',
        raw: match[0],
        lang,
        code,
        highlighted
      };
    }
  },
  renderer(token: HighlightToken) {
    return `<pre><code class="hljs language-${token.lang}">${token.highlighted}</code></pre>`;
  }
};

marked.use({ extensions: [highlightExtension] });

export async function getAllPosts(): Promise<Post[]> {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = await Promise.all(
    fileNames
      .filter(name => name.endsWith('.md'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug,
          title: data.title || 'Untitled',
          date: data.date || new Date().toISOString(),
          excerpt: data.excerpt || '',
          tags: Array.isArray(data.tags) ? data.tags : [],
          content: await marked(content),
          readingTime: calculateReadingTime(content),
        };
      })
  );

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      tags: Array.isArray(data.tags) ? data.tags : [],
      content: await marked(content),
      readingTime: calculateReadingTime(content),
    };
  } catch {
    return null;
  }
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tags = posts.flatMap(post => post.tags);
  return [...new Set(tags)].sort();
}
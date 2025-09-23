import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about this blog and its author.',
};

export default function AboutPage() {
  return (
    <div className="post-content">
      <h1>About</h1>
      <p>
        I&apos;m a developer who believes in simple, effective solutions. This blog is where 
        I share thoughts on programming, self-hosting, and building things that matter.
      </p>
      
      <h2>What I Do</h2>
      <p>
        I write code, solve problems, and occasionally share what I&apos;ve learned. 
        My interests include:
      </p>
      <ul>
        <li>Minimalist software design</li>
        <li>Self-hosted solutions</li>
        <li>Clean, maintainable code</li>
        <li>Privacy-focused tools</li>
        <li>Performance optimization</li>
      </ul>
      
      <h2>This Blog</h2>
      <p>
        Built with Next.js and deployed on Vercel. The source code is available on GitHub.
        I believe in keeping things simple - no analytics, no tracking, just content.
      </p>
      
      <h2>Contact</h2>
      <p>
        Find me on GitHub or drop me an email. I prefer asynchronous communication 
        and usually respond within a day or two.
      </p>
    </div>
  );
}
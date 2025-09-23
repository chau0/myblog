'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'posts' },
    { href: '/about', label: 'about' },
    { href: '/projects', label: 'projects' },
  ];

  return (
    <header className="border-b border-gray-800 pb-8 mb-12">
      <Link 
        href="/" 
        className="text-green-400 font-mono text-2xl font-semibold hover:text-green-300 transition-colors"
      >
        &gt; dev.blog
      </Link>
      
      <nav className="mt-4">
        <ul className="flex space-x-8">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "text-gray-400 font-mono text-sm hover:text-green-400 transition-colors",
                  pathname === href && "text-green-400"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
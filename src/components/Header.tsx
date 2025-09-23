'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'posts' },
    { href: '/about', label: 'about' },
    { href: '/projects', label: 'projects' },
  ];

  return (
    <header>
      <Link href="/" className="logo">
        dev.blog
      </Link>
      
      <nav>
        {navItems.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={pathname === href ? 'active' : ''}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
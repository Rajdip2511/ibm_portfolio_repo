'use client';

import Link from "next/link";
import type { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="bg-purple-700 text-white py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold">Jane Doe</span>
          <span className="text-sm">@janedoe</span>
        </div>
        <div className="flex gap-6">
          <Link href="#about" className="hover:text-purple-200">About me</Link>
          <Link href="#skills" className="hover:text-purple-200">Skills</Link>
          <Link href="#projects" className="hover:text-purple-200">Projects</Link>
          <Link href="#recommendations" className="hover:text-purple-200">Recommendations</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header; 
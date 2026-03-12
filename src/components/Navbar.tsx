'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Rocket, User, Briefcase, Mail, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Início', href: '/', icon: <Rocket size={18} /> },
  { name: 'Projetos', href: '/projects', icon: <Briefcase size={18} /> },
  { name: 'Sobre', href: '/about', icon: <User size={18} /> },
  { name: 'Contato', href: '/contact', icon: <Mail size={18} /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pb-10 bg-gradient-to-b from-black/80 via-black/20 to-transparent">

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass w-full max-w-fit px-8 py-3 flex items-center justify-center shadow-[0_0_30px_rgba(217,70,239,0.1)]">

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors relative group"
            >
              <span className="text-purple-400/50 group-hover:text-purple-400 transition-colors">
                {link.icon}
              </span>
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass absolute top-24 left-4 right-4 p-6 md:hidden flex flex-col gap-4 shadow-2xl"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 text-lg text-gray-300 hover:text-purple-400 p-3 rounded-xl hover:bg-white/5 transition-all"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
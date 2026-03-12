import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { Orbitron, Inter, JetBrains_Mono } from 'next/font/google';

const orbitron = Orbitron({ 
  subsets: ['latin'], 
  variable: '--font-orbitron' 
});

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter' 
});

const jetbrains = JetBrains_Mono({ 
  subsets: ['latin'], 
  variable: '--font-mono' 
});

export const metadata = {
  title: 'Portfólio Espacial',
  description: 'Um portfólio com tema de galáxia usando Next.js e Tailwind.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${orbitron.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-black text-white relative">
        <Navbar />
        
          {children}
        
      </body>
    </html>
  );
}

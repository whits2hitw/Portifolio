'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Rocket, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="bg-stars min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

      <div className="absolute inset-0 pointer-eventDs-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-md w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-8">
            <Rocket size={48} className="text-purple-400 animate-bounce" />
          </div>

          <h1 className="text-7xl font-display font-black text-white mb-2">404</h1>
          <h2 className="text-xl font-display font-bold text-gray-300 uppercase tracking-widest mb-6">
            Coordenadas Perdidas
          </h2>

          <p className="text-gray-400 font-sans mb-10 leading-relaxed">
            Parece que você navegou para uma região desconhecida do universo. Esta página não existe ou foi movida para outra galáxia.
          </p>

          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 mx-auto px-8 py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-purple-400 transition-colors"
            >
              <ArrowLeft size={16} /> Voltar para a Base
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
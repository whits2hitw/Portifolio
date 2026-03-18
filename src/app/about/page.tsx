'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Code2, Rocket, Server, Layout, User } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="bg-stars min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">

      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/15 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[10%] w-[500px] h-[500px] bg-purple-900/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <header className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="border-l-4 border-purple-500 pl-6"
          >
            <h1 className="text-4xl md:text-5xl font-display font-extrabold tracking-tighter text-white uppercase">
              Minha <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Trajetória
              </span>
            </h1>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-2 space-y-6"
          >

            <div className="relative w-32 h-32 mx-auto mb-6">

              <div className="absolute inset-0 bg-purple-500/30 rounded-full blur-xl animate-pulse" />

              <img
                src="/images/perfil.jpg"
                alt="Lucas Nóbrega"
                className="relative z-10 w-full h-full rounded-full border-2 border-purple-500/50 object-cover shadow-2xl"
              />

            </div>

            <div className="glass p-8 border-white/5">
              <p className="text-gray-300 leading-relaxed font-sans mb-4">
                Como um <span className="text-white font-semibold">Desenvolvedor Fullstack</span>, acredito que a melhor solução nasce da união entre uma interface impecável e um motor potente. Minha jornada é marcada pela versatilidade: de layouts responsivos e fluidos a arquiteturas de backend resilientes.
              </p>
              <p className="text-gray-300 leading-relaxed font-sans">
                Domino o ecossistema <span className="text-purple-400 font-medium">React e Next.js</span> para criar experiências de usuário modernas, enquanto utilizo <span className="text-purple-400 font-medium">Node.js e TypeScript</span> para construir APIs robustas e escaláveis. Sou movido por resolver problemas reais em todas as camadas da aplicação.
              </p>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass p-6 border-white/5 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-tighter">Rocketseat</h4>
                  <p className="text-gray-400 text-[10px] font-mono">Fullstack</p>
                </div>
              </div>
              <div className="glass p-6 border-white/5 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
                  <Rocket size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-tighter">Freelance</h4>
                  <p className="text-gray-400 text-[10px] font-mono">Soluções Ponta a Ponta</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass p-6 border-white/5 flex items-center gap-4 hover:border-blue-500/30 transition-colors">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                  <Layout size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-tight">Frontend</h4>
                  <p className="text-gray-400 text-[10px] uppercase font-mono tracking-widest">React & Next</p>
                </div>
              </div>
              <div className="glass p-6 border-white/5 flex items-center gap-4 hover:border-purple-500/30 transition-colors">
                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
                  <Server size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-tight">Backend</h4>
                  <p className="text-gray-400 text-[10px] uppercase font-mono tracking-widest">Node & Typescript</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="glass p-6 border-white/5 space-y-4">
              <h3 className="text-white font-display font-bold uppercase text-[10px] tracking-[0.2em] border-b border-white/10 pb-2">Info</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400 text-sm font-sans">
                  <MapPin size={16} className="text-purple-400" /> <span>Brasil</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-sm font-sans">
                  <Code2 size={16} className="text-purple-400" /> <span>Fullstack Developer</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-sm font-sans">
                  <User size={16} className="text-purple-400" /> <span>Lucas Nóbrega</span>
                </div>
              </div>
            </div>

            <div className="glass p-6 border-white/5 bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/20">
              <h3 className="text-purple-400 font-display font-bold uppercase text-[10px] tracking-[0.2em] mb-3">
                Foco Atual
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed font-light font-sans">
                Especializando em arquitetura de sistemas escaláveis e construção de APIs robustas. Atualmente aprofundando em padrões de microsserviços e otimização de fluxos de dados com Node.js e Redis.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
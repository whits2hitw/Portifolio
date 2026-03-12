'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';

function ProjectCard({ title, description, techs, link, repo }: any) {
  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
      className="glass p-6 flex flex-col h-full border-white/5 hover:border-purple-500/40 transition-all duration-300 relative z-10"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
          <Code2 size={20} />
        </div>
        <h3 className="text-xl font-display font-bold text-white uppercase tracking-tight">
          {title}
        </h3>
      </div>

      <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-grow font-sans">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {techs.map((tech: string) => (
          <span key={tech} className="text-[10px] font-mono py-1 px-2 rounded bg-white/5 border border-white/10 text-blue-400 uppercase tracking-tighter">
            {tech}
          </span>
        ))}
      </div>

      {/* Botões Condicionais */}
      <div className="flex gap-5 border-t border-white/5 pt-5"> 
        {link && link !== "#" && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-mono text-gray-400 hover:text-white transition-colors tracking-widest">
            <ExternalLink size={14} /> VISITAR PROJETO
          </a>
        )}
        {repo && (
          <a href={repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-mono text-gray-400 hover:text-white transition-colors tracking-widest">
            <Github size={14} /> VER CÓDIGO
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function ProjetosPage() {
  const meusProjetos = [
    {
      title: "Landing Page Médica",
      description: "SPA de alta performance desenvolvida para consultório de psiquiatria. Foco em UX, acessibilidade e conversão via WhatsApp.",
      techs: ["Next.js", "React", "Tailwind", "Lucide"],
      link: "https://dr-mario-watanabe.vercel.app/",
      repo: null 
    },
    {
      title: "Task Management API",
      description: "Backend escalável para gestão de tarefas. Inclui autenticação JWT, tratamento de erros global e arquitetura limpa.",
      techs: ["Node.js", "TypeScript", "PostgreSQL", "Prisma"],
      link: "#",
      repo: "https://github.com/whits2hitw/task-manager-api"
    },
    {
      title: "NotiHub Service",
      description: "Serviço de notificações assíncronas utilizando BullMQ e Redis para processamento de filas em segundo plano.",
      techs: ["Node.js", "Redis", "BullMQ", "Docker"],
      link: "#",
      repo: "https://github.com/whits2hitw/notihub-api"
    }
  ];

  return (
    <main className="bg-stars min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Aurora - Mantido para dar cor às estrelas */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <header className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="border-l-4 border-purple-500 pl-6"
          >
            <h1 className="text-4xl md:text-5xl font-display font-extrabold tracking-tighter text-white uppercase">
              Projetos <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Realizados
              </span>
            </h1>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {meusProjetos.map((projeto, index) => (
            <motion.div
              key={projeto.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard {...projeto} />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MessageSquare } from 'lucide-react';

function ContactCard({ href, icon, label, value, color }: any) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "tween", duration: 0.2 }}
      className="glass p-6 border-white/5 flex items-center gap-4 group hover:border-purple-500/40"
    >
      <div className="p-3 rounded-xl bg-white/5 group-hover:bg-purple-500/10 transition-colors" style={{ color }}>
        {icon}
      </div>
      <div>
        <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">{label}</h4>
        <p className="text-white font-medium tracking-tight">{value}</p>
      </div>
    </motion.a>
  );
}

export default function ContactPage() {
  return (
    <main className="bg-stars min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">

      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <header className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter text-white uppercase mb-4">
              Vamos Iniciar uma <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Nova Conexão
              </span>
            </h1>
            <p className="text-gray-400 font-sans max-w-xl mx-auto">
              Seja para um projeto freelance, uma proposta de vaga Fullstack ou apenas para trocar ideias sobre backend e APIs.
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <ContactCard 
            href="mailto:lucas_nobrega01@hotmail.com" 
            icon={<Mail size={24} />} 
            label="E-mail" 
            value="lucas_nobrega01@hotmail.com" 
            color="#A855F7" 
          />
          <ContactCard 
            href="https://wa.me/+5575988856219" 
            icon={<MessageSquare size={24} />} 
            label="WhatsApp" 
            value="Falar no Direct" 
            color="#22C55E" 
          />
          <ContactCard 
            href="https://www.linkedin.com/in/lucas-nobrega1" 
            icon={<Linkedin size={24} />} 
            label="LinkedIn" 
            value="/in/lucas-nobrega" 
            color="#0A66C2" 
          />
          <ContactCard 
            href="https://github.com/whits2hitw" 
            icon={<Github size={24} />} 
            label="GitHub" 
            value="@Whits2hitW" 
            color="#F3F4F6" 
          />
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Disponível para novos projetos
          </div>

        </motion.div>
      </div>
    </main>
  );
}
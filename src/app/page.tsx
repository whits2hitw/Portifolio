'use client'

import React from 'react';
import { motion } from 'framer-motion';
import {
  SiHtml5, SiTailwindcss, SiReact, SiNextdotjs,
  SiNodedotjs, SiExpress, SiPostgresql, SiTypescript, SiJavascript,
  SiGithub,
  SiGmail
} from 'react-icons/si';
import { FaCss3Alt, FaLinkedin } from 'react-icons/fa'; // Importando o CSS3 do Font Awesome

function TechIcon({ Icon, name, color }: { Icon: any, name: string, color: string }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.1 }}
      className="group flex flex-col items-center gap-2"
    >
      <div className="glass p-3 rounded-xl transition-all group-hover:border-white/40">
        <Icon size={24} style={{ color: color }} className="opacity-80 group-hover:opacity-100 transition-opacity" />
      </div>
      <span className="text-[10px] font-mono text-gray-500 group-hover:text-white uppercase tracking-widest">
        {name}
      </span>
    </motion.div>
  );
}

function SocialLink({ href, icon, label, color }: { href: string, icon: any, label: string, color: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      whileHover={{ y: -3, scale: 1.05 }}
      transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/5 transition-colors group"
    >
      <span className="text-lg opacity-80 group-hover:opacity-100" style={{ color }}>{icon}</span>
      <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 group-hover:text-white">
        {label}
      </span>
    </motion.a>
  );
}

export default function HomePage() {
  return (
    <main className="home-bg min-h-screen flex flex-col items-center justify-center relative p-6 pt-28 overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-250 h-250 pointer-events-none z-0">

        <div
          className="absolute inset-0 rounded-full animate-spin-super-slow opacity-15"
          style={{
            background: `conic-gradient(
              from 90deg at 50% 50%, 
              #312e81 0%,  
              #d946ef 25%, 
              #000000 40%, 
              #d946ef 55%, 
              #312e81 80%, 
              #000000 100%
            )`,
            filter: 'blur(100px) contrast(150%)',
          }}
        />

        <div className="absolute inset-20 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />

        <div className="absolute inset-1/4 bg-black/60 rounded-full blur-[50px]" />
      </div>
      <motion.section
        className="glass p-8 md:p-12 max-w-4xl text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-6  leading-tight">
          Lucas Nóbrega
        </h1>

        <h2 className="text-xl md:text-2xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          Desenvolvedor Fullstack
        </h2>

        <p className="text-sm md:text-base text-gray-400 leading-relaxed tracking-wide max-w-2xl mx-auto mb-8 font-sans">
          Sou um Desenvolvedor Fullstack focado em construir aplicações modernas com o ecossistema JavaScript. Especialista em unir a agilidade do Next.js e Tailwind CSS com a estrutura de backends eficientes. Acredito que um software de excelência nasce do equilíbrio entre código limpo e uma experiência de uso impecável.
        </p>

        <div className="flex justify-center gap-6 mb-10">
          <SocialLink href="https://github.com/Whits2hitW" icon={<SiGithub />} label="GitHub" color="#fff" />
          <SocialLink href="https://linkedin.com/in/lucas-nobrega1" icon={<FaLinkedin />} label="LinkedIn" color="#0077B5" />
          <SocialLink href="mailto:lucas_nobrega01@hotmail.com" icon={<SiGmail />} label="E-mail" color="#EA4335" />
        </div>

        <div className="mt-8 space-y-6 border-t border-white/5 pt-6">

          <h2 className="font-display text-lg text-white/90 tracking-widest uppercase italic">
            Tecnologias Estudadas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 text-left">

            <div className="space-y-4">

              <h3 className="font-display text-[10px] text-purple-400/80 tracking-[0.2em] uppercase border-l-2 border-purple-500/50 pl-3">
                Frontend
              </h3>

              <div className="flex flex-wrap gap-3">

                <TechIcon Icon={SiHtml5} name="HTML5" color="#E34F26" />
                <TechIcon Icon={FaCss3Alt} name="CSS3" color="#1572B6" />
                <TechIcon Icon={SiJavascript} name="JS" color="#F7DF1E" />
                <TechIcon Icon={SiReact} name="React" color="#61DAFB" />
                <TechIcon Icon={SiNextdotjs} name="Next.js" color="#FFFFFF" />
                <TechIcon Icon={SiTailwindcss} name="Tailwind" color="#06B6D4" />

              </div>

            </div>

            <div className="space-y-4">

              <h3 className="font-display text-[10px] text-blue-400/80 tracking-[0.2em] uppercase border-l-2 border-blue-500/50 pl-3">
                Backend
              </h3>

              <div className="flex flex-wrap gap-3">

                <TechIcon Icon={SiNodedotjs} name="Node.js" color="#339933" />
                <TechIcon Icon={SiExpress} name="Express" color="#FFFFFF" />
                <TechIcon Icon={SiPostgresql} name="Postgres" color="#4169E1" />
                <TechIcon Icon={SiTypescript} name="TS" color="#3178C6" />

              </div>

            </div>
          </div>
        </div>
      </motion.section>



    </main>
  );
}
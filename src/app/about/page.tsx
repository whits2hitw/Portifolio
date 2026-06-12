"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Code2,
  Rocket,
  Server,
  Layout,
  User,
  Coffee,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-stars min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Efeitos Glow */}
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
            <div className="relative w-32 h-32 mx-auto md:mx-0 mb-6 group">
              <div className="absolute inset-0 bg-purple-500/30 rounded-full blur-xl animate-pulse group-hover:bg-purple-500/50 transition-all" />
              <img
                src="/images/perfil.jpg"
                alt="Lucas Nóbrega"
                className="relative z-10 w-full h-full rounded-full border-2 border-purple-500/50 object-cover shadow-2xl transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="glass p-8 border-white/5 space-y-4">
              <p className="text-gray-300 leading-relaxed font-sans text-sm md:text-base">
                Como um{" "}
                <span className="text-white font-semibold">
                  Desenvolvedor Fullstack
                </span>
                , acredito que Engenharia de Software de excelência nasce do
                equilíbrio sutil entre interfaces extremamente fluidas e
                arquiteturas de servidores resilientes.
              </p>
              <p className="text-gray-300 leading-relaxed font-sans text-sm md:text-base">
                No ecossistema Frontend, domino{" "}
                <span className="text-purple-400 font-medium">
                  React e Next.js
                </span>{" "}
                aliado ao poder estilístico do{" "}
                <span className="text-purple-400 font-medium">
                  Tailwind CSS
                </span>{" "}
                para construir interfaces responsivas e focadas na melhor
                experiência do usuário.
              </p>
              <p className="text-gray-300 leading-relaxed font-sans text-sm md:text-base">
                No ecossistema Backend, atuo de forma versátil transitando na
                construção de APIs robustas utilizando tanto a agilidade de{" "}
                <span className="text-blue-400 font-medium">
                  Node.js com TypeScript
                </span>{" "}
                quanto a solidez corporativa e segurança do ecossistema{" "}
                <span className="text-blue-400 font-medium">
                  Java e Spring Boot 3
                </span>
                .
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass p-6 border-white/5 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-tighter">
                    Rocketseat
                  </h4>
                  <p className="text-gray-400 text-[10px] font-mono">
                    Formação Fullstack
                  </p>
                </div>
              </div>
              <div className="glass p-6 border-white/5 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                  <Rocket size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-tighter">
                    Freelance
                  </h4>
                  <p className="text-gray-400 text-[10px] font-mono">
                    Soluções Ponta a Ponta
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass p-5 border-white/5 flex flex-col gap-3 hover:border-purple-500/30 transition-colors">
                <div className="p-2 w-fit rounded-lg bg-purple-500/10 text-purple-400">
                  <Layout size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-tight">
                    Frontend
                  </h4>
                  <p className="text-gray-400 text-[10px] uppercase font-mono tracking-widest mt-1">
                    React, Next.js & Tailwind
                  </p>
                </div>
              </div>
              <div className="glass p-5 border-white/5 flex flex-col gap-3 hover:border-blue-500/30 transition-colors">
                <div className="p-2 w-fit rounded-lg bg-blue-500/10 text-blue-400">
                  <Server size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-tight">
                    NodeJS Backend
                  </h4>
                  <p className="text-gray-400 text-[10px] uppercase font-mono tracking-widest mt-1">
                    TypeScript, Redis & Express
                  </p>
                </div>
              </div>
              <div className="glass p-5 border-white/5 flex flex-col gap-3 hover:border-orange-500/30 transition-colors">
                <div className="p-2 w-fit rounded-lg bg-orange-500/10 text-orange-400">
                  <Coffee size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm tracking-tight">
                    Java Backend
                  </h4>
                  <p className="text-gray-400 text-[10px] uppercase font-mono tracking-widest mt-1">
                    Spring Boot 3 & JUnit/Mockito
                  </p>
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
              <h3 className="text-white font-display font-bold uppercase text-[10px] tracking-[0.2em] border-b border-white/10 pb-2">
                Informações
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400 text-sm font-sans">
                  <MapPin size={16} className="text-purple-400" />{" "}
                  <span>Brasil</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-sm font-sans">
                  <Code2 size={16} className="text-purple-400" />{" "}
                  <span>Fullstack Developer</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-sm font-sans">
                  <User size={16} className="text-purple-400" />{" "}
                  <span>Lucas Nóbrega</span>
                </div>
              </div>
            </div>

            <div className="glass p-6 border-white/5 bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/20">
              <h3 className="text-purple-400 font-display font-bold uppercase text-[10px] tracking-[0.2em] mb-3">
                Foco Atual
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed font-light font-sans">
                Especializando no desenvolvimento de aplicações multiplataforma
                de alta performance. Dedicado atualmente ao estudo de
                microsserviços assíncronos, mensageria com filas, bancos
                relacionais e cobertura completa de testes automatizados
                unitários e de integração.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

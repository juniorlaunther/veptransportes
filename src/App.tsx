/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { 
  Shield, 
  Clock, 
  MapPin, 
  Phone, 
  Instagram, 
  Mail, 
  ChevronRight, 
  Star, 
  Users, 
  Car, 
  Calendar,
  CheckCircle2,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

gsap.registerPlugin(ScrollTrigger);

const COMPANY_NAME = "VEP Transportes Executivo";
const WHATSAPP_LINK = "https://wa.me/5519993724919";
const LOGO_URL = "https://lh3.googleusercontent.com/d/1oWE7bu7S98UHZ9EzbHknmqLYW-3fenBw";
const HERO_BG = "https://lh3.googleusercontent.com/d/1wLLdmyp6ShyaLVIes6_AZ7FVvMC7bU07";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.from('.hero-content > *', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });

      // Scroll Reveals
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        });
      });

      // Stats Counter Animation
      const stats = document.querySelectorAll('.stat-number');
      stats.forEach((stat) => {
        const target = parseInt(stat.getAttribute('data-target') || '0');
        gsap.to(stat, {
          scrollTrigger: {
            trigger: stat,
            start: 'top 90%',
          },
          innerText: target,
          duration: 2,
          snap: { innerText: 1 },
          ease: 'power1.out',
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="relative min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 py-4 sm:px-6 lg:px-8">
        <nav className="max-w-7xl mx-auto glass rounded-full px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src={LOGO_URL} 
              alt={COMPANY_NAME} 
              className="h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Início', 'Serviços', 'Diferenciais', 'Sobre'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium text-white/70 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105"
            >
              Agendar Agora
            </a>
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-20 left-4 right-4 glass rounded-2xl p-6 md:hidden animate-in fade-in slide-in-from-top-4">
            <div className="flex flex-col gap-4">
              {['Início', 'Serviços', 'Diferenciais', 'Sobre'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-lg font-medium py-2 border-b border-white/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a 
                href={WHATSAPP_LINK}
                className="bg-primary text-white text-center py-3 rounded-xl font-bold mt-2"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="início" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_BG} 
            alt="Executive Car" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl hero-content">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              Transporte Executivo de Elite
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-balance">
              Sua jornada com <span className="text-primary">exclusividade</span> e segurança.
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 text-balance leading-relaxed">
              Atendimento premium em Campinas e região. Motoristas profissionais e veículos de alto padrão para quem não abre mão da excelência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={WHATSAPP_LINK}
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all group"
              >
                Solicitar Orçamento
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#serviços"
                className="flex items-center justify-center gap-2 glass hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all"
              >
                Ver Serviços
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-12 border-y border-white/5 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Anos de Experiência', value: 10, suffix: '+' },
              { label: 'Viagens Realizadas', value: 5000, suffix: '+' },
              { label: 'Clientes Satisfeitos', value: 100, suffix: '%' },
              { label: 'Cidades Atendidas', value: 20, suffix: '+' },
            ].map((stat, i) => (
              <div key={i} className="text-center reveal">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  <span className="stat-number" data-target={stat.value}>0</span>{stat.suffix}
                </div>
                <div className="text-xs md:text-sm text-white/50 uppercase tracking-widest font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Nossas Soluções</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Oferecemos um portfólio completo de transporte para atender todas as suas necessidades com o máximo de conforto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Transfer Aeroportos',
                desc: 'Recepção personalizada e pontualidade absoluta nos principais aeroportos (Viracopos, Guarulhos, Congonhas).',
                icon: <Car className="w-8 h-8 text-primary" />,
                img: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=800&auto=format&fit=crop'
              },
              {
                title: 'Viagens Corporativas',
                desc: 'Logística estratégica para executivos e equipes, garantindo produtividade e conforto durante o trajeto.',
                icon: <Users className="w-8 h-8 text-primary" />,
                img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop'
              },
              {
                title: 'Eventos & Casamentos',
                desc: 'Transporte de luxo para momentos especiais, com discrição e elegância que a ocasião exige.',
                icon: <Calendar className="w-8 h-8 text-primary" />,
                img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop'
              }
            ].map((service, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl bg-surface-light border border-white/5 reveal hover:border-primary/30 transition-all">
                <div className="h-48 overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-8">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">{service.desc}</p>
                  <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                    Saiba mais <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Differentials */}
      <section id="diferenciais" className="py-20 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Por que escolher a VEP?</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Elevamos o padrão do transporte executivo através de pilares fundamentais de qualidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">
            <div className="md:col-span-2 md:row-span-1 glass rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden reveal">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Shield className="w-24 h-24" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Segurança Inegociável</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                Nossos veículos passam por manutenções rigorosas e nossos motoristas são treinados em direção defensiva e atendimento de alto padrão. Sua integridade é nossa prioridade número um.
              </p>
            </div>
            
            <div className="md:col-span-1 glass rounded-3xl p-8 flex flex-col justify-center reveal">
              <div className="flex items-center gap-4 mb-4">
                <Clock className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold">Pontualidade</h3>
              </div>
              <p className="text-white/60 text-sm">
                Sabemos que seu tempo é valioso. Monitoramos o trânsito em tempo real para garantir que estejamos sempre à sua espera.
              </p>
            </div>

            <div className="md:col-span-1 glass rounded-3xl p-8 flex flex-col justify-center items-center text-center reveal">
              <Star className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Premium</h3>
              <p className="text-white/50 text-xs">Atendimento bilíngue e concierge exclusivo.</p>
            </div>

            <div className="md:col-span-2 glass rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden reveal">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <MapPin className="w-24 h-24" />
              </div>
              <h3 className="text-xl font-bold mb-2">Base em Campinas/SP</h3>
              <p className="text-white/60 text-sm">Localização estratégica para atender com agilidade toda a região metropolitana e principais aeroportos do estado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative reveal">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/d/1K_JO8miefAdPU_Vpufp4iI_aBjB0LtOH" 
                  alt="VEP Transportes - Nossa História" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 glass p-8 rounded-2xl hidden md:block">
                <div className="text-primary font-bold text-4xl mb-1">10+</div>
                <div className="text-xs uppercase tracking-widest text-white/60">Anos de Mercado</div>
              </div>
            </div>
            
            <div className="reveal">
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Nossa História</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Compromisso com a sua Excelência.</h2>
              <div className="space-y-6 text-white/70 leading-relaxed">
                <p>
                  A VEP Transportes Executivo nasceu com a missão de transformar o conceito de transporte em Campinas e região. Não entregamos apenas um trajeto, entregamos uma experiência de tranquilidade e sofisticação.
                </p>
                <p>
                  Com uma frota moderna e uma equipe de motoristas altamente qualificados, atendemos desde executivos de multinacionais até famílias que buscam conforto em seus momentos de lazer.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    'Atendimento Personalizado 24/7',
                    'Veículos Higienizados e Confortáveis',
                    'Discrição e Sigilo Absoluto',
                    'Faturamento para Empresas'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white">
                      <CheckCircle2 className="text-primary w-5 h-5" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-surface-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">O que dizem nossos clientes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Ricardo Almeida',
                role: 'Diretor de Operações',
                text: 'A VEP é nossa parceira há anos. A pontualidade e o estado dos carros são impecáveis. Recomendo para qualquer empresa que precise de seriedade.'
              },
              {
                name: 'Juliana Mendes',
                role: 'Executiva de Vendas',
                text: 'Sempre utilizo para meus transfers de Viracopos. O motorista já me aguarda com placa e o atendimento é extremamente cordial.'
              },
              {
                name: 'Carlos Eduardo',
                role: 'Empresário',
                text: 'Contratei para o transporte dos convidados do meu casamento e foi perfeito. Todos elogiaram a organização e o conforto.'
              }
            ].map((testimonial, i) => (
              <div key={i} className="glass p-8 rounded-3xl reveal">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-white/70 italic mb-6">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-xs text-white/40">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-[150px] translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 reveal">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Pronto para sua próxima viagem?</h2>
          <p className="text-xl text-white/60 mb-12">
            Garanta seu transporte com quem entende de alto padrão. Entre em contato e receba um orçamento personalizado em minutos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={WHATSAPP_LINK}
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 shadow-2xl shadow-primary/20"
            >
              Falar com Consultor
            </a>
            <div className="flex flex-col items-center sm:items-start text-sm text-white/50">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> (19) 99372-4919
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> vep.agendamento@gmail.com
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <img src={LOGO_URL} alt={COMPANY_NAME} className="h-12 w-auto" referrerPolicy="no-referrer" />
            
            <div className="flex gap-8 text-sm text-white/60">
              <a href="#início" className="hover:text-primary transition-colors">Início</a>
              <a href="#serviços" className="hover:text-primary transition-colors">Serviços</a>
              <a href="#diferenciais" className="hover:text-primary transition-colors">Diferenciais</a>
              <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
            </div>

            <div className="flex gap-4">
              <a href="https://www.instagram.com/veptransportes" target="_blank" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="text-center text-xs text-white/30 border-t border-white/5 pt-8">
            <p>© 2026 {COMPANY_NAME}. Todos os direitos reservados.</p>
            <p className="mt-2">Campinas - São Paulo - Brasil</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

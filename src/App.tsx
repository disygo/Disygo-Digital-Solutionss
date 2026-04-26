/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ArrowRight, 
  ChevronDown, 
  BarChart3, 
  Target, 
  Film, 
  Smartphone,
  CheckCircle2,
  Instagram,
  Facebook
} from 'lucide-react';
import Hero3D from './components/Hero3D';
import ContactForm from './components/ContactForm';
import { useRef } from 'react';

const stats = [
  { label: 'Projects Completed', value: '600+' },
  { label: 'Satisfaction Rate', value: '99%' },
  { label: 'Years Experience', value: '3+' },
  { label: 'Happy Clients', value: '30+' }
];

const services = [
  {
    title: 'Social Media Marketing',
    desc: 'Driving brand awareness and engagement through strategic storytelling and targeted campaigns.',
    icon: <BarChart3 className="w-8 h-8" />,
    color: 'from-blue-500/20 to-brand-cyan/20'
  },
  {
    title: 'Lead Generation',
    desc: 'Performance marketing designed to generate real business results and scalable growth.',
    icon: <Target className="w-8 h-8" />,
    color: 'from-brand-cyan/20 to-teal-500/20'
  },
  {
    title: 'Content Production',
    desc: 'High-quality reels, brand visuals, and customized edits that capture attention instantly.',
    icon: <Film className="w-8 h-8" />,
    color: 'from-purple-500/20 to-blue-500/20'
  },
  {
    title: 'Web & App Dev',
    desc: 'Modern, fast, and conversion-focused digital infrastructure built for the future.',
    icon: <Smartphone className="w-8 h-8" />,
    color: 'from-emerald-500/20 to-brand-cyan/20'
  }
];

const portfolio = [
  { title: "Tirupati's Cafe", type: 'Motion Graphics', img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800' },
  { title: 'Motivation Books', type: 'Posters', img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800' },
  { title: 'Brand Storytelling', type: 'Reels', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800' },
  { title: 'Tech Showcase', type: 'Motion Graphics', img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800' },
  { title: 'Fashion Reel', type: 'Reels', img: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80&w=800' },
  { title: 'Organic Campaign', type: 'Posters', img: 'https://images.unsplash.com/photo-1555529733-0e670560f7e1?auto=format&fit=crop&q=80&w=800' }
];

const stack = ['After Effects', 'Premiere Pro', 'Photoshop', 'Lightroom', 'Illustrator', 'Canva', 'Meta Ads', 'Figma'];

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div ref={containerRef} className="relative overflow-x-hidden font-sans text-text-primary selection:bg-accent selection:text-bg">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 py-10 px-6 md:px-12 flex justify-between items-center transition-colors">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-black tracking-tighter text-accent"
        >
          DISYGO.
        </motion.div>
        <div className="flex gap-12 items-center">
          <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-text-secondary">
            <a href="#services" className="hover:text-accent transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-accent transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-accent transition-colors">Let's Talk</a>
          </div>
          <a href="#contact" className="text-accent border border-accent/20 px-6 py-2 rounded-[2px] text-[11px] font-bold uppercase tracking-widest hover:bg-accent hover:text-bg transition-all">
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-6 md:px-12 overflow-hidden">
        <Hero3D />
        
        <motion.div 
          style={{ opacity, scale }}
          className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-7xl md:text-9xl font-display font-black leading-[0.85] hero-letter-spacing mb-8"
            >
              Turn Ideas Into<br />
              Impactful<br />
              <span className="text-accent text-glow">Digital Brands</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-text-secondary text-lg md:text-xl max-w-xl mb-12 leading-relaxed"
            >
              A results-driven digital marketing agency focused on building strong digital presence and generating measurable growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 items-center"
            >
              <a href="#contact" className="group bg-accent text-bg px-10 py-5 rounded-[2px] font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:bg-cyan-400 transition-all bg-cyan-glow">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="flex gap-12 border-l border-white/10 pl-12 hidden md:flex">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-accent">600+</span>
                  <span className="text-[10px] text-text-secondary uppercase tracking-widest font-bold">Projects Done</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-accent">99%</span>
                  <span className="text-[10px] text-text-secondary uppercase tracking-widest font-bold">Satisfaction</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-12 text-text-secondary opacity-30"
        >
          <div className="rotate-90 origin-left uppercase tracking-[0.3em] text-[10px] whitespace-nowrap mb-8 font-bold">Scroll to Explore</div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-40 px-6 md:px-12 bg-bg relative">
        <div className="max-w-7xl">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
            <div>
              <p className="text-accent text-[11px] font-bold uppercase tracking-[0.3em] mb-4">Our Expertise</p>
              <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase leading-[0.9]">
                Tailored <span className="text-accent">Solutions</span>
              </h2>
            </div>
            <p className="text-text-secondary max-w-sm text-lg leading-relaxed">
              We turn attention into results using a minimalist tech stack focused on high conversion and brand longevity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-10 rounded-lg group hover:border-accent/30 transition-all duration-500"
              >
                <div className="text-accent mb-12 text-2xl group-hover:scale-110 transition-transform origin-left">✦</div>
                <h3 className="text-[13px] font-black uppercase tracking-widest mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-text-secondary text-xs leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio" className="py-40 px-6 md:px-12 bg-bg border-t border-white/5">
        <div className="max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase leading-[0.9]">
              REAL <span className="text-accent">WORKS</span>
            </h2>
            <div className="flex gap-12 text-right">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-accent">900+</span>
                <span className="text-[10px] text-text-secondary uppercase tracking-widest font-bold">Posters</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-accent">500+</span>
                <span className="text-[10px] text-text-secondary uppercase tracking-widest font-bold">Reels</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative h-[500px] overflow-hidden bg-zinc-900 grayscale hover:grayscale-0 transition-all duration-700"
              >
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-bg/40 group-hover:bg-transparent transition-all duration-500" />
                <div className="absolute bottom-10 left-10 transform group-hover:translate-x-2 transition-transform">
                  <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-accent" />
                    {item.type}
                  </p>
                  <h3 className="text-2xl font-display font-black uppercase tracking-tighter">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section Overlay */}
      <section className="bg-bg relative border-t border-white/5 py-24 md:py-40">
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 md:px-12 border-t border-white/10 bg-bg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="space-y-6">
            <div className="text-3xl font-display font-black tracking-tighter text-accent">DISYGO.</div>
            <div className="text-text-secondary text-sm space-y-2 font-medium">
              <p>Connect with us: <strong className="text-accent">9346328498</strong></p>
              <p>Inquiries: <strong className="text-accent font-bold">disygo.work@gmail.com</strong></p>
            </div>
          </div>

          <div className="text-right space-y-6">
            <div className="text-[10px] text-text-secondary uppercase tracking-[0.3em] font-black">Expertise Stack</div>
            <div className="flex gap-6 text-[11px] font-black text-text-secondary opacity-60 uppercase tracking-widest">
              {['AE', 'PR', 'PS', 'AI', 'LR'].map(s => <span key={s} className="hover:text-accent transition-colors">{s}</span>)}
            </div>
            <div className="pt-6 border-t border-white/5 text-[10px] text-text-secondary/40 font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} Disygo Digital.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

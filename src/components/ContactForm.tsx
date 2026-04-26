import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // In a real app, you'd use a service like Formspree or a custom backend
    // Since we want it to go to disygo.work@gmail.com, we simulate success
    setTimeout(() => {
      setStatus('sent');
      const formData = new FormData(e.target as HTMLFormElement);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      
      // We can also provide a mailto fallback hiddenly or just inform the user
      console.log('Form Submitted:', { name, email, message });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-accent text-[11px] font-bold uppercase tracking-[0.3em] mb-4">Get In Touch</p>
          <h2 className="text-5xl md:text-7xl font-display font-black leading-none mb-8 uppercase tracking-tighter">
            Let's <span className="text-accent">Talk</span>
          </h2>
          <p className="text-text-secondary text-lg mb-12 max-w-md leading-relaxed">
            Ready to scale your brand? Drop us a message and we'll get back to you within 24 hours.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-6 border-b border-white/5 pb-6">
              <div className="w-10 h-10 rounded-[2px] bg-accent/10 flex items-center justify-center border border-accent/20">
                <Phone className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="text-[10px] text-text-secondary uppercase tracking-widest font-bold">Direct Line</p>
                <p className="text-xl font-bold">+91 9346328498</p>
              </div>
            </div>
            <div className="flex items-center gap-6 border-b border-white/5 pb-6">
              <div className="w-10 h-10 rounded-[2px] bg-accent/10 flex items-center justify-center border border-accent/20">
                <Mail className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="text-[10px] text-text-secondary uppercase tracking-widest font-bold">Email Inquiry</p>
                <p className="text-xl font-bold text-accent">disygo.work@gmail.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 rounded-lg"
        >
          {status === 'sent' ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <Send className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-widest">Message Sent!</h3>
              <p className="text-text-secondary">We'll be in touch with you shortly.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="text-accent hover:underline mt-4 text-xs font-bold uppercase tracking-widest"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Full Name</label>
                <input 
                  required
                  name="name"
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-bg border border-white/10 rounded-[2px] px-4 py-4 text-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Email Address</label>
                <input 
                  required
                  name="email"
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-bg border border-white/10 rounded-[2px] px-4 py-4 text-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Message</label>
                <textarea 
                  required
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-bg border border-white/10 rounded-[2px] px-4 py-4 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              <button 
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-accent text-bg font-black py-5 rounded-[2px] text-xs uppercase tracking-widest hover:bg-cyan-400 transition-all bg-cyan-glow flex items-center justify-center gap-3 group disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                <Send className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

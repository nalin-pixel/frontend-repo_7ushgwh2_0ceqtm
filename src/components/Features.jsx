import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Wand2, Share2, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Romantic Aesthetics',
    desc: 'Elegant palettes, florals, and typography that women adore.'
  },
  {
    icon: Wand2,
    title: 'Beautiful Animations',
    desc: 'Subtle motion and micro-interactions that feel magical.'
  },
  {
    icon: Share2,
    title: 'Share Everywhere',
    desc: 'Instant links and social previews that look perfect.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Friendly',
    desc: 'Looks stunning on phones, tablets, and desktops.'
  },
];

const Features = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-rose-900">Designed to Delight</h2>
          <p className="text-rose-700/80 mt-2">Everything you need to create and share invitations guests will love.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl border border-rose-100 p-6 text-center shadow-sm"
            >
              <f.icon className="w-8 h-8 text-rose-600 mx-auto mb-3" />
              <h3 className="font-semibold text-rose-900">{f.title}</h3>
              <p className="text-rose-700/80 text-sm mt-1">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

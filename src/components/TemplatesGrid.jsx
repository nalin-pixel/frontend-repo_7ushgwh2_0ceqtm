import React from 'react';
import TemplateCard from './TemplateCard';

const templates = [
  {
    id: 'blush-elegance',
    title: 'Blush Elegance',
    mood: 'Soft, romantic, floral',
    image:
      'https://images.unsplash.com/photo-1513679403256-2ae7f0a0a1d5?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'golden-hour',
    title: 'Golden Hour',
    mood: 'Warm, cinematic, luxe',
    image:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'pastel-dream',
    title: 'Pastel Dream',
    mood: 'Cute, playful, airy',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'moody-rose',
    title: 'Moody Rose',
    mood: 'Deep, elegant, classic',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
  },
];

const TemplatesGrid = () => {
  const handlePreview = (id) => {
    alert(`Previewing template: ${id}`);
  };

  return (
    <section id="templates" className="py-16 bg-rose-50/50">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-rose-900">Template Gallery</h2>
            <p className="text-rose-700/80 mt-2">Choose from romantic styles designed to delight.</p>
          </div>
          <a href="#admin" className="text-rose-600 hover:text-rose-700 font-medium">Manage templates</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {templates.map((t) => (
            <TemplateCard
              key={t.id}
              title={t.title}
              mood={t.mood}
              image={t.image}
              onPreview={() => handlePreview(t.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplatesGrid;

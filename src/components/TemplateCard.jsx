import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const TemplateCard = ({ title, mood, image, onPreview }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl border border-rose-100 overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={image}
          alt={`${title} preview`}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-rose-900">{title}</h3>
            <p className="text-sm text-rose-600/80">{mood}</p>
          </div>
          <button
            onClick={onPreview}
            className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700"
          >
            Preview <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TemplateCard;

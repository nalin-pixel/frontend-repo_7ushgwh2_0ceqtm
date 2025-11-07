import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

const Hero = ({ onExploreClick }) => {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient veil to improve text contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-rose-50/40 via-white/40 to-white"></div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2 text-rose-700 shadow-sm mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Modern Wedding Invitation Maker</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-rose-900 leading-tight">
              Craft Romantic, Interactive Wedding Invitations
            </h1>
            <p className="mt-4 text-rose-700/80 text-lg md:text-xl">
              Elegant templates, dreamy animations, and personal touches that guests will love.
              Design once, share everywhere — beautifully.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 rounded-xl bg-rose-600 text-white px-6 py-3 shadow-lg shadow-rose-200 hover:bg-rose-700 focus:outline-none"
              >
                <Heart className="w-5 h-5" />
                Explore Templates
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#admin"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-rose-700 px-6 py-3 border border-rose-200 shadow-sm hover:bg-rose-50"
              >
                Customize & Admin
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

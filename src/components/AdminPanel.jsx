import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, ImagePlus, Save } from 'lucide-react';

// Temporary local admin state. In a full app this would persist via backend.
const AdminPanel = () => {
  const [seo, setSeo] = useState({ title: 'Wedding Invitation Maker', description: 'Create romantic, interactive wedding invitations online.' });
  const [banner, setBanner] = useState({ headline: 'Craft Romantic, Interactive Invitations', sub: 'Beautiful templates your guests will love.' });
  const [items, setItems] = useState([
    { title: 'Blush Elegance', mood: 'Soft, romantic, floral', image: '' },
    { title: 'Golden Hour', mood: 'Warm, cinematic, luxe', image: '' },
  ]);

  useEffect(() => {
    document.title = seo.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', seo.description);
  }, [seo]);

  const handleItemChange = (idx, field, value) => {
    setItems((prev) => prev.map((it, i) => (i === idx ? { ...it, [field]: value } : it)));
  };

  const handleSave = () => {
    // In a real app, this would POST to an API. Here we store locally.
    localStorage.setItem('admin_seo', JSON.stringify(seo));
    localStorage.setItem('admin_banner', JSON.stringify(banner));
    localStorage.setItem('admin_templates', JSON.stringify(items));
    alert('Settings saved locally. In production, connect to the admin API.');
  };

  useEffect(() => {
    const s = localStorage.getItem('admin_seo');
    const b = localStorage.getItem('admin_banner');
    const t = localStorage.getItem('admin_templates');
    if (s) setSeo(JSON.parse(s));
    if (b) setBanner(JSON.parse(b));
    if (t) setItems(JSON.parse(t));
  }, []);

  return (
    <section id="admin" className="py-16">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <Settings className="w-6 h-6 text-rose-600" />
          <h2 className="text-3xl font-bold text-rose-900">Admin Settings</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* SEO */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-white rounded-2xl border border-rose-100 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-rose-900 mb-4">SEO</h3>
            <label className="block text-sm text-rose-700/80 mb-1">Title</label>
            <input value={seo.title} onChange={(e) => setSeo({ ...seo, title: e.target.value })} className="w-full mb-3 rounded-lg border border-rose-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300" />
            <label className="block text-sm text-rose-700/80 mb-1">Description</label>
            <textarea value={seo.description} onChange={(e) => setSeo({ ...seo, description: e.target.value })} className="w-full rounded-lg border border-rose-200 px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-rose-300" />
          </motion.div>

          {/* Banner */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-white rounded-2xl border border-rose-100 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-rose-900 mb-4">Hero Banner</h3>
            <label className="block text-sm text-rose-700/80 mb-1">Headline</label>
            <input value={banner.headline} onChange={(e) => setBanner({ ...banner, headline: e.target.value })} className="w-full mb-3 rounded-lg border border-rose-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300" />
            <label className="block text-sm text-rose-700/80 mb-1">Sub Text</label>
            <input value={banner.sub} onChange={(e) => setBanner({ ...banner, sub: e.target.value })} className="w-full rounded-lg border border-rose-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300" />
          </motion.div>

          {/* Templates */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-white rounded-2xl border border-rose-100 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-rose-900">Templates</h3>
              <button onClick={() => setItems((p) => [...p, { title: '', mood: '', image: '' }])} className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700"><ImagePlus className="w-4 h-4" /> Add</button>
            </div>

            <div className="space-y-4 max-h-64 overflow-auto pr-2">
              {items.map((it, idx) => (
                <div key={idx} className="grid grid-cols-3 gap-3 items-center">
                  <input value={it.title} onChange={(e) => handleItemChange(idx, 'title', e.target.value)} placeholder="Title" className="rounded-lg border border-rose-200 px-3 py-2" />
                  <input value={it.mood} onChange={(e) => handleItemChange(idx, 'mood', e.target.value)} placeholder="Mood" className="rounded-lg border border-rose-200 px-3 py-2" />
                  <input value={it.image} onChange={(e) => handleItemChange(idx, 'image', e.target.value)} placeholder="Image URL" className="rounded-lg border border-rose-200 px-3 py-2" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-6">
          <button onClick={handleSave} className="inline-flex items-center gap-2 rounded-xl bg-rose-600 text-white px-6 py-3 shadow-lg shadow-rose-200 hover:bg-rose-700"><Save className="w-4 h-4" /> Save Changes</button>
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;

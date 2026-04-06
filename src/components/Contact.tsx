import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background vectors */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply opacity-20 filter blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply opacity-20 filter blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">Kontak</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Mari Berkolaborasi
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Punya proyek atau ide yang ingin diwujudkan bersama? Jangan ragu untuk menghubungi saya.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="lg:w-5/12 bg-primary-600 p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
            
            <h3 className="text-3xl font-bold mb-6">Informasi Kontak</h3>
            <p className="text-primary-100 mb-12 text-lg">
              Isi form di samping untuk mengirim pesan atau hubungi langsung via kontak di bawah ini.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-primary-200 font-semibold mb-1">Email</p>
                  <a href="mailto:muhammad.fikri.azzumardi@gmail.com" className="text-lg hover:underline decoration-white underline-offset-4 break-all">muhammad.fikri.azzumardi@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-primary-200 font-semibold mb-1">Telepon / WhatsApp</p>
                  <a href="tel:+6289612032599" className="text-lg hover:underline decoration-white underline-offset-4">+62 896-1203-2599</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-primary-200 font-semibold mb-1">Lokasi</p>
                  <p className="text-lg">Gresik, Jawa Timur, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12 p-10 lg:pl-16">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nama Lengkap</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors outline-none bg-slate-50 focus:bg-white" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Alamat Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors outline-none bg-slate-50 focus:bg-white" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subjek Pekerjaan</label>
                <input type="text" id="subject" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors outline-none bg-slate-50 focus:bg-white" placeholder="Penawaran Proyek / Fulltime" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Pesan</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors outline-none bg-slate-50 focus:bg-white resize-none" placeholder="Tulis pesan Anda di sini..."></textarea>
              </div>

              <button type="submit" className="w-full md:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:-translate-y-1">
                Kirim Pesan
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

# Portfolio Fikri Zumar

Portfolio website modern dengan fitur dark mode yang dibangun menggunakan React, TypeScript, dan Tailwind CSS.

## Fitur

- ✨ Design modern dan responsif
- 🌓 Dark mode dengan toggle switch di navbar
- 🎨 Animasi smooth menggunakan Framer Motion
- 📱 Mobile-friendly
- ⚡ Fast performance dengan Vite

## Dark Mode

Portfolio ini dilengkapi dengan fitur dark mode yang dapat diaktifkan/dinonaktifkan melalui toggle button di navbar. Preferensi tema akan tersimpan di localStorage browser.

### Cara Menggunakan Dark Mode:
1. Klik icon bulan/matahari di navbar (desktop & mobile)
2. Tema akan berubah secara otomatis
3. Preferensi Anda akan tersimpan untuk kunjungan berikutnya

## Teknologi yang Digunakan

- React 19
- TypeScript
- Tailwind CSS 4
- Vite
- Framer Motion
- Lucide React Icons

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Struktur Folder

```
src/
├── components/       # Komponen React
├── contexts/        # React Context (ThemeContext)
├── assets/          # Gambar dan aset
├── App.tsx          # Main app component
├── main.tsx         # Entry point
└── index.css        # Global styles
```
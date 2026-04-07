# Dark Mode Testing Guide

## Cara Test Dark Mode:

1. **Jalankan development server:**
   ```bash
   npm run dev
   ```

2. **Buka browser dan akses aplikasi**

3. **Test Toggle Button:**
   - Cari icon bulan (🌙) di navbar (kanan atas)
   - Klik icon tersebut
   - Background harus berubah dari terang ke gelap
   - Icon berubah dari bulan menjadi matahari (☀️)

4. **Verifikasi Perubahan:**
   - Background berubah dari putih/abu terang ke abu gelap/hitam
   - Teks berubah dari gelap ke terang
   - Semua komponen (Hero, About, Portfolio, Skills, Contact, Footer) berubah tema

5. **Test Persistence:**
   - Refresh halaman
   - Tema yang dipilih harus tetap tersimpan

## Debug Console:

Buka Developer Tools (F12) dan lihat Console. Anda akan melihat log:
- "Theme changed to: light" atau "Theme changed to: dark"
- "Toggling theme from light to dark" (saat klik toggle)

## Troubleshooting:

Jika dark mode tidak bekerja:

1. **Clear localStorage:**
   ```javascript
   localStorage.clear()
   ```
   Lalu refresh halaman

2. **Check HTML element:**
   Buka Developer Tools > Elements
   Tag `<html>` harus memiliki class `dark` saat dark mode aktif:
   ```html
   <html class="dark">
   ```

3. **Restart dev server:**
   ```bash
   # Stop server (Ctrl+C)
   npm run dev
   ```

## Fitur yang Sudah Diimplementasi:

✅ Toggle button di navbar (desktop & mobile)
✅ Icon berubah (Moon/Sun)
✅ Semua komponen support dark mode
✅ Smooth transition animation
✅ LocalStorage persistence
✅ Debug console logs
✅ Tailwind dark mode class strategy

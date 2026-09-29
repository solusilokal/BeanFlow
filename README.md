# BeanFlow - Distributor Biji Kopi Nusantara Premium

Mini website landing page interaktif untuk **BeanFlow**, distributor dan supplier biji kopi Nusantara pilihan (Arabica Gayo, Robusta Dampit, House Blend Espresso, Toraja Sapan).

---

## 🚀 Cara Melihat / Preview Website

Anda memiliki 2 cara mudah untuk melihat preview website ini:

### Cara 1: Preview Langsung (Tanpa Perlu Terminal/NPM)
1. Buka folder ini di File Explorer:  
   `C:\Users\U S E R\Downloads\Tugas Magang Solusilokal.Id\Mini Website\distributor kopi`
2. Klik dua kali (double-click) file **`preview.html`**.
3. File akan langsung terbuka di Google Chrome, Microsoft Edge, atau browser default Anda dengan semua fitur interaktif aktif!

---

### Cara 2: Menjalankan Local Dev Server (Vite + React)
Jika Anda ingin mengembangkan lebih lanjut dengan Hot-Reloading:

1. Buka Terminal / PowerShell di folder ini.
2. Jalankan perintah:
   ```bash
   npm run dev
   ```
   *(Catatan: Jika di Windows PowerShell muncul security warning untuk npm, gunakan `npm.cmd run dev`)*
3. Buka browser di alamat:
   ```
   http://localhost:3000
   ```

---

### 📦 Build Production
Untuk meng-generate file bundle siap deploy:
```bash
npm run build
```
*(atau `npm.cmd run build`)*  
Hasil file siap hosting akan berada di dalam folder `dist/`.

---

## 📁 Struktur Folder

```
distributor kopi/
├── dist/                          # Hasil build produksi (siap hosting)
├── node_modules/                  # Dependency project
├── src/
│   ├── App.tsx                    # Komponen utama React landing page
│   ├── index.css                  # Style Tailwind + Font Outfit
│   └── main.tsx                   # Entry point React
├── index.html                     # Entry point HTML untuk Vite
├── preview.html                   # Preview langsung sekali klik
├── package.json                   # Konfigurasi dependensi project
├── tailwind.config.js             # Konfigurasi Tailwind CSS tema BeanFlow
├── postcss.config.js              # PostCSS plugins
├── tsconfig.json                  # Konfigurasi TypeScript
├── vite.config.ts                 # Konfigurasi Vite server
└── beanflow_distributor_kopi.tsx  # Source file asli
```

---
*Dibuat untuk tugas SolusiLokal.id*

# Shaxsiy Moliya Boshqaruvchisi

React, TypeScript va Tailwind CSS yordamida yaratilgan shaxsiy moliyani boshqarish uchun veb-ilova.

## Asosiy Imkoniyatlar

- 🤵 Foydalanuvchilarni ro'yxatdan o'tkazish va kirish
- 💰 Daromad va xarajatlarni kuzatish
- 🔄 Turli valyutalar bilan ishlash
- 📊 Moliyaviy hisobotlar va grafiklar
- 🗓️ Vaqt oralig'i bo'yicha filtrlash
- 📱 Mobil qurilmalarga moslashgan dizayn

## Texnologiyalar

- React 18
- TypeScript
- Tailwind CSS
- React Router v6
- Framer Motion (animatsiyalar uchun)
- Recharts (grafiklar uchun)
- LocalStorage (ma'lumotlarni saqlash uchun)

## O'rnatish va Ishga Tushirish

1. Repozitoriyani klonlash:

```bash
git clone https://github.com/username/personal-finance-manager.git
cd personal-finance-manager
```

2. Kerakli paketlarni o'rnatish:

```bash
npm install
```

3. Loyihani ishga tushirish:

```bash
npm run dev
```

4. Brauzerda ochish:

```
http://localhost:5173
```

## Loyiha Tuzilishi

```
src/
  ├── components/     # React komponentlari
  │   ├── auth/      # Autentifikatsiya komponentlari
  │   └── ...
  ├── hooks/         # Custom hook'lar
  ├── types/         # TypeScript turlari
  ├── utils/         # Yordamchi funksiyalar
  └── config/        # Konfiguratsiya fayllari
```

## Duch Kelgan Muammolar va Yechimlar

1. **Muammo**: Foydalanuvchi ma'lumotlarini saqlash

   - **Yechim**: LocalStorage'da userId bo'yicha ma'lumotlarni ajratish
   - **Natija**: Har bir foydalanuvchi o'z ma'lumotlarini ko'radi
2. **Muammo**: Valyuta konvertatsiyasi

   - **Yechim**: Exchange rates API integratsiyasi
   - **Natija**: Real vaqtda valyuta kurslari yangilanishi
3. **Muammo**: Grafiklarni optimizatsiya qilish

   - **Yechim**: Recharts kutubxonasidan foydalanish
   - **Natija**: Tez ishlaydigan va chiroyli grafiklar

## Kelajakdagi Rejalar

1. **Backend Integratsiyasi**

   - Ma'lumotlar bazasi bilan ishlash
   - REST API yaratish
   - JWT autentifikatsiya
2. **Qo'shimcha Funksionallik**

   - Budjet rejalashtirish
   - Xarajatlar bo'yicha eslatmalar
   - Ma'lumotlarni eksport qilish
   - Kategoriyalarni sozlash
3. **UI/UX Takomillashtirish**

   - Qorong'i rejim
   - Ko'proq animatsiyalar
   - Drag-and-drop interfeysi
   - Klaviatura shortcut'lari
4. **Xavfsizlik**

   - Ma'lumotlarni shifrlash
   - Ikki bosqichli autentifikatsiya
   - Session boshqaruvi

## Kontributorlar

- Abduqodir (Loyiha muallifi)

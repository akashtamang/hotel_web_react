# 🏡 Bhattidanda Fresh & Natural Homestay - Web Application

A modern, fully-featured React hotel booking website with an admin panel for managing gallery, activities, reviews, and bookings. Built with TypeScript, Tailwind CSS, and React Router.

**Live Repository:** [github.com/akashtamang/hotel_web_react](https://github.com/akashtamang/hotel_web_react)

---

## ✨ Features

### 🏠 **Client-Side Features**
- ✅ Responsive homepage with hero section
- ✅ Room browsing with detailed room information
- ✅ Interactive booking calendar (check-in/check-out dates)
- ✅ Guest counter (adults & children)
- ✅ Activity showcase with 6+ activities (Hiking, Cycling, Heritage visits, etc.)
- ✅ Photo gallery with category filtering
- ✅ Guest reviews & testimonials
- ✅ Contact information
- ✅ Smooth navigation with functional navbar
- ✅ Mobile-responsive design

### 🔐 **Admin Panel Features**
- ✅ Password-protected admin dashboard (`/admin`)
- ✅ Gallery manager (CRUD operations)
  - Add photos with URL, caption, and category
  - Delete photos
  - Reorder photos (move up/down)
  - Real-time preview
  - Reset to default gallery
- ✅ Category management
- ✅ localStorage persistence (client-side)
- ✅ Success/error messages

---

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 18** | UI framework |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling & responsiveness |
| **React Router DOM** | Client-side routing |
| **React Icons** | Icon library (FA, Fa6) |
| **React Date Range** | Date range picker for bookings |
| **date-fns** | Date formatting |
| **Vite** | Build tool & dev server |

---

## 📁 Project Structure

```
hotel_web_react/
├── Hotel_web_front/              # Frontend React app
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Hero.page.tsx     # Main homepage (all sections)
│   │   │   ├── Main.page.tsx     # Alternative main view
│   │   │   ├── Rooms.tsx         # Room listing page
│   │   │   ├── RoomDetails.tsx   # Individual room details
│   │   │   ├── Gallary.tsx       # Photo gallery
│   │   │   ├── Activity.tsx      # Activities showcase
│   │   │   ├── Review.tsx        # Guest reviews
│   │   │   ├── Booking.form.tsx  # Booking form
│   │   │   ├── Services.tsx      # Services section
│   │   │   └── Admin/
│   │   │       ├── AdminDashboard.tsx      # Admin main layout
│   │   │       ├── AdminLayout.tsx        # Sidebar & navigation
│   │   │       ├── AdminLogin.tsx         # Login page
│   │   │       └── AdminGalleryManager.tsx # Gallery CRUD
│   │   ├── components/
│   │   │   ├── Navbar.tsx        # Navigation with links
│   │   │   ├── Footer.tsx        # Footer section
│   │   │   ├── Booking.section.tsx # Booking toolbar
│   │   │   ├── BookingCalendarManager.tsx
│   │   │   └── Middle.page.tsx   # Middle content section
│   │   ├── data/
│   │   │   ├── rooms.ts          # Room data
│   │   │   ├── gallery.ts        # Gallery data
│   │   │   └── gallery.json      # Gallery JSON
│   │   ├── assets/               # Images, logos, videos
│   │   ├── Route.tsx             # Route definitions
│   │   ├── App.tsx               # Main App component
│   │   └── main.tsx              # Entry point
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── index.html
├── homestay-backend/             # Backend API (Node.js)
│   ├── src/
│   │   ├── server.js
│   │   ├── config/
│   │   ├── controller/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── utils/
│   └── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm installed
- Git installed

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/akashtamang/hotel_web_react.git
cd hotel_web_react
```

2. **Navigate to frontend folder:**
```bash
cd Hotel_web_front
```

3. **Install dependencies:**
```bash
npm install
```

4. **Start development server:**
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 🔑 Admin Access

### Login to Admin Panel
1. Navigate to `http://localhost:5173/admin`
2. **Default Password:** `admin123`
3. ⚠️ **IMPORTANT:** Change this password in `src/pages/Admin/AdminLogin.tsx`

### Change Admin Password
Open `src/pages/Admin/AdminLogin.tsx` and update:
```typescript
const ADMIN_PASSWORD = "your_secure_password_123"; // Change this
```

### Gallery Manager
Once logged in:
- **Add Photo:** Enter image URL, caption, and category
- **View Photos:** See all photos in a table with previews
- **Reorder:** Use arrow buttons to move photos up/down
- **Delete:** Remove photos with trash icon
- **Reset:** Restore default gallery (⚠️ Cannot be undone)

---

## 📝 Key Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Home page (hero + all sections) |
| `/rooms` | Room listing page |
| `/rooms/:id` | Individual room details |
| `/booking` | Booking form page |
| `/booking/:roomId` | Booking for specific room |
| `/admin` | Admin login |
| `/admin/*` | Admin dashboard (after login) |

---

## 🎨 Features Breakdown

### 🏠 **HomePage (Hero.page.tsx)**
- Full-page hero image with overlay
- Hotel name & description
- "View Rooms" CTA button
- Booking section with date range & guest count
- Links to all major sections

### 🛏️ **Rooms Page**
- Room grid with images
- Room details (price, capacity, amenities)
- "Book Now" buttons
- Individual room detail page

### 📷 **Gallery Page**
- Photo grid with category filtering
- Lightbox modal for full-screen viewing
- Admin can manage via `/admin` dashboard

### 🥾 **Activities Page**
Activity cards for:
- Hiking
- Cycling
- Village Walk
- Heritage Visit
- Photography Tour
- Local Cuisine Tasting

Each card includes:
- Icon & gradient background
- Description & highlights
- "Learn More" button

### ⭐ **Reviews Section**
- Guest testimonials with ratings
- Source filter (All, Direct, Booking.com, Tripadvisor)
- Star ratings display
- Write review modal
- Carousel/slider view

### 📅 **Booking Section**
- Date range picker
- Guest counter (adults/children)
- "Find Room" button
- Responsive toolbar

---

## 🔐 Security Notes

⚠️ **Current Implementation:**
- Admin password stored in client-side code (development only)
- Gallery data in localStorage

📌 **For Production:**
1. Implement backend authentication with JWT
2. Move gallery data to database (MongoDB/PostgreSQL)
3. Use environment variables for sensitive data
4. Enable HTTPS
5. Add role-based access control (RBAC)
6. Implement API rate limiting

---

## 🎯 Future Enhancements

- [ ] Backend API integration
- [ ] Real database (MongoDB/PostgreSQL)
- [ ] User authentication & profiles
- [ ] Real booking system with payment
- [ ] Email notifications
- [ ] SMS alerts
- [ ] Admin dashboard for bookings/reviews
- [ ] Multi-language support
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Image optimization & CDN
- [ ] Dark mode

---

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```
Output will be in `dist/` folder

### Deploy Options

**Vercel** (Recommended)
```bash
npm install -g vercel
vercel
```

**Netlify**
```bash
npm run build
# Upload dist/ folder to Netlify
```

**GitHub Pages**
```bash
npm run build
# Push dist/ to gh-pages branch
```

---

## 🐛 Troubleshooting

### Issue: "Cannot find module 'react-date-range'"
**Solution:**
```bash
npm install @types/react-date-range --save-dev
```

### Issue: Gallery photos not saving
**Solution:**
- Check browser DevTools → Application → Local Storage
- Look for "gallery-photos" key
- Clear cache and try again

### Issue: Admin can't login
**Solution:**
- Verify password in `AdminLogin.tsx`
- Check browser console for errors
- Clear localStorage: `localStorage.clear()`

---

## 📄 Environment Variables

Create a `.env` file (if needed):
```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_ADMIN_PASSWORD=admin123
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📞 Support & Contact

- 📧 Email: support@bhattidanda.com
- 🌐 Website: [bhattidanda.com](https://bhattidanda.com)
- 📍 Location: Dhulikhel, Nepal

---

## 📄 License

This project is licensed under the **MIT License** - see `LICENSE` file for details.

---

## 👨‍💻 Author

**Akash Tamang**
- GitHub: [@akashtamang](https://github.com/akashtamang)
- Repository: [hotel_web_react](https://github.com/akashtamang/hotel_web_react)

---

## 🙏 Acknowledgments

- React community for amazing libraries
- Tailwind CSS for styling utilities
- React Icons for icon sets
- All contributors and testers

---

**Last Updated:** November 21, 2025
**Status:** ✅ Active Development

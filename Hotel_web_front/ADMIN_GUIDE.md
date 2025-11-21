# Admin Panel Guide

## Overview
Your hotel website now has a fully functional **Admin Panel** for managing the gallery without modifying code.

## Accessing the Admin Panel

1. **Go to:** `http://localhost:5173/admin`
2. **Enter Password:** `admin123` (change this in `AdminLogin.tsx`)
3. **Access:** Gallery Manager interface

## Admin Panel Features

### 🖼️ Gallery Manager

#### Add Photos
- **Image URL**: Enter a valid image URL (must be a working web link)
- **Caption**: Add a descriptive title for the photo
- **Category**: Organize photos by category (Rooms, Food, Nature, etc.)
- Click **"Add Photo"** to add to gallery

#### Manage Photos
- **View**: See all photos in a table with previews
- **Reorder**: Use up/down arrows to change photo order
- **Delete**: Remove photos with the trash icon
- **Categories**: View all available categories

#### Reset Gallery
- Click **"Reset to Defaults"** to restore the original gallery
- ⚠️ This cannot be undone

## File Structure

```
src/pages/Admin/
├── AdminDashboard.tsx      # Main dashboard component
├── AdminLayout.tsx          # Sidebar & layout
├── AdminGalleryManager.tsx   # Gallery CRUD interface
└── AdminLogin.tsx           # Password authentication
```

## How It Works

1. **Data Storage**: Gallery changes are saved to browser localStorage
2. **Client Display**: The gallery page loads photos from localStorage (if available) or uses defaults
3. **Persistence**: Changes persist across browser sessions
4. **Password Protected**: Simple password protection (change in AdminLogin.tsx)

## Changing Admin Password

Open `src/pages/Admin/AdminLogin.tsx` and change this line:

```typescript
const ADMIN_PASSWORD = "admin123"; // Change this
```

To something secure like:
```typescript
const ADMIN_PASSWORD = "your_secure_password_123";
```

## Important Notes

⚠️ **Security**: This uses localStorage which is client-side storage. For production:
1. Implement backend authentication with JWT tokens
2. Store gallery data in a database (MongoDB/PostgreSQL)
3. Secure API endpoints with role-based access control
4. Use HTTPS for all communications

## Next Steps (Production)

1. Create a backend API endpoint to manage gallery photos
2. Connect admin panel to backend instead of localStorage
3. Add user authentication with JWT
4. Add other admin features (rooms, bookings, reviews management)
5. Implement proper error handling and validation

## Troubleshooting

**Q: Photos not showing after adding?**
- Check if image URL is accessible and correct format (jpg, png, webp)
- Open browser DevTools Console to see any errors

**Q: Can't access admin panel?**
- Make sure you're at `http://localhost:5173/admin`
- Try clearing browser cache and localStorage
- Check browser console for errors

**Q: Need to see all changes?**
- Open DevTools → Application → Local Storage
- Look for "gallery-photos" key

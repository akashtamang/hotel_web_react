# Admin Panel Guide

## Overview
Your hotel website now has a fully functional **Admin Panel** for managing the gallery without modifying code.

## Accessing the Admin Panel

1. **Go to:** `http://localhost:5174/admin`
2. **Enter Password:** `admin123` (change this in `AdminLogin.tsx`)
3. **Access:** Gallery Manager interface

## Admin Panel Features

### 🖼️ Gallery Manager

#### Add Photos
- **Upload Image**: Click to select and upload an image file from your device (JPG, PNG, WebP, etc.)
- **File Size Limit**: Maximum 5MB per image
- **Caption**: Add a descriptive title for the photo
- **Category**: Select from existing categories (Rooms, Food, Nature, People) or add new ones
- Click **"Add Photo"** to upload to gallery

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

1. **Data Storage**: Gallery photos are converted to base64 and saved to browser localStorage
2. **Image Format**: Images are stored as base64 strings for easy persistence
3. **Client Display**: The gallery page loads photos from localStorage (if available) or uses defaults
4. **Persistence**: Changes persist across browser sessions
5. **Category Dropdown**: Dynamically shows all existing categories from current gallery
6. **Password Protected**: Simple password protection (change in AdminLogin.tsx)

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

**Q: What image formats are supported?**
- JPG, PNG, WebP, GIF, and other common image formats are supported
- Maximum file size: 5MB

**Q: Photos not showing after uploading?**
- Check browser console for errors
- Make sure file size is under 5MB
- Try refreshing the page

**Q: Category dropdown is empty?**
- The dropdown is populated from existing gallery photos
- If you're adding the first photo, select from preset categories: Rooms, Food, Nature, People
- After adding a photo, custom categories will appear in the dropdown

**Q: Can't access admin panel?**
- Make sure you're at `http://localhost:5174/admin`
- Try clearing browser cache and localStorage
- Check browser console for errors

**Q: Need to see all changes?**
- Open DevTools → Application → Local Storage
- Look for "gallery-photos" key to see stored data

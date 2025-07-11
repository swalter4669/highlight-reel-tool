
# Highlight Reel Tool

## Deploy Instructions

### 🚀 Backend (Railway)
1. Deploy `backend/` folder to Railway.
2. Ensure `nixpacks.toml` is present (installs ffmpeg).
3. Railway will auto-detect Node.js and launch `server.js`.

### 🌐 Frontend (Vercel)
1. Deploy `frontend/` folder to Vercel.
2. In Vercel settings, add:
   - `REACT_APP_API_BASE_URL=https://your-railway-app.up.railway.app`
3. Deploy and test.

Upload a .mp4 video on the site and it will generate a 2-minute highlight.

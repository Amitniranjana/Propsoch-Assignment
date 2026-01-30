# Deployment Checklist - Propsoch

## What was Fixed:
✅ **CSS/Styling Configuration** - Fixed Tailwind CSS v4 import in `globals.css` and `postcss.config.mjs`

## Things to Check on Your Deployment Platform (Vercel, Netlify, etc.):

### 1. **Build Settings**
- [ ] Build command: `npm run build` ✓
- [ ] Start command: `npm run start`
- [ ] Node version: 18+ recommended
- [ ] Output directory: `.next` (auto-detected)

### 2. **Environment Variables**
Add these to your deployment platform if needed:
- `NODE_ENV=production` (usually auto-set)
- Check if any external APIs need URLs

### 3. **Image Loading Issues**
- Your app loads images from `images.unsplash.com` and `placehold.co`
- These are configured in `next.config.ts`
- Make sure these domains aren't blocked in production

### 4. **Check Public Assets**
- Verify `/public` folder is being deployed
- Check that any static files are accessible

### 5. **CSS/Styling Verification**
If styles still don't appear:
```bash
# Run locally to verify
npm run dev
# Visit http://localhost:3000 and check:
# - Hero section appears with gradient and background
# - Navbar is fixed at top with dark background
# - All text is visible and styled
```

### 6. **Common Issues & Solutions**

| Issue | Cause | Solution |
|-------|-------|----------|
| Page shows but no styling | CSS not loading | Check next.config.ts, ensure postcss.config.mjs is correct |
| Images not showing | Image optimization blocked | Add image domains to next.config.ts |
| Text invisible | Color contrast issue | Check background vs text colors |
| Layout broken on mobile | Missing responsive classes | Verify Tailwind mobile-first breakpoints |

### 7. **Deployment Platform Specific**

**For Vercel:**
- No special configuration needed
- Just connect your GitHub repo
- It auto-detects Next.js projects

**For Netlify:**
- Use `next export` (static export) if not using API routes
- Set build command to `npm run build`

**For Self-hosted (AWS, etc.):**
- Ensure Node.js is installed
- Run `npm install && npm run build && npm run start`
- Set `NODE_ENV=production`

## Quick Debug Steps:

1. **Check browser console** for JavaScript errors
2. **Check network tab** for failed CSS/image requests
3. **Check build logs** on your deployment platform
4. **Verify fonts** are loading (custom fonts if any)
5. **Test responsive** design on mobile

## After Deployment:
Once deployed, verify:
- [ ] Hero section appears
- [ ] Navigation bar is visible
- [ ] All colors/gradients show
- [ ] Images load properly
- [ ] Responsive on mobile
- [ ] No console errors

---

**If styling still doesn't appear after deployment**, reply with your deployment platform (Vercel, Netlify, etc.) and I can help debug further!

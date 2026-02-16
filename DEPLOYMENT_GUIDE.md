# 🚀 Deployment Guide - Glow Shoe Laundry

## ✅ Pre-Deployment Checklist

- [x] Modern design implemented
- [x] All pages responsive
- [x] Native form with FormSubmit.co
- [x] Images optimized
- [x] Build tested successfully
- [x] .gitignore configured
- [x] Custom domain ready (glowshoelaundry.com)

## 📦 What to Deploy

Deploy the **`dist/`** folder contents to your web server.

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended - FREE)

1. **Stage all changes:**
   ```bash
   git add .
   ```

2. **Commit changes:**
   ```bash
   git commit -m "Complete website modernization with native form"
   ```

3. **Push to GitHub:**
   ```bash
   git push origin feature
   ```

4. **Merge to main branch:**
   ```bash
   git checkout main
   git merge feature
   git push origin main
   ```

5. **Deploy dist folder:**
   ```bash
   # Install gh-pages if not already installed
   npm install -D gh-pages
   
   # Deploy dist folder to gh-pages branch
   npx gh-pages -d dist
   ```

6. **Configure GitHub Pages:**
   - Go to: https://github.com/glowshoelaundary/glowshoelaundary.github.io/settings/pages
   - Source: Deploy from branch
   - Branch: `gh-pages` / `root`
   - Save

7. **Add Custom Domain:**
   - In GitHub Pages settings, add: `glowshoelaundry.com`
   - Create `CNAME` file in `public/` folder with content: `glowshoelaundry.com`
   - Rebuild: `npm run build`

8. **Configure DNS (at your domain registrar):**
   ```
   Type: A Record
   Name: @
   Value: 185.199.108.153
   
   Type: A Record
   Name: @
   Value: 185.199.109.153
   
   Type: A Record
   Name: @
   Value: 185.199.110.153
   
   Type: A Record
   Name: @
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: glowshoelaundary.github.io
   ```

### Option 2: Netlify (Alternative - FREE)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod --dir=dist
   ```

4. **Or use Netlify Drop:**
   - Go to: https://app.netlify.com/drop
   - Drag and drop the `dist/` folder

### Option 3: Vercel (Alternative - FREE)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

## 🔧 Build Commands

### Development Server
```bash
npm run dev
```
Runs at: http://localhost:5173

### Production Build
```bash
npm run build
```
Output: `dist/` folder

### Preview Production Build
```bash
npm run preview
```

## 📋 Post-Deployment Tasks

### 1. Test the Order Form
- [ ] Visit: https://glowshoelaundry.com/orderform.html
- [ ] Submit a test order
- [ ] Check email: kngkatak@gmail.com
- [ ] Click FormSubmit confirmation link
- [ ] Test form again to ensure it works

### 2. Verify All Pages
- [ ] Homepage (/)
- [ ] About (/about.html)
- [ ] Services (/services.html)
- [ ] Gallery (/gallery.html)
- [ ] Contact (/contact.html)
- [ ] FAQ (/faq.html)
- [ ] Order Form (/orderform.html)
- [ ] Testimonials (/testimonial.html)
- [ ] Terms (/terms.html)
- [ ] Thank You (/thankyou.html)

### 3. Test Responsive Design
- [ ] Desktop (1920px)
- [ ] Laptop (1366px)
- [ ] Tablet (768px)
- [ ] Mobile (375px)

### 4. SEO & Analytics
- [ ] Submit sitemap to Google Search Console
- [ ] Add Google Analytics (optional)
- [ ] Verify meta tags
- [ ] Test social media sharing

### 5. Performance Check
- [ ] Run Lighthouse audit
- [ ] Check page load speed
- [ ] Verify images load correctly
- [ ] Test form submission

## 🎯 Quick Deploy Script

Create `deploy.sh`:
```bash
#!/bin/bash

echo "🏗️  Building production site..."
npm run build

echo "📦 Deploying to GitHub Pages..."
npx gh-pages -d dist

echo "✅ Deployment complete!"
echo "🌐 Your site will be live at: https://glowshoelaundry.com"
```

Make it executable:
```bash
chmod +x deploy.sh
```

Run it:
```bash
./deploy.sh
```

## 📊 File Structure (What Gets Deployed)

```
dist/
├── index.html
├── about.html
├── services.html
├── contact.html
├── gallery.html
├── faq.html
├── orderform.html
├── testimonial.html
├── terms.html
├── thankyou.html
├── assets/
│   ├── main-[hash].css
│   └── main-[hash].js
└── images/
    ├── logo.png
    ├── leather.jpg
    ├── sports-clean.png
    ├── suede-clean.png
    └── ... (all optimized images)
```

## 🔒 SSL Certificate

GitHub Pages automatically provides free SSL certificate for:
- glowshoelaundary.github.io
- glowshoelaundry.com (after DNS configuration)

## 📈 Monitoring

After deployment, monitor:
- Form submissions (kngkatak@gmail.com)
- Website traffic
- Page load times
- Mobile performance

## 🆘 Troubleshooting

### Form not working?
1. Check FormSubmit.co confirmation email
2. Verify email: kngkatak@gmail.com
3. Check `_next` redirect URL matches your domain

### Custom domain not working?
1. Wait 24-48 hours for DNS propagation
2. Verify CNAME file exists in dist/
3. Check DNS settings at registrar

### Images not loading?
1. Check file paths (should be relative)
2. Verify images exist in public/ folder
3. Rebuild: `npm run build`

## 🎉 You're Ready!

Your website is production-ready. Just run:
```bash
npm run build
npx gh-pages -d dist
```

Then configure your DNS and you're live! 🚀

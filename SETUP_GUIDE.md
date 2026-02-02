# COMPLETE SETUP GUIDE FOR GITHUB PAGES

## 📦 What's Included

This package contains everything needed to host your Black Death game on GitHub Pages using Vite and automatic deployment:

### Core Files
- `index.html` - Main game HTML
- `src/main.js` - Game JavaScript logic
- `src/index.html` - Original game file (backup)

### Configuration Files
- `package.json` - Project dependencies
- `package-lock.json` - Dependency lock file
- `vite.config.js` - Vite build configuration
- `.gitignore` - Git ignore rules

### Deployment Files
- `.github/workflows/deploy.yml` - Automatic deployment script
- `README.md` - Documentation

## 🚀 SETUP STEPS

### Step 1: Customize Configuration

Before uploading, replace `YOUR-USERNAME` in these files:

**1. package.json** (line 15):
```json
"homepage": "https://YOUR-GITHUB-USERNAME.github.io/black-death-game/"
```

**2. vite.config.js** (line 4):
```javascript
base: '/black-death-game/'
```

**3. README.md** (multiple places)

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `black-death-game`
3. Make it **Public** (required for free GitHub Pages)
4. **DO NOT** initialize with README (we have our own)
5. Click "Create repository"

### Step 3: Upload Files

**Option A: GitHub Web Interface (Easier)**

1. In your new repository, click "uploading an existing file"
2. Drag ALL files and folders from this package
3. Make sure to include the `.github` folder!
4. Commit changes

**Option B: Git Command Line**

```bash
cd /path/to/black-death-vite-setup

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/black-death-game.git
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to repository **Settings**
2. Click **Pages** in the left sidebar
3. Under **Source**:
   - Branch: **gh-pages** (not main!)
   - Folder: **/ (root)**
4. Click **Save**

**Important:** Select `gh-pages` branch, NOT `main` branch!

### Step 5: Wait for Automatic Deployment

1. Go to the **Actions** tab in your repository
2. You'll see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 2-3 minutes)
4. Green checkmark = success!

### Step 6: Access Your Game

Your game will be live at:
```
https://YOUR-USERNAME.github.io/black-death-game/
```

## 🔄 How This Setup Works

### Automatic Deployment Process

1. **You push to `main` branch** 
   ↓
2. **GitHub Actions triggers** (defined in `.github/workflows/deploy.yml`)
   ↓
3. **Workflow runs:**
   - Installs Node.js
   - Runs `npm install`
   - Runs `npm run build` (Vite builds the project)
   - Creates optimized files in `dist/` folder
   ↓
4. **Deploys to `gh-pages` branch**
   - Pushes `dist/` contents to `gh-pages` branch
   ↓
5. **GitHub Pages serves from `gh-pages` branch**
   - Your game is live!

### Why Two Branches?

- **`main` branch**: Your source code (editable files)
- **`gh-pages` branch**: Built/optimized files (auto-generated, don't edit)

## 📁 File Structure Explained

```
black-death-game/
├── .github/
│   └── workflows/
│       └── deploy.yml          ← Automatic deployment script
│
├── src/
│   ├── index.html              ← Backup of original game
│   └── main.js                 ← Game JavaScript logic
│
├── index.html                  ← Main HTML file (what users see)
├── vite.config.js              ← Build settings (IMPORTANT!)
├── package.json                ← Dependencies list
├── package-lock.json           ← Dependency versions
├── .gitignore                  ← Files to ignore (node_modules, etc.)
└── README.md                   ← Documentation
```

## 🛠️ Local Development (Optional)

If you want to test changes locally before pushing:

### Install Node.js

Download from: https://nodejs.org/ (version 18 or higher)

### Install Dependencies

```bash
cd black-death-game
npm install
```

### Run Development Server

```bash
npm run dev
```

Opens at: http://localhost:5173

### Build for Production

```bash
npm run build
```

Creates optimized files in `dist/` folder

### Preview Production Build

```bash
npm run preview
```

## 🔄 Making Updates

### Quick Updates (Edit on GitHub)

1. Go to your repository
2. Navigate to file you want to edit
3. Click pencil icon
4. Make changes
5. Commit changes
6. **Automatic deployment triggers!**
7. Wait 2-3 minutes
8. Refresh your game page

### Local Updates

1. Edit files locally
2. Test with `npm run dev`
3. Commit changes:
   ```bash
   git add .
   git commit -m "Update game"
   git push
   ```
4. **Automatic deployment triggers!**
5. Wait 2-3 minutes

## ⚠️ Common Issues

### Issue: "404 - Page Not Found"

**Solutions:**
1. Wait 3-5 minutes (first deployment takes longer)
2. Check **Actions** tab - is workflow still running?
3. Verify GitHub Pages is enabled and set to **gh-pages** branch
4. Check `vite.config.js` - base path must be `/black-death-game/`
5. Hard refresh browser: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)

### Issue: Styles Don't Load / Broken Page

**Solutions:**
1. Check `vite.config.js` - base path must match repository name
2. If repo name is different, update base path
3. Clear browser cache
4. Check browser console (F12) for errors

### Issue: Workflow Fails (Red X in Actions)

**Solutions:**
1. Click on the failed workflow to see error
2. Common errors:
   - **"npm ci failed"**: Delete `package-lock.json` and regenerate
   - **"build failed"**: Check JavaScript for syntax errors
   - **"permission denied"**: Check repository settings → Actions → Workflow permissions
3. Fix the error, commit, and push again

### Issue: gh-pages Branch Doesn't Exist

**Solutions:**
1. Push to main branch first
2. Wait for GitHub Actions to complete
3. The workflow creates `gh-pages` branch automatically
4. Then enable GitHub Pages and select `gh-pages` branch

### Issue: "npm ci requires a package-lock.json"

**Solutions:**
1. Make sure `package-lock.json` is included in your repository
2. Don't add `package-lock.json` to `.gitignore`
3. If missing, run `npm install` locally to generate it

## ✅ Verification Checklist

Before asking for help, verify:

- [ ] Repository is **Public**
- [ ] All files uploaded (including `.github` folder)
- [ ] `vite.config.js` has correct base path
- [ ] `package.json` has correct homepage URL
- [ ] **Pushed to main branch**
- [ ] GitHub Actions workflow completed successfully (green checkmark)
- [ ] GitHub Pages enabled and set to **gh-pages** branch
- [ ] Waited at least 3-5 minutes
- [ ] Hard refreshed browser (Ctrl+F5)

## 📊 Monitoring Deployment

### Check Actions Tab

1. Go to repository **Actions** tab
2. See list of workflow runs
3. Green checkmark = successful deployment
4. Red X = failed deployment (click to see error)
5. Yellow circle = still running

### Workflow Typically Takes:

- First deployment: 2-5 minutes
- Subsequent deployments: 1-2 minutes

## 🎯 Differences from Mountain Man Setup

This Black Death game uses the SAME setup structure as Mountain Man:

✅ Same folder structure  
✅ Same deployment process  
✅ Same `gh-pages` branch system  
✅ Same automatic deployment  

**To Replicate:**
Just copy the Mountain Man repository structure and replace:
- `index.html` with Black Death version
- `src/main.js` with Black Death game logic
- Update `package.json` repository name/homepage

## 💡 Pro Tips

1. **Test Locally First**: Run `npm run dev` before pushing
2. **Watch Actions Tab**: Monitor deployments in real-time
3. **Branch Protection**: Keep `gh-pages` protected (don't manually edit)
4. **Cache Issues**: Use Ctrl+F5 to hard refresh
5. **Multiple Games**: Use different repository names, update base paths

## 📞 Getting Help

If stuck, check in this order:

1. **Actions Tab**: Any red X errors?
2. **Browser Console (F12)**: Any JavaScript errors?
3. **GitHub Pages Settings**: Is it enabled? Right branch selected?
4. **This Guide**: Did you follow all steps?

## 🎉 Success Indicators

You'll know it's working when:

1. ✅ Actions tab shows green checkmark
2. ✅ `gh-pages` branch exists and has files
3. ✅ GitHub Pages shows "Your site is live at..."
4. ✅ Game loads at your GitHub Pages URL
5. ✅ All styles, fonts, and features work
6. ✅ You can select attributes and play rounds

## 📚 Additional Resources

- **Vite Docs**: https://vitejs.dev/
- **GitHub Actions**: https://docs.github.com/en/actions
- **GitHub Pages**: https://docs.github.com/en/pages

---

**Ready to deploy? Start with Step 1!** 🚀

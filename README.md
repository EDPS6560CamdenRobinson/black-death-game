# Black Death Survival Game

An educational simulation game about surviving the Black Death plague in medieval Europe (1347-1353).

## 🎮 Live Game

Visit: [https://YOUR-USERNAME.github.io/black-death-game/](https://YOUR-USERNAME.github.io/black-death-game/)

## 🚀 Quick Setup for GitHub Pages

### 1. Update Configuration

Before pushing, update these files with your GitHub username:

**package.json:**
```json
"homepage": "https://YOUR-USERNAME.github.io/black-death-game/"
```

**vite.config.js:**
```javascript
base: '/black-death-game/'
```

### 2. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/black-death-game.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to repository **Settings**
2. Click **Pages** in left sidebar
3. Under **Source**, select:
   - Branch: **gh-pages**
   - Folder: **/ (root)**
4. Click **Save**

### 4. Wait for Deployment

- GitHub Actions will automatically build and deploy to the `gh-pages` branch
- Check the **Actions** tab to see deployment progress
- Your game will be live in 2-3 minutes!

## 🛠️ Local Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
black-death-game/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── src/
│   ├── index.html              # Original game file (reference)
│   └── main.js                 # Game logic (JavaScript)
├── index.html                  # Main HTML file
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies
├── package-lock.json           # Dependency lock file
└── README.md                   # This file
```

## 🎯 How It Works

1. **Push to main branch** → Triggers GitHub Actions
2. **GitHub Actions** → Installs dependencies, builds project with Vite
3. **Deploy** → Pushes built files to `gh-pages` branch
4. **GitHub Pages** → Serves the game from `gh-pages` branch

## 📝 Game Features

- 8 Attributes (choose 2) with pros/cons
- 10 Supplies (choose 5) with pros/cons
- 15 Different scenarios across 3 categories:
  - Disease (plague transmission, infection)
  - Social (mob violence, accusations, persecution)
  - Economic (market collapse, labor shortage, taxation)
- 10 Rounds of survival challenges
- Detailed feedback and historical context

## 🔄 Making Updates

1. Edit files locally
2. Commit and push to main branch
3. GitHub Actions automatically rebuilds and deploys
4. Changes appear in 2-3 minutes

## 🐛 Troubleshooting

### Game shows 404
- Wait 2-3 minutes after first push
- Check Actions tab for deployment status
- Verify GitHub Pages is enabled and set to `gh-pages` branch

### Styles don't load
- Check vite.config.js has correct base path
- Clear browser cache (Ctrl+F5)

### Deployment fails
- Check Actions tab for error messages
- Verify package.json and package-lock.json are committed
- Ensure node_modules is in .gitignore

## 📚 Educational Use

Perfect for teaching about:
- The Black Death pandemic
- Medieval history and society
- Historical decision-making
- Trade-offs in survival strategies

## 📜 License

MIT License - Free for educational use

## 🙏 Credits

Created for educational purposes to teach medieval history and the Black Death pandemic.

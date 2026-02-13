# 🔥 TEMU Hide Local Products - Firefox Version

> Original by [Sezer İltekin](https://x.com/sezeriltekin) | Ported to Firefox with full MV3 compatibility

A Firefox extension that automatically hides local warehouse products on Temu, showing only direct Temu-shipped items for a cleaner shopping experience.

**Firefox'a uyarlanmış versiyon - Tam MV3 uyumluluğu ile**

---

## ✨ Features

- ✅ Automatically detects and hides "Local Warehouse" products
- ✅ Full Firefox MV3 manifest compatibility  
- ✅ Cross-browser compatible (Firefox + Chrome)
- ✅ browserAPI polyfill for seamless browser switching
- ✅ 12 language support (TR, EN, DE, FR, ES, IT, PT, NL, PL, JA, KO, AR)
- ✅ Popup counter showing hidden items per page
- ✅ Optional affiliate link support for developer

---

## 🚀 Installation

### Method 1: Load Temporary Add-on (Development)

1. Clone or download this repository
2. Open Firefox and go to `about:debugging#/runtime/this-firefox`
3. Click **"Load Temporary Add-on"**
4. Select `manifest.json` from this folder
5. ✅ Done! Extension is now active

> **Note:** Temporary add-ons are removed when Firefox restarts. For permanent installation, see Method 2 below.

### Method 2: Permanent Installation (Firefox Developer Edition)

1. Use Firefox Developer Edition (supports permanent unsigned extensions)
2. Follow Method 1 steps - extensions persist across restarts

### Method 3: Build & Package

```bash
# For submission to Firefox Add-ons store (requires signing)
zip -r remove-local-temu.xpi *.js *.json *.html manifest.json _locales/ icons/
```

---

## 📋 Technical Details

### What was changed for Firefox compatibility?

- ✅ Replaced `chrome` namespace with `browser` API (with fallback polyfill)
- ✅ Updated manifest version 3 for Firefox MV3 support
- ✅ Added `browser_specific_settings` for Firefox identification
- ✅ Replaced `service_worker` with `scripts` in background configuration
- ✅ Added error handling for Firefox-specific API differences
- ✅ Promise-based storage API wrapper for better compatibility

### Project Structure

```
.
├── manifest.json              # Extension configuration (Firefox MV3)
├── background.js             # Background script with browserAPI
├── content.js                # Content script with full Firefox support
├── popup.js                  # Popup UI script
├── onboarding.js             # Onboarding flow
├── popup.html & onboarding.html
├── _locales/                 # Multi-language support (12 languages)
├── icons/                    # Extension icons
├── README.md                 # This file
└── example_config.json       # Configuration example

```

---

## 🌐 Browser Support

| Browser | Status | Notes |
|---------|--------|-------|
| **Firefox** | ✅ Full | MV3 compatible, all features working |
| **Chrome** | ✅ Full | Original compatibility maintained |
| **Edge** | ✅ Full | Chromium-based, uses Chrome APIs |

---

## 🛠️ Development

### Running Locally

```bash
# 1. Clone this repository
git clone https://github.com/zenith3169-arch/remove-local-temu-firefox-version.git
cd remove-local-temu-firefox-version

# 2. Load in Firefox (see Installation > Method 1)
```

### Key Changes Made for Firefox

See `background.js`, `popup.js`, `content.js`, `onboarding.js` for:
- `const browserAPI = typeof browser !== 'undefined' ? browser : chrome;`
- Try-catch blocks around Firefox-incompatible APIs
- Promise wrappers for compatibility

---

## 📝 Original Repository

This is a Firefox port of: https://github.com/iltekin/remove-local-temu

Original author: **Sezer İltekin** [@sezeriltekin](https://x.com/sezeriltekin)

---

## 📄 License

Same as original repository

## 🤝 Contributing

Contributions welcome! Feel free to open issues or submit PRs.

---

**Made for Firefox with ❤️**


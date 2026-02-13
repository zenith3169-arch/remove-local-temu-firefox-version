// Use browser namespace for Firefox, fall back to chrome for Chrome
const browserAPI = typeof browser !== 'undefined' ? browser : chrome;

const toggleCheck = document.getElementById("toggleCheck");
const affiliateCheck = document.getElementById("affiliateCheck");
const statusText = document.getElementById("statusText");
const hiddenCountSpan = document.getElementById("hiddenCount");

// Localization
function localize() {
  document.querySelectorAll('[data-i18n]').forEach(elem => {
    const key = elem.getAttribute('data-i18n');
    const msg = browserAPI.i18n.getMessage(key);
    if (msg) elem.textContent = msg;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  localize();

  // Firefox: Use Promise-based API; Chrome: Use callback
  const storageGet = (key) => {
    return new Promise((resolve) => {
      browserAPI.storage.sync.get(key, resolve);
    });
  };

  storageGet({ enabled: true, affiliateEnabled: false }).then((data) => {
    updateUI(data.enabled);
    affiliateCheck.checked = data.affiliateEnabled;
  });

  browserAPI.storage.local.get({ totalHidden: 0, affiliateData: null }, (data) => {
    hiddenCountSpan.textContent = data.totalHidden;

    if (data.affiliateData && data.affiliateData.popup_html) {
      const footer = document.querySelector('.footer');
      if (footer) {
        footer.innerHTML = data.affiliateData.popup_html;
      }
    } else {
      // If data is missing or no popup_html, try to fetch fresh data
      // This covers the case where the user opens the popup before visiting a Temu page
      try {
        browserAPI.runtime.sendMessage({ action: "FETCH_AFFILIATE_DATA" }, (response) => {
          if (response && response.success && response.data) {
            browserAPI.storage.local.set({ affiliateData: response.data });
            if (response.data.popup_html) {
              const footer = document.querySelector('.footer');
              if (footer) footer.innerHTML = response.data.popup_html;
            }
          }
        });
      } catch (e) {
        // Ignore errors in background script communication
      }
    }
  });
});

function updateUI(enabled) {
  toggleCheck.checked = enabled;
  const activeText = browserAPI.i18n.getMessage("statusActive");
  const inactiveText = browserAPI.i18n.getMessage("statusInactive");
  statusText.textContent = enabled ? activeText : inactiveText;
  statusText.classList.toggle("off", !enabled);
}

toggleCheck.addEventListener("change", () => {
  const newState = toggleCheck.checked;
  browserAPI.storage.sync.set({ enabled: newState }, () => {
    updateUI(newState);
    // Reload active tab to apply changes immediately
    // Firefox may not support tabs.query in some contexts
    try {
      browserAPI.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs && tabs[0] && tabs[0].id) {
          try {
            browserAPI.tabs.reload(tabs[0].id);
          } catch (e) {
            // Ignore errors if tabs API is not available
          }
        }
      });
    } catch (e) {
      // Firefox: tabs API may not be available in popup context
      console.debug('Could not reload tab:', e);
    }
  });
});

affiliateCheck.addEventListener("change", () => {
  const newState = affiliateCheck.checked;
  browserAPI.storage.sync.set({ affiliateEnabled: newState });
});


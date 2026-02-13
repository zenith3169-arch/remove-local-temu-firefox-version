// Use browser namespace for Firefox, fall back to chrome for Chrome
const browserAPI = typeof browser !== 'undefined' ? browser : chrome;

// Localization
function localize() {
    document.querySelectorAll('[data-i18n]').forEach(elem => {
        const key = elem.getAttribute('data-i18n');
        const msg = browserAPI.i18n.getMessage(key);
        if (msg) elem.textContent = msg;
    });
}

document.addEventListener('DOMContentLoaded', localize);

document.getElementById('enableAffiliate').addEventListener('click', () => {
    browserAPI.storage.sync.set({ affiliateEnabled: true }, () => {
        // Show a little feedback maybe?
        const btn = document.getElementById('enableAffiliate');
        btn.textContent = "Enabled! ❤️";
        btn.style.background = "#fff";
        setTimeout(() => {
            try {
                window.close(); // Close the tab
            } catch (e) {
                // Firefox: window.close() may fail, just hide or navigate
                console.debug('Could not close window:', e);
            }
        }, 1000);
    });
});

document.getElementById('skipAffiliate').addEventListener('click', () => {
    browserAPI.storage.sync.set({ affiliateEnabled: false }, () => {
        try {
            window.close();
        } catch (e) {
            console.debug('Could not close window:', e);
        }
    });
});

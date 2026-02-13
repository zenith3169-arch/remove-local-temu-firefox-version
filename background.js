// Use browser namespace for Firefox, fall back to chrome for Chrome
const browserAPI = typeof browser !== 'undefined' ? browser : chrome;

browserAPI.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "FETCH_AFFILIATE_DATA") {
        fetch('https://iltekin.com/extensions/remove-local-temu/data.json')
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(data => sendResponse({ success: true, data: data }))
            .catch(error => sendResponse({ success: false, error: error.message }));

        return true; // Will respond asynchronously
    }
});
// ... existing fetch listener ...

browserAPI.runtime.onInstalled.addListener((details) => {
    // Firefox: details.reason is a string; Chrome: OnInstalledReason enum
    if (details.reason === 'install' || details.reason === browserAPI.runtime.OnInstalledReason?.INSTALL) {
        browserAPI.tabs.create({ url: "onboarding.html" });
    }
});

chrome.storage.sync.get({ enabled: true }, (data) => {
    if (data.enabled) removeLocalProducts();
});

const observer = new MutationObserver(() => {
    chrome.storage.sync.get({ enabled: true }, (data) => {
        if (data.enabled) removeLocalProducts();
    });
});

observer.observe(document.body, { childList: true, subtree: true });

function removeLocalProducts() {
    document.querySelectorAll('span').forEach(span => {
        if (span.textContent.trim() === 'Yerel') {
            const productContainer = span.closest('div[role="group"]');
            if (productContainer) productContainer.remove();
        }
    });
}
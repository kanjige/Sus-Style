chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'PRODUCT_INFO') {
      const productInfo = message.productInfo;
      // Fetch environmental score from an API
      fetch(`https://api.example.com/eco-score?brand=${productInfo.brand}`)
        .then(response => response.json())
        .then(data => {
          // Send score to content script or popup
          chrome.tabs.sendMessage(sender.tab.id, { type: 'ECO_SCORE', score: data.score });
        });
    }
  });
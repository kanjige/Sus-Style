chrome.runtime.onMessage.addListener((message) => {
    if (message.type === 'ECO_SCORE') {
      const score = message.score;
      // Display the eco score in the popup
      document.getElementById('product-info').innerText = `Eco Score: ${score}`;
    }
});
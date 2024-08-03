// Extract product information from the webpage
const productInfo = {
    title: document.querySelector('h1.product-title').innerText,
    brand: document.querySelector('span.brand-name').innerText,
    // Add more fields as needed
  };
  
  // Send product info to the background script
  chrome.runtime.sendMessage({ type: 'PRODUCT_INFO', productInfo });
  
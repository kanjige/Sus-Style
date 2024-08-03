const clothingBrands = ["Nike", "Adidas", "Puma", "Under Armour", "Reebok", "Gildan", "COOFANDY", "Fruit of the Loom", "JMIERR", "Jerzees", "Blencot", "Wiholl", "Avidlove", "CTHH", "Heymoments"];

function detectBrands() {
  const bodyText = document.body.innerText;
  const detectedBrands = clothingBrands.filter(brand => bodyText.includes(brand));
  
  if (detectedBrands.length > 0) {
    chrome.runtime.sendMessage({ brands: detectedBrands });
  }
}

detectBrands();

document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get(['brandData'], (result) => {
      const brandData = result.brandData || [];
      const brandDataDiv = document.getElementById('brandData');
  
      if (brandData.length > 0) {
        brandDataDiv.innerHTML = brandData.map(data => `<p>${data[0]}: ${data[1]}</p>`).join('');
      } else {
        brandDataDiv.textContent = 'No brands detected.';
      }
    });
  });
  
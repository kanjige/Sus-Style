function fetchBrandData(brands) {
    const SHEET_ID = '';
    const API_KEY = '';
    const RANGE = 'Brands!A:D'; // Adjust the range according to your sheet
  
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.values) {
          const brandData = data.values.filter(row => brands.includes(row[1]));
          chrome.storage.local.set({ brandData });
          console.log("brand: ", brandData);
        } else {
          console.error('No data found in the sheet.');
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  

const chromeLauncher = require('chrome-launcher');
const path = require('path')

chromeLauncher.launch({
  startingUrl: path.join(__dirname,'..','index.html')
}).then(chrome => {
  console.log(`Chrome debugging port running on ${chrome.port}`);
});
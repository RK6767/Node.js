const fs = require('fs');
const path = require('path');

// Specify the file paths
const filePath1 = path.join(__dirname, 'file1.txt');
const filePath2 = path.join(__dirname, 'file2.txt');
const combinedFilePath = path.join(__dirname, 'combined.txt');

// Read content from file1.txt
fs.readFile(filePath1, 'utf8', (err1, data1) => {
  if (err1) {
    console.error('Error reading file1:', err1);
    return;
  }

  // Read content from file2.txt
  fs.readFile(filePath2, 'utf8', (err2, data2) => {
    if (err2) {
      console.error('Error reading file2:', err2);
      return;
    }

    // Combine the content
    const combinedContent = data1 + '\n' + data2;

    // Write the combined content to combined.txt
    fs.writeFile(combinedFilePath, combinedContent, 'utf8', (err3) => {
      if (err3) {
        console.error('Error writing combined file:', err3);
      } else {
        console.log('Files combined successfully.');
      }
    });
  });
});

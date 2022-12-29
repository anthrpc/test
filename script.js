$(document).ready(function () {
    var e = ace.edit("code");
    e.getSession().setMode("ace/mode/html");
    e.setTheme("ace/theme/xcode");
    e.setValue(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
        
</body>
</html>`);

    $("#btn").on("click", function () {
        $("#output").html(e.getValue());
    });
});

// Add an event listener to the button element
document.getElementById('download-btn').addEventListener('click', function() {
  // Get the code from the code editor
  var code = ace.edit('code').getValue();

  // Create a new Blob object containing the code
  var blob = new Blob([code], {type: 'text/plain'});

  // Use the saveAs function from the FileSaver.js library to initiate the download
  saveAs(blob, 'code.txt');
});

// Get a reference to the "Open File" button and the file input element
const openFileButton = document.querySelector('#open-file-button');
const fileInput = document.querySelector('#file-input');

// Add an event listener to the "Open File" button that opens the file input element
openFileButton.addEventListener('click', () => {
  fileInput.click();
});

// Add an event listener to the file input element that reads the selected file
fileInput.addEventListener('change', event => {
  const file = event.target.files[0];
  
  // Use the FileReader API to read the contents of the file
  const reader = new FileReader();
  reader.onload = event => {
    // Get the contents of the file as a string
    const fileContents = event.target.result;
    
    // Update the code editor with the contents of the file
    // (assuming that you are using the Ace code editor)
    ace.edit('code').setValue(fileContents);
  };
  reader.readAsText(file);
});


// JavaScript for applying the changes from the settings modal
const saveSettingsBtn = document.querySelector('#saveSettingsBtn');
const fontSizeSelect = document.querySelector('#fontSizeSelect');
const codeElement = document.querySelector('#code');

saveSettingsBtn.addEventListener('click', () => {
  const selectedFontSize = fontSizeSelect.value;
  codeElement.style.fontSize = selectedFontSize;
});

const select = document.querySelector('#theme-select');
const editor = ace.edit('code');

const languageSelect = document.getElementById("language-select");
languageSelect.addEventListener("change", function() {
  const selectedLanguage = this.value;
  editor.getSession().setMode("ace/mode/" + selectedLanguage);
});

select.addEventListener('change', event => {
  const theme = event.target.value;
  editor.setTheme(theme);
});




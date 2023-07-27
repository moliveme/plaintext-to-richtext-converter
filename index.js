function convertToRichText() {
    const inputTextarea = document.getElementById('inputTextarea');
    const outputDiv = document.getElementById('outputDiv');

    // Get the text from the input textarea
    const plainText = inputTextarea.value;

    // Process the plain text to add rich text formatting
    // For example, you can add <strong> tags to make text bold
    const richText = `<strong>${plainText}</strong>`;

    // Set the processed rich text as the content of the output div
    outputDiv.innerHTML = richText;
  }
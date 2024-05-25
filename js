async function uploadFile() {
  const fileInput = document.getElementById('fileInput');
  if (fileInput.files.length === 0) {
    alert('Por favor, selecciona un archivo');
    return;
  }

  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch('https://REGION-PROJECT_ID.cloudfunctions.net/transformDocument', {
    method: 'POST',
    body: formData,
  });

  const result = await response.text();
  document.getElementById('result').innerText = result;
}

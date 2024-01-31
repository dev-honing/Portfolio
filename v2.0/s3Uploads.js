// s3Uploads.js

function uploadFile() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];

  if (file) {
    const formData = new FormData();
    formData.append('file', file);

    fetch('http://localhost:3002/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      console.log(data);
      alert('파일 업로드 성공: ' + data);
    })
    .catch(error => {
      console.error('에러 발생:', error);
      alert('파일 업로드 중 에러 발생.');
    });
  } else {
    console.error('파일을 선택하세요.');
    alert('파일을 선택하세요.');
  }
}

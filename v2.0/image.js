// image.js

const express = require('express');
const multer = require('multer');
const AWS = require('aws-sdk');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3002;

// AWS SDK 설정
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

// S3 객체 생성
const s3 = new AWS.S3();

// Multer 설정 (이미지 파일만 허용하도록 설정)
const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      // 이미지 파일인 경우 허용
      cb(null, true);
    } else {
      // 이미지 파일이 아닌 경우 에러 반환
      cb(new Error('이미지 파일만 허용됩니다.'));
    }
  }
});

// 정적 파일 제공 (프로젝트 루트 내의 파일들을 서빙)
app.use(express.static(__dirname));

// 파일 업로드 엔드포인트
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    // 업로드된 파일이 없는 경우 클라이언트에 에러 응답
    return res.status(400).send('업로드된 파일이 없습니다.');
  }

  // 업로드된 파일 정보를 가져옴
  const file = req.file;

  // S3에 업로드할 때 필요한 파라미터 설정
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,   // S3 버킷 이름
    Key: 'uploads/' + file.originalname,  // S3에 저장될 파일 경로 및 이름
    Body: file.buffer,                    // 업로드할 파일의 데이터(buffer)
    ContentType: file.mimetype            // 업로드할 파일의 MIME 타입
  };

  // S3에 파일 업로드
  s3.upload(params, (err, data) => {
    if (err) {
      console.error(err);
      // 업로드 중에 오류가 발생한 경우 클라이언트에 내부 서버 오류 응답
      return res.status(500).send('내부 서버 오류가 발생했습니다.');
    }

    // 업로드 성공 시 클라이언트에 응답
    res.send('파일이 성공적으로 업로드되었습니다.');
  });
});


// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});


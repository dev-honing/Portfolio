// server.js

const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/api/upload', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync('./src/data/myGrowthLogs.json', 'utf8'));
    res.json(data);
  } catch (error) {
    console.error('데이터를 읽어오는 중 오류 발생:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`서버 ON: http://localhost:${port} 에서 실행 중`);
});

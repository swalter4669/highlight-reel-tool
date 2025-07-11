
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.post('/upload', upload.single('video'), (req, res) => {
  const inputPath = req.file.path;
  const outputName = `highlight-${Date.now()}.mp4`;
  const outputPath = path.join(__dirname, 'uploads', outputName);

  const command = `ffmpeg -y -i ${inputPath} -ss 00:00:30 -t 00:02:00 -c:v libx264 -c:a aac ${outputPath}`;

  exec(command, (err) => {
    if (err) return res.status(500).send('Error generating highlight.');
    res.json({ highlightUrl: `/uploads/${outputName}` });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [video, setVideo] = useState(null);
  const [highlight, setHighlight] = useState(null);
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const upload = async () => {
    const formData = new FormData();
    formData.append('video', video);

    try {
      const res = await axios.post(`${BASE_URL}/upload`, formData);
      setHighlight(`${BASE_URL}${res.data.highlightUrl}`);
    } catch (err) {
      console.error("Upload failed:", err.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Highlight Reel Generator</h1>
      <input type="file" onChange={e => setVideo(e.target.files[0])} />
      <button onClick={upload} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Upload</button>
      {highlight && (
        <div className="mt-4">
          <h2 className="text-lg">Generated Highlight:</h2>
          <video controls src={highlight} width="600" />
        </div>
      )}
    </div>
  );
}

export default App;

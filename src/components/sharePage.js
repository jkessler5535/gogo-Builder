// src/SharePage.js
// src/SharePage.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SharePage = () => {
  const [imageData, setImageData] = useState('');
  const [avatarConfig, setAvatarConfig] = useState('');

  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const image = queryParams.get('image');
    const config = queryParams.get('config');

    if (image) {
      setImageData(atob(decodeURIComponent(image)));
    }
    
    if (config) {
      setAvatarConfig(atob(decodeURIComponent(config)));
    }
  }, [location.search]);

  return (
    <div>
      <h1>Your Shared Avatar</h1>
      {imageData && <img src={imageData} alt="Shared Avatar" />}
      {avatarConfig && (
        <div>
          <h2>Avatar Configuration</h2>
          <pre>{avatarConfig}</pre>
        </div>
      )}
    </div>
  );
};

export default SharePage;

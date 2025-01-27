import React from 'react';

const DownloadImageButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://i.ibb.co/Rp125fQ/pass-25.jpg'; // Replace with your image URL
    link.download = 'Event Pass.jpeg'; // Set the filename for the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload}>
      Download Image
    </button>
  );
};

export default DownloadImageButton;

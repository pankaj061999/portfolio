'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  const handleDownload = () => {
    // Check if window.dataLayer exists and push to it
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'download_cv',
        event_category: 'Resume',
        event_label: 'Pankaj Kumar Meena CV Download',
        value: 1,
      });
    }

    // Open the CV in a new tab
    if (typeof window !== 'undefined') {
      window.open('/files/Pankaj-Kumar-Meena.pdf', '_blank');
    }
  };  return (
    <Button onClick={handleDownload}>
      Download CV
    </Button>
  );
};

export default DownloadCV;

import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#ffffff] text-black sticky">
      <div className="bg-slate-900 h-20">
      </div>
      <div className="container mx-auto py-6 px-6">
        <div className="flex justify-between items-center">
          <div className="footer-section">
            <a href="/terms-of-service">Terms of Service</a>
          </div>
          <div className="footer-section">
            <a href="/sitemap">Sitemap</a>
          </div>
          <div className="footer-section">
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
          <div className="footer-section">
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Help</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#ffffff] text-black items-center">
      <div className="bg-slate-900 h-20">
      </div>
      <div className="container py-6 flex justify-center">
        <div className="flex gap-x-60 ml-60 mx-auto">
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
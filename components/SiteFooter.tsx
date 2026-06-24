import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top-line" aria-hidden="true" />
      <div className="container footer-inner">
        <div className="footer-grid footer-grid-clean">
          <div className="footer-col footer-brand">
            <Link href="/" className="footer-logo-link">
              <img
                src="/logo.png"
                alt="Smart Brain Creations"
                className="footer-logo"
              />
            </Link>
            <p className="footer-tagline">
              Real skills. Real portfolio. Real confidence. Game Projects
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-list">
              <li>+91 8762841197 / +91 78929 00762</li>
              <li>
                <a href="mailto:smartbraincreations@gmail.com">
                  smartbraincreations@gmail.com
                </a>
              </li>
              <li>Bangalore, Karnataka</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Social</h4>
            <ul className="footer-list">
              <li>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/smart-brain-creation/" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@SmartbrainCreations" target="_blank" rel="noreferrer">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer-copyright">© 2026 Smart Brain Creations. All rights reserved.</p>
      </div>
    </footer>
  );
}

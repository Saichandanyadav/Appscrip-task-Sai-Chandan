import { useState } from 'react'
import { InstagramIcon, LinkedinIcon, ChevronDownIcon, ChevronUpIcon } from '../pages/_app'

export default function Footer() {
  const [openSection, setOpenSection] = useState(null)
  const toggleSection = section => setOpenSection(openSection === section ? null : section)

  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-top-row">
          <div className="footer-newsletter">
            <h3>BE THE FIRST TO KNOW</h3>
            <p>Sign up for updates from mettā muse.</p>
            <div className="subscribe-box">
              <input type="email" placeholder="Enter your e-mail..." />
              <button>SUBSCRIBE</button>
            </div>
          </div>

          <div className="footer-contact-info">
            <div className="contact-unit">
              <h3>CONTACT US</h3>
              <p>+44 221 133 5360</p>
              <p>customercare@mettamuse.com</p>
            </div>
            <div className="currency-unit">
              <h3>CURRENCY</h3>
              <div className="currency-selector">
                <span className="flag">🇺🇸</span>
                <span className="dot">•</span>
                <span className="code">USD</span>
              </div>
              <p className="currency-note">
                Transactions will be completed in Euros and a currency reference is available on hover.
              </p>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom-row">
          <div className="footer-links-column">
            <div className="column-header" onClick={() => toggleSection('metta')}>
              <h3>mettā muse</h3>
              <div className="mobile-icon">{openSection === 'metta' ? <ChevronUpIcon /> : <ChevronDownIcon />}</div>
            </div>
            <ul className={openSection === 'metta' ? 'open' : ''}>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances</li>
            </ul>
          </div>

          <div className="footer-links-column">
            <div className="column-header" onClick={() => toggleSection('quick')}>
              <h3>QUICK LINKS</h3>
              <div className="mobile-icon">{openSection === 'quick' ? <ChevronUpIcon /> : <ChevronDownIcon />}</div>
            </div>
            <ul className={openSection === 'quick' ? 'open' : ''}>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Returns</li>
              <li>Return & Refund</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div className="footer-social-section">
            <div className="social-group">
              <div className="column-header" onClick={() => toggleSection('follow')}>
                <h3>FOLLOW US</h3>
                <div className="mobile-icon">{openSection === 'follow' ? <ChevronUpIcon /> : <ChevronDownIcon />}</div>
              </div>
              <div className={`social-icons ${openSection === 'follow' ? 'open' : ''}`}>
                <div className="icon-circle"><InstagramIcon size={20} /></div>
                <div className="icon-circle"><LinkedinIcon size={20} /></div>
              </div>
            </div>

            <div className="payment-group">
              <h3>mettā muse ACCEPTS</h3>
              <div className="payment-icons">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Google_Pay_%28GPay%29_Logo_%282020%29.svg" alt="GPay" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Amex_logo_2015.png" alt="Amex" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_Pay_logo.svg" alt="Apple Pay" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Shopify_logo.svg" alt="Shop Pay" />
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

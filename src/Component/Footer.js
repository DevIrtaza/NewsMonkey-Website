import React from 'react';
import './Home.css'; // Import the updated CSS file

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
           
            <li><a href="https://newmonkeystudio.com/about" target='_blank'>About Us</a></li>
            <li><a href="http://newmonkeystudio.com/" target='_blank'>Contact Us</a></li>
            <li><a href="https://controlmonkey.io/privacy-policy/" target='_blank'> Privacy Policy</a></li>
            <li><a href="https://www.contactmonkey.com/terms-service" target='_blank'>Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-media">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p className="contact-detail">
             <a href="mailto:info@example.com"> Email: NewsMonkey @gmail.com</a>
          </p>
          <p className="contact-detail">
           <a href="tel:+1234567890"> Phone: +123 456 7890</a>
          </p>
        </div>

        <div className="footer-section">
          <h4>Subscribe</h4>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <input type="submit" value="Subscribe" />
          </div>
        </div>
      </div>
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} NewsMonkey. All rights reserved.
      </div>
    </footer>
  );
}

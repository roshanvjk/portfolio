import React from 'react';
import EnvelopeIcon from '../icons/envelope-regular.svg';
import FacebookIcon from '../icons/facebook-brands-solid.svg';
import GithubIcon from '../icons/github-brands-solid.svg';
import InstagramIcon from '../icons/instagram-brands-solid.svg';
import LinkedInIcon from '../icons/linkedin-in-brands-solid.svg';
import PhoneIcon from '../icons/phone-solid.svg';
import LinkedInIcon2 from '../icons/icons8-linkedin.svg';
import '../Css/footer.css';

function Footer() {
  return (
    <div className="footer" id="contact">
      <h2>Roshanvijay J K</h2>
      <div className="footer-links">
        <a href="https://www.instagram.com/______.roshan.______/" target="_blank" rel="noopener noreferrer">
          <img src={InstagramIcon} className="footer-icon" alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/in/roshan-vijay-449338207/" target="_blank" rel="noopener noreferrer">
          <img src={LinkedInIcon} className="footer-icon" alt="LinkedIn" />
        </a>
        <a href="https://github.com/roshanvjk/" target="_blank" rel="noopener noreferrer">
          <img src={GithubIcon} className="footer-icon" alt="GitHub" />
        </a>
        <a href="https://www.facebook.com/roshan.thegreatdonofyou" target="_blank" rel="noopener noreferrer">
          <img src={FacebookIcon} className="footer-icon" alt="Facebook" />
        </a>
        <a href="https://leetcode.com/u/roshan_27/" target="_blank" rel="noopener noreferrer">
          <img src={LinkedInIcon2} className="footer-icon" alt="LeetCode" />
        </a>
      </div>

      <div className="footer-content">
        <div className="footer-info">
          <p>Phone: <a href="tel:+919688970870"><img src={PhoneIcon} className="footer-icon-phone" alt="Phone" /> +91 96889 70870</a></p>
          <p>Email: <a href="mailto:roshanvijay69@gmail.com"><img src={EnvelopeIcon} className="footer-icon-email" alt="Email" /> roshanvijay69@gmail.com</a></p>
        </div>
        <div className="footer-rights">
          <p>&copy; 2024 Roshanvijay. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

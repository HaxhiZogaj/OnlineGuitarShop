import FooterImage from '../../Assets/Images/Footer 2.png';
import './footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <img src={FooterImage} alt="Footer" className="footer-image" />
    </div>
  );
}

export default Footer;

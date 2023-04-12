import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import logo from "../assets/images/paxLOGO.png";
import websiteLogo from "../assets/images/icons/website-icon.png";
import emailLogo from "../assets/images/icons/email-icon.png";
import facebookLogo from "../assets/images/icons/facebook.png";
import "../assets/css/Login.css";

function RightSection() {
  return (
    <div className="right-section">
      <div className="companyTitle">
        <h1>Pax Libera</h1>
        <p>Group of Companies</p>
      </div>

      <div className="companyLogo">
        <img src={logo} />
      </div>

      <div className="companySocMed">
        <div>
          <img src={websiteLogo} alt="paris logo" height={"20px"} />
          <a href="paxliberamining.com">paxliberamining.com</a>
        </div>
        <div>
          <img src={emailLogo} height={"20px"} />
          <a href="info@paxliberamining.com">info@paxliberamining.com</a>
        </div>
        <div>
          <img src={facebookLogo} height={"20px"} />
          <a href="https://www.facebook.com/paxliberamining">
            https://www.facebook.com/paxliberamining/
          </a>
        </div>
      </div>

      <div className="image1" style={{ backgroundImage: `url(${image1})` }} />
      <div className="image1" style={{ backgroundImage: `url(${image2})` }} />
      <div className="image1" style={{ backgroundImage: `url(${image3})` }} />
      <div className="image1" style={{ backgroundImage: `url(${image4})` }} />
    </div>
  );
}

export default RightSection;

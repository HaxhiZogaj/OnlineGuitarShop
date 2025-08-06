import { useState } from "react";
import { Link } from "react-router-dom";
import Artistat from "../../Assets/Images/Artistat.png";
import newImage from "../../Assets/Images/Footer 2.png";
import GitareBardhZi from "../../Assets/Images/GitareBardhZi.png";
import groupIcon from "../../Assets/Images/Group 5189.png";
import pikat from "../../Assets/Images/Pikat.png";
import unsplashImage from "../../Assets/Images/unsplash_H6j0Zsy91WY.png";
import "./Support.css";

const Support = () => {
  const [activeTab, setActiveTab] = useState("specification");

  return (

    <div className="support-page">
      <div className="support-left">
        <Link to="/BrandList" className="back-BrandList-link">
          ← Back to List
        </Link>

        <div className="vibestrings-logo">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.1497 14.7262C13.7657 22.0669 7.59189 27.9146 0 28V0C7.59189 0.0854653 13.7657 5.9331 14.1497 13.2738C14.5287 6.02987 20.5459 0.239902 28 0.00640446V27.9937C20.5459 27.7602 14.5287 21.9702 14.1497 14.7262Z"
              fill="#FF6428"
            />
          </svg>
          <span className="vibestrings-text">VibeStrings</span>
        </div>

        <div className="support-title">
          <h1 className="main-heading">Active Precision</h1>
          <h1 className="main-heading second-heading">Bass® PH V</h1>
        </div>

        <div className="tab-container">
          <div
            className={`tab ${activeTab === "specification" ? "active" : ""}`}
            onClick={() => setActiveTab("specification")}
          >
            Specification
            <div className="tab-line"></div>
          </div>
          <div
            className={`tab ${activeTab === "players" ? "active" : ""}`}
            onClick={() => setActiveTab("players")}
          >
            Who plays it?
            <div className="tab-line"></div>
          </div>
        </div>


        <div className="tab-content">
  {activeTab === "specification" && (
    <>
      <p className="spec-text">
         The Active Precision Bass® PH V guitar is a modern take on the classic Precision Bass
              design, featuring a sleek body shape and a comfortable neck profile for easy
              playability. It is equipped with dual active pickups that deliver a powerful and
              versatile tone, perfect for any genre from rock to funk. The onboard EQ allows players
              to shape their sound with precision, while the high-quality hardware ensures
              reliability on stage. With its striking finish options and attention to detail, the
              Active Precision Bass® PH V is designed for both performance and style.
      </p>
      <ul className="spec-list">
        <li><span>Body Wood:</span> Alder</li>
        <li><span>Neck Wood:</span> Maple</li>
        <li><span>Fingerboard:</span> Rosewood</li>
        <li><span>Pickups:</span> 3x Single-Coil Strat</li>
        <li><span>Tuners:</span> Vintage-Style</li>
        <li><span>Scale Length:</span> 25.5 inches</li>
        <li><span>Bridge:</span> 6-Saddle Synchronized Tremolo</li>
      </ul>
    </>
  )}
  {activeTab === "players" && (
    <div className="container">
      <img src={Artistat} alt="container" />
      <img src={pikat} alt="pikat" className="pikat-image" />
    </div>
  )}
</div>

        <div className="footer-img">
  <img src={newImage} alt="New Below Image" />
</div>
      </div>

      <div className="support-right">
        <img src={unsplashImage} alt="Support Visual" className="unsplash-image" />
        <img src={GitareBardhZi} alt="Guitar" className="guitar-overlay" />
        <img src={groupIcon} alt="Group Icon" className="group-icon" />
      </div>
    </div>

  );
};

export default Support;

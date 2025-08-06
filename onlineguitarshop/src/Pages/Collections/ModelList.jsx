import { Link } from "react-router-dom";
import filterIcon from "../../Assets/Icons/filter.png";
import searchIcon from "../../Assets/Icons/search.png";
import newImage from "../../Assets/Images/Footer 2.png";
import Gitarat from "../../Assets/Images/Gitarat.png";
import groupIcon from "../../Assets/Images/Group 5189.png";
import Ibanez from "../../Assets/Images/Ibanez.png";
import moreImage from "../../Assets/Images/more.png";
import unsplashImage from "../../Assets/Images/unsplash_H6j0Zsy91WY.png";
import "./ModelList.css";

const ModelList = () => {
  return (
    <div className="model-list-container">
      <div className="model-list-left">
        <Link to="/" className="back-home-link">← Back to Home</Link>

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

        <div className="main-title">
          <h1 className="main-heading">
            Play like a <span className="orange-text">Rock star</span>
          </h1>
          <p className="main-description">
            With a legacy dating back to the 1950s, Ibanez blends expert craftsmanship with cutting-edge innovation to deliver guitars that inspire creativity and elevate your performance. Trusted by top artists worldwide, Ibanez guitars are built to play fast, sound bold, and stand out on any stage.
          </p>
        </div>

        <div className="check-selection">
          Check out the <span className="orange-selection">Selection</span>
        </div>

        <div className="filters-container">
          <div className="input-wrapper">
            <img src={filterIcon} className="input-icon" alt="Filter Icon" />
            <select className="type-filter">
              <option value="">Filter by type</option>
              <option value="bass">Bass</option>
              <option value="acoustic">Acoustic</option>
              <option value="electric">Electric</option>
            </select>
          </div>

          <div className="input-wrapper">
            <img src={searchIcon} className="input-icon" alt="Search Icon" />
            <input
              type="text"
              className="search-bar"
              placeholder="Search by name"
            />
          </div>
        </div>

        <div className="gitarat-frame">
          <img src={Gitarat} alt="Gitarat" className="gitarat-image" />
        </div>

         <div className="results-text">
          Showing <strong>6</strong> results from <strong>400</strong>
        </div> 
        <div className="more-image">
          <img src={moreImage} alt="More" />
        </div>

        <div className="below-more-image">
  <img src={newImage} alt="New Below Image" />
</div>

      </div>
      <div className="model-list-right">
        <img src={unsplashImage} alt="Unsplash Right" className="unsplash-img" />
        <img src={Ibanez} alt="Ibanez" className="ibanez-img" />
        <img src={groupIcon} alt="Group Icon" className="group-icon" />
      </div>
    </div>
  );
};

export default ModelList;
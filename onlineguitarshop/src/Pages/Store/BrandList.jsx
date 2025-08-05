import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import GitareDeti from '../../Assets/Images/GitareDeti.jpg';
import Group5198 from '../../Assets/Images/Group 5198.png';
import Group5208 from '../../Assets/Images/Group 5208.png';
import Group5214 from '../../Assets/Images/Group 5214.png';
import Footer from '../../components/Footer/footer';
import { GET_ALL_BRANDS } from '../../graphql/queries';
import './BrandList.css';


const BrandList = () => {
  const { loading, error, data } = useQuery(GET_ALL_BRANDS);
  const navigate = useNavigate();

  if (loading) return <p>Loading brands...</p>;
  if (error) return <p>Error loading brands 😕</p>;

  const handleBrandClick = (brandName) => {
    navigate(`/models/${encodeURIComponent(brandName)}`);
  };

  const firstRowBrands = data.findAllBrands.slice(0, 4);
  const secondRowBrands = data.findAllBrands.slice(4, 8);

  return (
    <div className="brand-page">
      <header className="brand-header">
        <div className="logo-left">
          <div className="logo-and-name">
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
              Browse top quality <br />
              <span className="orange-text">Guitars</span> online
            </h1>
            <p className="main-description">
              Explore 50k+ latest collections of branded guitars online with VibeStrings.
            </p>
          </div>
        </div>

        <div className="logo-right">
          <img src={GitareDeti} alt="Guitar" className="guitar-image" />
        </div>
      </header>

      <div className="brand-list">
        <h3>
          Featuring the <span className="orange-text">Best Brands</span>
        </h3>
        <p>Select your preferred and explore our exquisite collection.</p>
        <div className="brand-image-wrapper">
    <img src={Group5198} alt="Brands" className="brand-image" />
  </div>
      </div>
      <div className="group-image-wrapper">
    <img src={Group5214} alt="Group" className="group-image" />
  </div>

<div className="Favoreite-Guitar-Brands">
  <img src={Group5208} alt="Group" className="group-image" />
</div>

<Footer /> 
    </div>
    
  );
};

export default BrandList;

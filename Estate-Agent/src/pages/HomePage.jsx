import { Link } from 'react-router-dom';


const HomePage=()=> {
  return (
    <>

    <div className="welcome-page">      
      <img src="https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg" className="home-back" />

        <div className="welcome-content">
          <h1>Discover Your Dream Home</h1>
          <p>
          Find your dream home with our expert real estate services. Personalized solutions and dedicated support for a seamless home buying experience.
          </p>
          <div className="welcome-buttons">
            <button><Link to="/properties">Start Searching</Link></button>
            <button><Link to="/favorites">View Favorites</Link></button>
            
          </div>
        </div>
      </div>

    </>



  );
}

export default HomePage;
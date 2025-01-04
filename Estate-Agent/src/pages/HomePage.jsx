import { Link } from 'react-router-dom';


const HomePage=()=> {
  return (
    <>

   
  <div className="welcome-page">      
    <img src="https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg" className="home-back" />

      <div className="welcome-content">
        <h1>Welcome to Property Finder</h1>
        <p>
          Discover your dream home! Search, view, and save your favorite properties with ease.
        </p>
        <div className="welcome-buttons">
          <button><Link to="/properties">Start Searching</Link></button>
          <button><Link to="/favorites">View Favorites</Link></button>
          
        </div>
      </div>
    </div>













    <div className='home'>  
    <h1>Welcome to Estate Agent</h1>
    <p>Find your dream home with us</p>
    </div>


    <div
      style={{
        maxWidth: '800px',
        margin: '20px auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
        color: '#333',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#007bff' }}>Search Form:</h2>
      <p>Allow users to search for properties based on:</p>
      <ul>
        <li>Type (house, flat, etc.)</li>
        <li>Price (min and max range)</li>
        <li>Bedrooms (min and max)</li>
        <li>Date added (specific date or between two dates)</li>
        <li>Postcode area (e.g., NW1, BR1)</li>
      </ul>

      <h2 style={{ marginTop: '20px', color: '#007bff' }}>Property Data Management:</h2>
      <p>
        A JSON file with at least 7 properties, each with details such as type, price, bedrooms, date
        added, and postcode.
      </p>
      <p>
        Use React UI components/widgets to enhance the form fields for an interactive user
        experience.
      </p>

      <h2 style={{ marginTop: '20px', color: '#007bff' }}>Search Results Display:</h2>
      <p>Show search results in an effective layout with:</p>
      <ul>
        <li>A picture of the property</li>
        <li>A short description</li>
        <li>Price</li>
        <li>Results must be filterable by one or more criteria.</li>
      </ul>

      <h2 style={{ marginTop: '20px', color: '#007bff' }}>Property Details Page:</h2>
      <p>Display detailed property information with:</p>
      <ul>
        <li>A large image and multiple thumbnails (6-8 pictures per property).</li>
        <li>
          Tabs to view:
          <ul>
            <li>Long description</li>
            <li>Floor plan</li>
            <li>Google Map</li>
          </ul>
        </li>
      </ul>

      <h2 style={{ marginTop: '20px', color: '#007bff' }}>Favorites Functionality:</h2>
      <p>Users can save properties to a "favorites" list by:</p>
      <ul>
        <li>Dragging the property to the favorites section</li>
        <li>Clicking a "favorite" button or icon</li>
      </ul>
      <p>Users can remove properties by:</p>
      <ul>
        <li>Dragging them out of the list</li>
        <li>Clicking a delete button</li>
      </ul>
      <p>
        Include the ability to clear the favorites list. The favorites should persist using local
        storage.
      </p>

      <h2 style={{ marginTop: '20px', color: '#007bff' }}>Responsive Design:</h2>
      <p>Ensure responsive layouts for:</p>
      <ul>
        <li>Search page</li>
        <li>Results section</li>
        <li>Property details</li>
      </ul>
      <p>Adapt layouts for large screens and smaller screens (e.g., iPad landscape or smaller).</p>

      <h2 style={{ marginTop: '20px', color: '#007bff' }}>Aesthetics:</h2>
      <p>Maintain visual clarity and consistency:</p>
      <ul>
        <li>Group related elements</li>
        <li>Use headings, subheadings, and appropriate fonts</li>
        <li>Align and size elements for balance</li>
        <li>Use cohesive color schemes and design elements.</li>
      </ul>

      <h2 style={{ marginTop: '20px', color: '#007bff' }}>Security Measures:</h2>
      <p>
        Prevent client-side hacking using methods like Content Security Policy (CSP) and HTML
        encoding within React JSX.
      </p>

      <h2 style={{ marginTop: '20px', color: '#007bff' }}>Code Standards:</h2>
      <p>Maintain proper comments, indentation, and code correctness.</p>

      <h2 style={{ marginTop: '20px', color: '#007bff' }}>Demonstration:</h2>
      <p>Successfully explain and defend your implementation during the viva.</p>

      <h2 style={{ marginTop: '20px', color: '#007bff' }}>Suggested Website Layout:</h2>
      <p>
        <strong>Homepage:</strong>
      </p>
      <ul>
        <li>
          <strong>Header:</strong> Title or logo and navigation bar with links (e.g., Home, Search
          Properties, About, Favorites).
        </li>
        <li>
          <strong>Introduction Section:</strong> Brief overview of the site's purpose.
        </li>
      </ul>
      <p>
        <strong>Search Page:</strong>
      </p>
      <ul>
        <li>
          <strong>Search Form:</strong> Fields for property type, price range, bedrooms, date added,
          and postcode.
        </li>
        <li>
          <strong>Results Section:</strong> Grid layout displaying property cards with:
          <ul>
            <li>Image</li>
            <li>Short description</li>
            <li>Price</li>
            <li>Link to property details</li>
          </ul>
        </li>
      </ul>
      <p>
        <strong>Property Details Page:</strong>
      </p>
      <ul>
        <li>
          <strong>Large Image Section:</strong> Main property image with thumbnails for additional
          images.
        </li>
        <li>
          <strong>Tabs Section:</strong>
          <ul>
            <li>Long description</li>
            <li>Floor plan</li>
            <li>Google map</li>
          </ul>
        </li>
      </ul>
      <p>
        <strong>Favorites Section:</strong>
      </p>
      <ul>
        <li>
          <strong>Favorites List:</strong> Display saved properties in a side panel or separate page.
        </li>
        <li>Include drag-and-drop and delete functionalities.</li>
      </ul>
      <p>
        <strong>Footer:</strong> Include links to additional resources, contact information, or
        social media links.
      </p>
      <p>
        <strong>Responsive Design:</strong> For smaller screens:
      </p>
      <ul>
        <li>Collapse navigation bar into a hamburger menu.</li>
        <li>Stack search form and results vertically.</li>
        <li>Optimize thumbnails and property layout for smaller dimensions.</li>
      </ul>
    </div>


    </>



  );
}

export default HomePage;
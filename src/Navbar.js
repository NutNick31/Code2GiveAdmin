import {Link} from 'react-router-dom'; 

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>BREADS</h1>
            <div className="links">
               <Link to="/">BREADS Admin Home</Link> 
               <Link to="/userinfo">User Info</Link>
               <Link to="/counsellinginfo">Counselling Info</Link> 
               <Link to="/locationinfo">Location Info</Link> 
               <Link to="/result">ML Prediction Data</Link> 
            </div>
        </nav>
    );
}
 
export default Navbar;

// Admin Home
// User Info
// Location
// Initial Questionaire -> Chatbot
// Final Questionaire -> Machine Learning
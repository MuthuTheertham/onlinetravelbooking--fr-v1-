import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import icon from './img/icon.png'
import { Link  } from 'react-router-dom';

function Navbar1() {
  return (
    <div className='container-fulid' >
      <Navbar className="bg-danger">

        <img src={icon} alt="icon.png" height={60} />
        <h1>Elisa Pitstop</h1>
        <Navbar.Collapse className="justify-content-end" >

        <Link to='/Home' style={{textDecoration:"none"}}>
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            </Link>
          <Navbar.Brand href="#About Us">About Us</Navbar.Brand>
          <Navbar.Brand href="#ShowRooms">ShowRooms</Navbar.Brand>
          <Navbar.Brand href="#Bike">Bike</Navbar.Brand>
          <Navbar.Brand href="#Offers">Offers</Navbar.Brand>

          <Navbar.Text >
            <Link to='/Login'>
              <button className='me-4 bg-danger'style={{ borderRadius: "10px" }}>Login</button>
              </Link>
           <Link to='/Signup'>
             <button className='me-3 bg-danger' style={{ borderRadius: "10px" }}>Signup</button>
             </Link>
          </Navbar.Text>
        </Navbar.Collapse>

      </Navbar>
    </div>
  );
}

export default Navbar1;
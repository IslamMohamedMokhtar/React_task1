
import { Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import shoplogo from './shopping-cart.png';
import { useDispatch, useSelector } from 'react-redux';
import { theme } from './store/themeSlice';
const Navigation = () => {
    const dispatch = useDispatch();
    const {color} = useSelector((state) => state.theme)
    const colorCheck = ["light","dark"]
    var choice = 0;
    const theme_button = (e) => {
      if(e.target.checked == 0)
        choice = 0;
      else
        choice = 1;
      dispatch(theme(colorCheck[choice]));
      console.log(colorCheck[choice]);
    }
    return(
      <>
        <Navbar expand="lg" bg={color} data-bs-theme={color} className='navbar' >
          <Container>
            <Link to={`/`} className='link' >
              <Navbar.Brand href="#"className='icon link' >
                <img src={shoplogo}  className='icon link' alt='shoplogo'></img>
                Online Shoping
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Link to={`/`} className='link' ><Nav.Link href="#home">Home</Nav.Link></Link>
                <Link to={`/CreateProduct`} className='icon link space' >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5"/>
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                </svg>
                  </Link> 
                  <Link to={`/Cart`} className='icon link space'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bag-check" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                  </svg>
                  </Link>
              </Nav>
            <Form>
                  <Form.Check 
                  type="switch"
                  id="custom-switch"
                  variant={color}
                  onClick={(e)=>theme_button(e)}
                  />
            </Form>
            </Navbar.Collapse>
          </Container>
          
        </Navbar>
      <br></br>
      </>
    );
}
export default Navigation;
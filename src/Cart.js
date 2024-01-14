import { useDispatch, useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { clearCart } from "./store/cartSlice";
const Cart = () => {
  
  const {color} = useSelector((state) => state.theme);
  const checkempty = () => {
    return(cartItems.length===0);
  }
  const dispatch = useDispatch();
    const { cartItems, cartTotalQuantity, cartTotalAmount } = useSelector((state) => state.cart);
    return(  <>
    { !checkempty() &&
    <Container>
    <Row className="justify-content-md-center card_text">
    <Col xs="4">
    </Col>
    <Col xs="2">
      <h4>
        title
      </h4>
    </Col>
    <Col xs="2">
    <h4>
      quantity
    </h4>
    </Col>
    <Col xs="2">
    <h4>
      price
    </h4>
    </Col>
    <Col xs="2">
    </Col>
    </Row>
    <hr></hr>
        {cartItems.map(({id, title, picsrc, price, cartQuantity})=>{return(
          <>
          
          <Row className="justify-content-md-center card_text">
            <Col xs="4">
            <Link to={`/Details/${id}`}  className='link'>
                <img variant="top" src={picsrc} alt={title} />
              </Link>
            </Col>
            <Col xs="2">
              <h6>
                {title}
              </h6>
              </Col>
            <Col xs="2">
              {cartQuantity}
            </Col>
            <Col xs="2">
                ${price}
              </Col>
            <Col xs="2"></Col>
          </Row>
      <hr></hr>
        </>
        )}
        )}
        <Row>
          <Col>
            <Link variant="dark" className="link" onClick={() => {dispatch(clearCart());}}>Clear Cart</Link>
          </Col>
          <Col xs="4">
            <h5>
              <Row>
                <Col >Total quantity:</Col><Col>{cartTotalQuantity}</Col>
              </Row>
              <Row>
              <Col>Total price:</Col><Col>${cartTotalAmount}</Col>
              </Row>
            </h5>
            <Button variant={color} onClick={()=>{alert("success")}}>purchase</Button>
          </Col>
        </Row>
        
        
        </Container>}
        <Container className="body">{ checkempty() && <h3> You have no product in your cart...</h3>}</Container>
      </>
        );
};
export default Cart;
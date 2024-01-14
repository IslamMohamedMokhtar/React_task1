import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { addToCart } from './store/cartSlice';
import { fetchproducts } from './store/productSlice';
import { useEffect } from 'react';
const Home = () =>{

  const dispatch = useDispatch();
  const {loading, error} = useSelector((state) => state.products);
  const {color} = useSelector((state) => state.theme);
    const addcart = (product) =>{
            dispatch(addToCart(product));
    }
    useEffect(()=>{ dispatch(fetchproducts())},[dispatch]);
    const Product = useSelector((state) => state.products.data);
    const isError = () =>{
      return(error !=="");
    }
    return(
        <>
        {loading && <h2>Fetching data... </h2>}
        {!loading && isError() && <h2>Error: {error}</h2>}
        {!loading && !isError() && <>
        {Product.map(({id, title, picsrc, discription, price})=>{return(
          <>
          <Container className='body'>
            <Card style={{ width: '18rem',borderRadius: '4%' }} className='card'>
              <Card.Title>{title}</Card.Title>
              <Link to={`/Details/${id}`}  className='link' >
                <Card.Img variant="top" src={picsrc} alt={title} />
              </Link>
              <Card.Body>
              <Card.Text className='card_text'>
                <div>
                {discription}
                </div>
                <h5>
                ${price}
                </h5>
              </Card.Text>
                      <Button variant={color} onClick={()=>{addcart({id, title, picsrc, price})}} className="button" >Add to cart</Button>
            </Card.Body>
        </Card>
      </Container>
      <br></br>
        </>
        )})}
        </> }
        
    </>);
}
export default Home;
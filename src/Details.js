import { useEffect} from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Container, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { deleteproducts, fetchproduct } from "./store/productSlice";
const Details = () =>{
  const {id} = useParams();
  const {loading, error, ProductDetail:data} = useSelector((state) => state.products);
  const {color} = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const isError = () =>{
    return(error !=="");
  }
  const deleteproduct =() =>{
    dispatch(deleteproducts(id)); 
  };
  useEffect(()=>{
    const fetch = () =>{
    dispatch(fetchproduct(id));
  };
  fetch();
  },[]);

    
  return(<>
    {loading && <>loading product....</>}
    {!loading && isError() && <h2>Error: {error}</h2>}
    {!loading && !isError() && data &&<>
        <Container>
    <Card style={{ width: '18rem' }}>
        <Card.Title>{data.title}</Card.Title>
      <Card.Img variant="top" src={data.picsrc} alt={data.title} />
      <Card.Body>
        <Card.Text className='card_text'>
          <div>
            {data.discription}
          </div>
            <h5>
              ${data.price}
            </h5>
        </Card.Text>
        <Row>
            <Col>
            {!loading && <Button variant={color} onClick={()=>{deleteproduct(data.id)}} className="button">Delete</Button> }
            {loading && <Button variant={color} disabled className="button">Loading....</Button> }
                
            </Col>
        </Row>
      </Card.Body>
    </Card>
    </Container>
    </>}
    </>);
}
export default Details;
import { Button, Col, Form, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postproducts } from "./store/productSlice";
const CreateProduct = () =>{
    const [validated, setValidated] = useState(false);
    const [title, settitle] = useState('');
    const [discription, setdiscription] = useState('');
    const [price, setprice] = useState(null);
    const [picsrc, setpicsrc] = useState('');
    const {color} = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      event.preventDefault();
      if (form.checkValidity() === false) {
        event.stopPropagation();
      }
      else
      {
        const product = { title, discription, price, picsrc };
        const x = dispatch(postproducts(product));
      }
      setValidated(true);
    };
  

    return (
      <Form noValidate validated={validated} onSubmit={e=>{handleSubmit(e)}}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>title</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="title"
            defaultValue="Mark"
            value={title}
            onChange={(e) => { settitle(e.target.value) }}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>discription</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="discription"
            defaultValue="discription"
            value={discription}
            onChange={(e) => { setdiscription(e.target.value) }}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>price</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="price"
            value={price} 
            onChange={(e) => { setprice(parseInt(e.target.value)) }}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>image</Form.Label>
          <Form.Control
            required
            type="url"
            placeholder="image"
            defaultValue="image"
            value={picsrc}
            onChange={(e) => { setpicsrc(e.target.value) }}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      
      <Form.Group className="mb-3">
        <Form.Check 
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button  variant={color} type="submit" >Submit form</Button>
    </Form>
    );
}
export default CreateProduct;
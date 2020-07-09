import React, { useState, useContext } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import Context from "../stateProvider";
import {booksRef} from "../firebase";

const BookForm = () => {
    const [book, setBook] = useState({
        title: '',
        author: ''
    })
    const [state, dispatch] = useContext(Context);
    const addBook=(e)=>{
        e.preventDefault();
        const id =booksRef.doc()
        booksRef.doc(id).set(book).then(function() {
            console.log("Document successfully written!");
        });
    };
    const titleOnChange = (e)=>
        setBook({...book,title:e.target.value});
    
        const authorOnChange = (e)=>
        setBook({...book,author:e.target.value});
    return (
        <div className="m-3">
            <Form onSubmit={addBook}>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Book Name</Form.Label>
                            <Form.Control type="text" placeholder="Book Name" value={book.title} onChange={titleOnChange}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Author</Form.Label>
                            <Form.Control type="text" placeholder="Auth" value={book.author}  onChange={authorOnChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="dark" type="submit">
                    Add book
  </Button>
            </Form>
        </div>
    );
}


export default BookForm;
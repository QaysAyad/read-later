import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarHeader from './components/navbar';
import BookForm from './components/bookform';
import {BooksList} from './components/booksList';

import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <NavbarHeader />
      <Container >
        <BookForm />
        <hr />
        <h4>Your read later books</h4>
        <BooksList/>
      </Container>
    </>
  );
}

export default App;

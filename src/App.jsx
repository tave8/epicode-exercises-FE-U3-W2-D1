import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
import BookList from "./components/BookList"
import booksList from "./data/books-scifi.json"

import { Container, Col, Form, Row, Button, Spinner, Alert } from "react-bootstrap"


function App() {
  return (
    <>
      <header>
        <MyNav fixedTop />
      </header>
      <main>
        <Welcome marginTop="80px" />
        <Container>
          <Row>
            <Col xs={6}>
              <BookList books={booksList} marginTop="20px" />
            </Col>
            <Col xs={6}></Col>
          </Row>
        </Container>
      </main>
      <MyFooter />
    </>
  )
}

export default App

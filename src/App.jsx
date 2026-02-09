import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import { Component } from "react"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
import BookList from "./components/BookList"
import CommentArea from "./components/CommentArea"
// import AIBookSummary from "./components/AIBookSummary"

import booksList from "./data/books-scifi.json"

import { Container, Col, Form, Row, Button, Spinner, Alert } from "react-bootstrap"

class App extends Component {
  state = {
    selectedBook: null,
    bookIsSelected: false
  }

  updateSelectedBook = (newBook) => {
    this.setState({
      selectedBook: newBook,
      bookIsSelected: true
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const prevSelectedBook = prevState.selectedBook
    const currSelectedBook = this.state.selectedBook
    let selectedBookWasChanged = false

    // before null, after book
    if (prevSelectedBook === null) {
      selectedBookWasChanged = currSelectedBook !== null
    }
    // before book, after another book
    else {
      selectedBookWasChanged = prevSelectedBook.asin !== currSelectedBook.asin
    }

    if (selectedBookWasChanged) {
      // this.updateSelectedBook()
      // console.log("selected book was changed")
    }
  }

  render() {
    return (
      <>
        <header>
          <MyNav fixedTop />
        </header>
        <main>
          <Welcome marginTop="80px" />
          <Container>
            <Row>
              {/* books list */}
              <Col xs={6}>
                <BookList books={booksList} marginTop="20px" selectedBook={this.state.selectedBook} updateSelectedBook={this.updateSelectedBook} bookIsSelected={this.state.bookIsSelected} />
              </Col>
              {/* comment area */}
              <Col xs={6}>
                {/* AI summary */}
                {/* {this.state.selected && <AIBookSummary book={book} />} */}

                {/* comment area: rate, review, reviews list etc. */}
                <CommentArea bookIsSelected={this.state.bookIsSelected} selectedBook={this.state.selectedBook} />
              </Col>
            </Row>
          </Container>
        </main>
        <MyFooter />
      </>
    )
  }
}

export default App

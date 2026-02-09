import { Component } from "react"
import { Card } from "react-bootstrap"



class SingleBook extends Component {
  state = {
    selected: false,
  }

  // funzione freccia: eredita il this dell'istanza della classa
  // funzione normale: ha un proprio this
  // event handler: meglio usare funzioni freccia per evitare di dover usare il .bind
  toggleSelected = () => {
    this.setState({
      selected: !this.state.selected,
    })
  }

  render() {
    const { book } = this.props
    return (
      <Card style={{ width: "18rem", height: "500px" }} className={this.state.selected ? "selected-card" : ""} key={book.asin}>
        <Card.Img variant="top" src={book.img} onClick={() => {this.props.updateSelectedBook(book)}} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook

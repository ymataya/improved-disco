import React from "react";
import "./style.css";
import API from '../../utils/API';
import BookResult from '../../components/BookResult';

class Saved extends React.Component {
    state={
        books: []

    }
    componentDidMount() {
        API.getSavedBooks().then(success => {
            this.setState({books: success.data})
        })
    }
    render() {
        return (
            <div className="container">
                <h4 className="saved-title">Saved Books</h4>
               
                {this.state.books.length ? (
                    <>
                        {this.state.books.map(book => (
                            <BookResult
                            author={book.author}
                            title={book.title}
                            description={book.description}
                            info={book.link}
                            image={book.image}
                            id={book.googleId}
                            />
                        ))}
                    </>
                ) : ( <h2>No results to display</h2>) }
                </div>
        );
    }
}

export default Saved;




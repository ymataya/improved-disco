import React from "react";
import "./style.css";
import Result from '../../components/BookResult';
import API from '../../utils/API';


class Search extends React.Component {

    state = {
        books: [],
        title: ""
    }

    componentDidMount() {
        console.log("component mounted")
    }

    handleInputChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleSubmit = () => {
        API.googleSearch(this.state.title)
            .then(googleResponse => {
                this.setState({books: googleResponse.data.items})
            })
        // let url = `/${this.state.title}`
        // axios.post(url).then(data => {
        //     console.log(data)
        //     this.setState({ books: data.data.items })
        //     console.log(this.state.books)
        //     console.log(this.state.books[0].volumeInfo.authors)
        //     console.log(this.state.books[0].volumeInfo.title)
        //     console.log(this.state.books[0].volumeInfo.description)
        //     console.log(this.state.books[0].volumeInfo.infoLink)
        //     console.log(this.state.books[0].volumeInfo.imageLinks.thumbnail)
        // })
    }

    handleSave = (book) => {
        const author=book.volumeInfo.authors.join(', ')
        const title=book.volumeInfo.title
        const description=book.volumeInfo.description
        const info=book.volumeInfo.infoLink
        const image=book.volumeInfo.imageLinks.thumbnail
        const id=book.id

        API.saveBook({
            author, title, description, info, image, googleId: id
        }).then(success => {
            console.log(success);
            const newBooks = this.state.books.filter(book => book.id !== success.data.googleId);
            this.setState({
                books: newBooks
            });

        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className="container search">
                <div className="row">
                    <div className="col-md-12">
                        <div className="input-group mb-3">
                            <input type="text" name="title" className="form-control" placeholder="Search for Books..." value={this.state.title} onChange={this.handleInputChange} />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.handleSubmit}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {this.state.books.map(book => (
                        <Result
                            author={book.volumeInfo.authors.join(', ')}
                            title={book.volumeInfo.title}
                            description={book.volumeInfo.description}
                            info={book.volumeInfo.infoLink}
                            image={book.volumeInfo.imageLinks.thumbnail}
                            id={book.id}
                            handleSave={() => this.handleSave(book)}
                        />
                    ))}
                </div>


            </div>
        );
    }
}

export default Search;




import React, {Component} from "react";
import Spinner from '../components/spinner';
import ErrorIndicator from '../components/error-indicator/error-indicator';
import { BookList } from "../components/book-list/book-list";

export default class BookListContainer extends Component {

    componentDidMount() {
      // 1. receive data
      this.props.fetchBooks();
    }
  
    render() {
      const { books, loading, error } = this.props;
  
      if (loading) {
        return <Spinner />
      }
  
      if (error) {
        return <ErrorIndicator />
      }
  
      return <BookList books={books} />;
    }
}
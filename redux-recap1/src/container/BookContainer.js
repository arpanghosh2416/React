import { connect } from "react-redux";
import Book from "../component/Book";
import { addBookToCart } from "../service/action/action";

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  addBookToCartHandler: book => dispatch(addBookToCart(book))
})

export default connect(mapStateToProps, mapDispatchToProps)(Book);

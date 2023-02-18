import { connect } from "react-redux";
import Product from "../component/Product";
import { addProductToCart } from "../service/action/action";

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  addProductToCartHandler: product => dispatch(addProductToCart(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);

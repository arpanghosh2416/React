import { connect } from "react-redux";
import Cart from "../component/Cart";

const mapStateToProps = state => ({
  getCart: state.cartItems
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

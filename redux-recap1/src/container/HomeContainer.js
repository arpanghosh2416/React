import { connect } from "react-redux";
import Home from "../component/Home";

const mapStateToProps = state => ({
  getCart: state.cartItems
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);

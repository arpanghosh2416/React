import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../service/action/action';
import Home from '../component/Home';

const mapStateToProps = state => ({
  getCardData: state
})

const mapDispatchToProps = dispatch => ({
  addToCartHandler: data => dispatch(addToCart(data)),
  removeFromCartHandler: () => dispatch(removeFromCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);

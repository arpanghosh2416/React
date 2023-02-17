import { connect } from 'react-redux';
import Cart from '../component/Cart';

const mapStateToProps = state => ({
  getCardData: state
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

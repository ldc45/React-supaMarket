import { connect } from "react-redux";
import Home from "../pages/Home";
import { addtoCart,updateCart } from "../lib/action";

const HomeContainer = connect(
const mapStateToProps = state => {
  return {products: state.products}
}
const mapDispatchToProps = dispatch => {
  return {
    onAddToCart: (item,quantity) => dispatch(addtoCart(item,quantity)),
    onUpdateCart: (item,quantity) => dispatch(up^dateddtoCart(item,quantity)),
  }
}
  )(Home)
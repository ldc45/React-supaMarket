import { connect } from "react-redux";
import Home from "../pages/Home";
import { addtoCart,updateCart } from "../lib/action";

export const HomeContainer = connect(
function mapStateToProps(state) {
  return {products: state.products}
},
function mapDispatchToProps(dispatch) {
  return {
    onAddToCart: (product,quantity) => dispatch(addtoCart(product,quantity)),
    onUpdateCart: (product,quantity) => dispatch(updateCart(product,quantity)),
  }
}
  )(Home)
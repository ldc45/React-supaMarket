import { connect } from "react-redux";
import Home from "../pages/Home";
import {saveCart } from "../lib/action";

export const HomeContainer = connect(
function mapStateToProps(state) {
  return {products: state.products}
},
function mapDispatchToProps(dispatch) {
  return {
  saveLocalStorage :products => dispatch(saveCart(products))
  }
}
  )(Home, Car)
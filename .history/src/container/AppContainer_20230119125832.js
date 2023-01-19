import { connect } from "react-redux";
import {saveCart } from "../lib/action";
import App from "../App";

export const HomeContainer = connect(
function mapStateToProps(state) {
  return {products: state.products}
},
function mapDispatchToProps(dispatch) {
  return {
  saveLocalStorage :products => dispatch(saveCart(products))
  }
}
  )(App)
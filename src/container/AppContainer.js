import { connect } from "react-redux";
import {saveCart } from "../lib/action";
import App from "../App";

export const AppContainer = connect(
function mapStateToProps(state) {
  return {products: state.products}
},
function mapDispatchToProps(dispatch) {
  return {
  saveLocalStorage :products => dispatch(saveCart(products))
  }
}
  )(App)
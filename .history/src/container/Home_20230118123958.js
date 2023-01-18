import { connect } from "react-redux";
import Home from "../pages/Home";
import { addtoCart,updateCart } from "../lib/action";

const HomeContainer = connect(
const mapStateToProps = state => {
  return {items: state.items}
}
const mapDispatchToProps = state => {
  return {items: state.items}
}
  )
import React from "react";
import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountContainer,
} from "./cart-icon.styles";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
const CartIcon = ({ dispatch, itemCount }) => (
  <CartIconContainer onClick={() => dispatch(toggleCartHidden())}>
    <ShoppingIconContainer />
    <ItemCountContainer> {itemCount} </ItemCountContainer>
  </CartIconContainer>
);
// const mapDispatchToProps = (dispatch) => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden()),
// });

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});
export default connect(mapStateToProps)(CartIcon);

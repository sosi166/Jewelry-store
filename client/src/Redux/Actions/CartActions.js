import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../Constant/CartConstant";

export const addToCart = (id, qty) => async (dispatch, getState) => {

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            nameHy: data.nameHy,
            image: data.photo,
            price: data.price,
            quantity: data.quantity,
            qty,
        }
    });

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    });

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
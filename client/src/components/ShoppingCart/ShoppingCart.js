import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { addToCart, removeFromCart } from '../../Redux/Actions/CartActions';
import './ShoppingCart.scss';

const ShoppingCart = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [t, i18n] = useTranslation('lng');

    const qty = location.search ? Number(location.search.split("=")[1]) : 1;
    const cart = useSelector((state) => state.cart);
    const { id } = useParams();
    const { cartItems } = cart;

    const total = cartItems.reduce((counter, item) => counter + item.price * item.qty, 0)

    const checkout = () => {
        navigate(`/login?redirect=shipping`)
    }

    const removeFromCartHandle = (id) => {
        dispatch(removeFromCart(id));
    }

    useEffect(() => {
        if (id) {
            dispatch(addToCart(id, qty))
        }
    }, [dispatch, id, qty]);

    return (
        <div className="shopping-cart">
            <h2>{t('cart')} - {cartItems.length}</h2>
            {
                cartItems.length === 0 ?
                    (
                        <p>{t('empty')}</p>
                    )
                    : (
                        <div className="cart-order">
                            <div className="cart">
                                {
                                    cartItems.map((product) => (
                                        <div key={product.product} className="cart-product">
                                            <div className="items">
                                                <img src={product.image} alt="cart product" />
                                                <p>{product.qty}</p>
                                                <select
                                                    value={product.qty}
                                                    onChange={(e) =>
                                                        dispatch(addToCart(product.product, Number(e.target.value)))} >
                                                    {
                                                        [...Array(product.quantity).keys()].map((x) => (
                                                            <option key={x + 1} value={x + 1}>
                                                                {x + 1}
                                                            </option>
                                                        ))
                                                    }
                                                </select>
                                                <p>{product.price * product.qty}</p>
                                                <p>
                                                    {i18n.language === "hy" ? product.nameHy : product.name}
                                                </p>
                                            </div>
                                            <div className="btns">
                                                <button className="btn-lng" onClick={() => removeFromCartHandle(product.product)}>{t('delete')}</button>

                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div>total - {total}</div>
                            {
                                total > 0 && (
                                    <button onClick={checkout}>Gnel</button>
                                )
                            }
                        </div>
                    )
            }
        </div>
    )
}
export default ShoppingCart;
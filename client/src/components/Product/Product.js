import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { addToCart } from '../../Redux/Actions/CartActions';
import { FaShoppingCart } from 'react-icons/fa';
import './Product.scss';

const Product = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [t, i18n] = useTranslation('lng');
    const [qty, setQty] = useState(1)

    const AddToCart = () => {
        if (props.id) {
            dispatch(addToCart(props.id, qty))
        }
    }

    return (
        <div className="product">
            <div className="product-card" onClick={() => navigate(`/product/about/${props.id}`)}>
                <img src={props.img} alt="product image" loading="lazy" />
                <h3>{i18n.language === "hy" ? props.nameHy : props.name}</h3>
                <p>{props.price + " " + t("amd")}</p>
                <p>{i18n.language === "hy" ? props.textHy : props.text}</p>
            </div>
            <div>
                <h5>Quantyty</h5>
                <select
                    value={qty}
                    onChange={(e) => setQty(e.target.value)} >
                    {
                        [...Array(props.product.quantity).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                                {x + 1}
                            </option>
                        ))}
                </select>
            </div>
            <button onClick={AddToCart}><FaShoppingCart />+</button>

        </div>
    )
}
export default Product;
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import './Nav.scss';

const Nav = () => {

    const [t, i18n] = useTranslation('lng');
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    return (
        <div className="nav">
            <a href='/shop' onClick={() => setClick(false)}>
                <h1>Jewelry</h1>
            </a>
            <ul className={click ? "navMenu active" : "navMenu"}>
                <li>
                    <a href='/shop' onClick={() => setClick(false)}>{t('shop')}</a>
                </li>
                <li>
                    <a href='/products' onClick={() => setClick(false)}>{t('products')}</a>
                </li>
                <li>
                    <a href='/shopAbout' onClick={() => setClick(false)}>{t('about')}</a>
                </li>
                <li>
                    <a href='/delivery' onClick={() => setClick(false)}>{t('delivery')}</a>
                </li>
                <li>
                    <a href='/contact' onClick={() => setClick(false)}>{t('contact')}</a>
                </li>
            </ul>

            <div className="lng">
                <button className="btn-lng" onClick={() => i18n.changeLanguage('hy')}>ՀԱՅ</button>
                <button className="btn-lng" onClick={() => i18n.changeLanguage('en')}>EN</button>
                <a href='/cart'><FaShoppingCart />{cartItems.length}</a>
            </div>

            <div className='hamburger' onClick={handleClick}>
                {
                    click ? (<FaTimes />) : (<FaBars />)
                }
            </div>
        </div>
    )
}

export default Nav;
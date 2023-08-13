import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import './Header.scss';

function Header() {

    const { t } = useTranslation('lng');
    const [current, setCurrent] = useState(1)

    const HeaderImages = [
        { photo: "/images/HeaderImages/1.jpg", text: t('header1') },
        { photo: "/images/HeaderImages/2.jpg", text: t('header2') },
        { photo: "/images/HeaderImages/3.jpg", text: t('header3') }
    ]

    useEffect(() => {

        const timer = setTimeout(() => {
            if (current === 2) {
                setCurrent(0)
            } else {
                setCurrent(current + 1)
            }
        }, 2000)
        return () => clearTimeout(timer)

    }, [current])

    return (
        <div className="header" >
            <img src={HeaderImages[current].photo} alt="header photo" />
            <div>
                <h1>{HeaderImages[current].text}</h1>
                <a href='/products' className="btn">{t('products')}</a>
                <a href='/contact' className="btn-light">{t('contact')}</a>
            </div>
        </div> 
    );
}

export default Header;
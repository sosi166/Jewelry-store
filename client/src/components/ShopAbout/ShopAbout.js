import { useTranslation } from "react-i18next";
import './ShopAbout.scss';

const ShopAbout = () => {

    const { t } = useTranslation('lng');

    return (
        <>
            <div className="shop-about">
                <h2>{t('about')}</h2>
                <p>{t('aboutText')}</p>
            </div>
        </>
    )
}

export default ShopAbout;
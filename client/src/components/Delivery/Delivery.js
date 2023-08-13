import { useTranslation } from "react-i18next";
import './Delivery.scss';

const Delivery = () => {

    const { t } = useTranslation('lng');

    return (
        <div className="delivery">
            <h2>{t('delivery')}</h2>
            <p>{t('aboutText')}</p>
        </div>
    )
}

export default Delivery;
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";
import Loading from '../ErrorLoading/Loading';
import Error from '../ErrorLoading/Error';
import Slider from "../ProductSlider/ProductSlider";
import Header from '../Header/Header';
import './Shop.scss';

const Shop = () => {

    const dispatch = useDispatch();
    const { t } = useTranslation('lng');

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProduct());
    }, [dispatch]);

    return (
        <div className="shop" >
            <Header />
            {
                loading ? (
                    <Loading />
                )
                    : error ? (
                        <Error />
                    )
                        :
                        (
                            <>
                                <h2>{t('new')}</h2>
                                <Slider
                                    productData={products.filter((product) => product.material == "Gold")} />
                                <h2>{t('best')}</h2>
                                <Slider
                                    productData={products.filter((product) => product.material == "Silver")} />
                            </>
                        )
            }
        </div>
    );
}

export default Shop;
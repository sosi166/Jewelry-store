import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";
import Product from "../Product/Product";
import Pagination from "./pagination";
import Loading from '../ErrorLoading/Loading';
import Error from '../ErrorLoading/Error';
import './Products.scss';


const Products = () => {

    const dispatch = useDispatch();
    const [t, i18n] = useTranslation('lng');

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProduct());
    }, [dispatch]);

    const materials = [
        t('gold'),
        t('silver'),
        t('stone'),
    ];

    const min = 0;
    const max = 45000;
    const [priceFilter, setPriceFilter] = useState(min);

    const [inputText, setInputText] = useState('');
    const [materialFilters, setmaterialFilters] = useState(new Set());

    const inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    function updateFilters(checked, materialFilters) {
        if (checked)
            setmaterialFilters((prev) => new Set(prev).add(materialFilters));
        if (!checked)
            setmaterialFilters((prev) => {
                const next = new Set(prev);
                next.delete(materialFilters);
                return next;
            });
    }

    const filteredData = products.filter((el) => {

        if (i18n.language === "hy") {
            return ((materialFilters.size !== 0) ? materialFilters.has(el.materialHy)
                : el) && ((priceFilter > 0) ? el.price < priceFilter
                    : el) && ((inputText !== '') ? el.nameHy.toLowerCase().includes(inputText)
                        : el)
        } else {
            return ((materialFilters.size !== 0) ? materialFilters.has(el.material)
                : el) && ((priceFilter > 0) ? el.price < priceFilter
                    : el) && ((inputText !== '') ? el.name.toLowerCase().includes(inputText)
                        : el)
        }
    })

    return (
        <div className="all-products">
            <h2>{t('products')}</h2>
            <p > {filteredData.length}</p>
            <div className="filter-card">
                <form className="search-container">
                    <input type="text" placeholder="Search.." name="search" onChange={inputHandler} />
                </form>
                <form className="range-container">
                    <input type="range" min={min} max={max} step="2000"
                        onChange={(e) => setPriceFilter(e.target.value)} className="range" />
                    <div>
                        <p>{min}</p>
                        <p>{priceFilter}</p>
                        <p>{max}</p>
                    </div>
                </form>
                <div className="checkbox-container" >
                    {
                        materials.map((elm, index) => {
                        return (
                            <label className="container" key={index}>
                                <p>{elm}</p>
                                <input
                                    type="checkbox"
                                    onChange={(e) => updateFilters(e.target.checked, elm)}
                                />
                            </label>
                        );
                        })
                    }
                </div>
            </div>
            <div className="products">
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
                                    {
                                        filteredData.map(product => (
                                            <div key={product._id}>
                                                <Product
                                                    product={product}
                                                    img={product.photo}
                                                    price={product.price}
                                                    name={product.name}
                                                    nameHy={product.nameHy}
                                                    text={product.text}
                                                    textHy={product.textHy}
                                                    id={product._id}
                                                    key={product._id}
                                                    kod={product.kod} />
                                            </div>
                                        ))
                                    }
                                </>
                            )
                }
            </div>
            <Pagination />
        </div>
    )
}
export default Products;
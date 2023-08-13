import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../../Redux/Actions/ProductActions";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";
import Loading from '../ErrorLoading/Loading';
import Error from '../ErrorLoading/Error';

const ProductAbout = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(listProductDetails(id));
    }, [dispatch, id]);

    return (
        <div>
            {
                loading ? (
                    <Loading />
                )
                    : error ? (
                        <Error />
                    )
                        : (
                            <>
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
                                    kod={product.kod}
                                />
                                <p>{product.quantity}</p> </>
                        )
            }
        </div>
    )
}
export default ProductAbout;
import Carousel from 'react-multi-carousel';
import Product from "../Product/Product";
import 'react-multi-carousel/lib/styles.css';

const Slider = (props) => {

    const responsive = {

        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
            slidesToSlide: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 600 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1
        }
    };

    return (
        <div>
             <Carousel responsive={responsive} >
                {
                    props.productData.map(product => (
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
                            kod={product.kod} /> )
                    )
                }
            </Carousel>;
        </div>
    )
}
export default Slider;
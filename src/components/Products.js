import { render } from '@testing-library/react';
import React from 'react';


class Products extends React.Component {
    render() {
        
        return (
            <div>
                <ul className="products">
                    {this.props.products.map(products =>
                        <li key={products._id}>
                            <div className="product">
                                <a href={"#" + products._id}>
                                    <img src={products.image} alt={products.title} />
                                    <span>{products.title}</span><br />
                                   
                                </a>

                                <div className="product-price">
                                    <h3>Rs. {products.price}</h3>

                                    <button onClick={() => this.props.addToCart(products)} className="button primary">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </li>

                    )}

                </ul>
            </div>
        );
    }
}
export default Products;
import React from 'react';

class Cart extends React.Component{
    render(){
        const {cartItems} = this.props;
        return(
           <div>
               {cartItems.length === 0 ? (<div className="cart cart-header">Empty Cart</div>)
               :
               (<div className="cart cart-header">You have {cartItems.length} in the cart</div>)
               }
           </div> 
        )
    }
}

export default Cart;
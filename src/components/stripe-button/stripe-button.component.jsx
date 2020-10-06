import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HZDgAC1lKFZMN7crQrrnbLVOql7jt7d32EgL62cVvTkz2gFooW99DGbzdr7uGxh3LTL3VPYQDEWWtqDmv7my8JH006UbMbkvF';

    const onToken = (token) => {
        console.log(token);
        alert('payment successful');
    }

    return ( 
        <StripeCheckout
            currency="EUR" 
            label="Pay Now"
            name="VBG Clothing"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}€`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
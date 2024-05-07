import React from 'react';
import "./PaymentComplete.css"

function PaymentComponent() {
    
    return (
        <div className='PaymentComponent section'>
            <div className='Stripe-button'>
                {/* <stripe-buy-button
                    buy-button-id="buy_btn_1PC7Ba08xYl0mIJxwAK4pt3l"
                    publishable-key="pk_live_51PC6XD08xYl0mIJxIQ5biipJpv9j4Ll8m9fjTMRWnTEt7WfkykEYcdxUK0D0gPjW74HbWV4cmDkSESQIBgs7FEPe00p2rsXToh">
                </stripe-buy-button> */}

                <stripe-buy-button
                buy-button-id="buy_btn_1PCBJi08xYl0mIJxBYdFVcmV"
                publishable-key="pk_test_51PC6XD08xYl0mIJxuukdK9lZSqMIB6xhSBziTbWyDu4YFVepP0o5X4ci5sOLylerTtKhgYMez9sc4zC5Aqjwfd9t00qHmHD3ih"
                >
                </stripe-buy-button>

            </div>
        </div>
    );
}

export default PaymentComponent;
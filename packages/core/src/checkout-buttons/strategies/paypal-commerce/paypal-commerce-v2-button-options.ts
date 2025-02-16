import { PaypalButtonStyleOptions } from '../../../payment/strategies/paypal-commerce';

export interface PaypalCommerceV2ButtonInitializeOptions {
    /**
     * A set of styling options for the checkout button.
     */
    style?: PaypalButtonStyleOptions;

    /**
     * Flag which helps to detect that the strategy initializes on Checkout page
     */
    initializesOnCheckoutPage?: boolean;
}

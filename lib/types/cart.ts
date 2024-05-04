import {Product} from './product';

export interface Totals {
    total: number;
    subtotal: number;
    discount: number;
}

export interface CartProduct extends Product {
    quantity: number;
}

export interface Cart {
    products: CartProduct[];
    totals: Totals;
}

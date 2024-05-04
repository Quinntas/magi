'use client';

import {useLocalStorage} from '@/components/hooks/use-local-storage';
import {Cart, CartProduct, Totals} from '@/lib/types/cart';
import {Product} from '@/lib/types/product';

const defaultCartState = {
    products: [],
    totals: {
        subtotal: 0,
        total: 0,
        discount: 0,
    },
};

export function useCart() {
    const {item, updateItem} = useLocalStorage<Cart>({
        key: 'cart',
        default: defaultCartState,
    });

    function getCartSize(): number {
        let quantity = 0;
        for (let i = 0; i < item.products.length; i++) {
            quantity += item.products[i].quantity;
        }
        return quantity;
    }

    function calculateTotals(products: CartProduct[]): Totals {
        let discount = 0;
        let subtotal = 0;

        for (let i = 0; i < products.length; i++) {
            subtotal += products[i].price * products[i].quantity;
            discount += products[i].discount * products[i].quantity;
        }

        const total = subtotal - discount;

        return {
            discount,
            total,
            subtotal,
        };
    }

    function subProduct(productPid: string) {
        let index = -1;

        for (let i = 0; i < item.products.length; i++) {
            if (item.products[i].pid !== productPid) continue;
            index = i;
            break;
        }

        let products = item.products;

        if (index >= 0) {
            products[index].quantity -= 1;
            if (products[index].quantity <= 0) products.splice(index, 1);
        } else return;

        const totals = calculateTotals(products);

        updateItem({products, totals});
    }

    function removeProduct(productPid: string) {
        let index = -1;

        for (let i = 0; i < item.products.length; i++) {
            if (item.products[i].pid !== productPid) continue;
            index = i;
            break;
        }

        let products = item.products;

        if (index >= 0) {
            products.splice(index, 1);
        } else return;

        const totals = calculateTotals(products);

        updateItem({products, totals});
    }

    function addProduct(product: Product) {
        let index = -1;

        for (let i = 0; i < item.products.length; i++) {
            if (item.products[i].pid !== product.pid) continue;
            index = i;
            break;
        }

        let products = item.products;

        if (index >= 0) products[index].quantity += 1;
        else
            products.push({
                ...product,
                quantity: 1,
            });

        const totals = calculateTotals(products);

        updateItem({products, totals});
    }

    return {
        cart: item,
        addProduct,
        subProduct,
        removeProduct,
        getCartSize,
    };
}

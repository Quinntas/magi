'use client';

import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import {ShoppingCart} from 'lucide-react';
import Image from 'next/image';
import React, {useState} from 'react';
import {Button} from '@/components/ui/button';
import QuantityPicker from '@/components/quantity-picker';
import {useCart} from './hooks/use-cart';
import {CartProduct as CartProductIterface} from '@/lib/types/cart';

interface CartProductProps {
    product: CartProductIterface;
}

export function CartProduct(props: CartProductProps) {
    const {addProduct, removeProduct, subProduct} = useCart();

    return (
        <div className={'flex gap-[10px] shrink-0'}>
            {/*TODO make overflow hidden*/}
            <Image
                src={props.product.images.cover.src}
                alt={props.product.images.cover.alt}
                width={100}
                height={200}
                className={'shrink-0rounded overflow-hidden'}
            />
            <div className={'flex flex-col gap-[10px] justify-between py-[5px] w-full '}>
                <div className={'flex flex-col'}>
                    <span>{props.product.name}</span>
                    <span>SIZE: 1</span>
                </div>
                <span>
                    {(props.product.price - props.product.discount).toLocaleString('pt-BR', {
                        currency: 'BRL',
                        style: 'currency',
                    })}
                </span>
                <div className="flex items-center w-full justify-between">
                    <QuantityPicker
                        quantity={props.product.quantity}
                        setQuantity={(_, op) => {
                            switch (op) {
                                case '+':
                                    addProduct(props.product);
                                    break;
                                case '-':
                                    subProduct(props.product.pid);
                                    break;
                            }
                        }}
                    />
                    <Button
                        variant={'ghost'}
                        onClick={() => {
                            removeProduct(props.product.pid);
                        }}
                    >
                        <span className={'text-muted-foreground opacity-50 font-light'}>REMOVE</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export function Cart() {
    const {cart, getCartSize} = useCart();

    return (
        <Sheet>
            <SheetTrigger>
                <ShoppingCart />
            </SheetTrigger>
            <SheetContent
                className={'w-[100%] sm:w-[500px] sm:max-w-screen px-[10px] h-full flex flex-col justify-between'}
            >
                <span className={'text-xl'}>CART ({getCartSize()})</span>
                <div className={'flex flex-col w-full h-full mt-[30px]'}></div>
                <div className={'flex flex-col gap-[10px]'}>
                    {cart.products.map((product, index) => {
                        return <CartProduct product={product} key={`cart-${index}`} />;
                    })}
                    <div className={'flex items-center justify-between'}>
                        <span>SUBTOTAL</span>
                        <span>
                            {cart.totals.subtotal.toLocaleString('pt-BR', {
                                currency: 'BRL',
                                style: 'currency',
                            })}
                        </span>
                    </div>
                    <Button className={'w-full'}>
                        <span>CHECK OUT</span>
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    );
}

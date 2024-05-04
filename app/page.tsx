'use client';
import Link from 'next/link';
import React from 'react';
import {Button} from '@/components/ui/button';
import {Cart} from './_components/cart/cart';
import {Product} from './_components/product/product';

const products = [
    {
        pid: '123',
        price: 22,
        name: 'Knight super armor 3000',
        description: '123',
        sizes: [],
        discount: 1,
        images: {
            cover: {
                src: 'https://i.imgur.com/yFHlluu_d.webp?maxwidth=760&fidelity=grand',
                alt: '',
            },
            back: {
                src: 'https://i.imgur.com/yFHlluu_d.webp?maxwidth=760&fidelity=grand',
                alt: '',
            },
            gallery: [],
        },
    },
];

export default function Home() {
    return (
        <>
            <div className="w-full h-full p-[30px] px-[5%] flex flex-col gap-[30px] py-[20px]">
                <div className={'flex items-center justify-between'}>
                    <Link href={'/'} className={'font-bold text-4xl'}>
                        Magi
                    </Link>
                    <Cart />
                </div>

                <div
                    className={
                        'grid grid-cols-1 shrink-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-[100px] overflow-y-auto'
                    }
                >
                    {[...products, ...products, ...products, ...products].map((product, index) => {
                        return <Product key={`main-product-${index}`} product={product} />;
                    })}
                </div>

                <footer className="flex items-center gap-[10px] justify-between">
                    <span>Copyright text</span>

                    <div className={'flex gap-[10px] items-center'}>
                        <Button variant={'ghost'}>
                            <span>Privacy</span>
                        </Button>
                        <Button variant={'ghost'}>
                            <span>Terms of use</span>
                        </Button>
                    </div>
                </footer>
            </div>
        </>
    );
}

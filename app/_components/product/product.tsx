import {Product as ProductInterface} from '@/lib/types/product';
import Image from 'next/image';
import Link from 'next/link';
import {useCart} from '../cart/hooks/use-cart';

interface ProductProps {
    product: ProductInterface;
}

export function Product(props: ProductProps) {
    const {addProduct} = useCart();
    return (
        <>
            <Link
                onClick={() => addProduct(props.product)}
                href={`#`}
                className={'flex items-center justify-center flex-col w-full group gap-[10px] min-w-[300px] shrink-0'}
            >
                <Image
                    src={props.product.images.cover.src}
                    alt={props.product.images.cover.alt}
                    width={200}
                    height={600}
                    className="shrink-0 group-hover:hidden block"
                />
                <Image
                    src={props.product.images.back.src}
                    alt={props.product.images.back.alt}
                    width={200}
                    height={600}
                    className="shrink-0 group-hover:block hidden"
                />
                <div className="flex flex-col text-left items-start justify-start w-full opacity-0 group-hover:opacity-100 transition-opacity ease-in-out  ">
                    <span className={''}>{props.product.name}</span>
                    <span className={''}>
                        {(props.product.price - props.product.discount).toLocaleString('pt-BR', {
                            currency: 'BRL',
                            style: 'currency',
                        })}
                    </span>
                </div>
            </Link>
        </>
    );
}

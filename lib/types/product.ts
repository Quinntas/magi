type Sizes = 1 | 2 | 3;

export interface Image {
    src: string;
    alt: string;
}

export interface Product {
    pid: string;
    name: string;
    description: string;
    sizes: Sizes[];
    price: number;
    discount: number;
    images: {
        cover: Image;
        back: Image;
        gallery: Image[];
    };
}

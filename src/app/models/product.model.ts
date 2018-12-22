export class Product {
    id: number;
    title: string;
    description: string;
    price: string;
    computed_price: string;
    image: string;
    discount?: boolean;
    categories: Category[];
}

export class Category {
    id: number;
    title: string;
}

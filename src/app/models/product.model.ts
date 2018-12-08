export class Product {
    id: number;
    title: string;
    description: string;
    price: string;
    preview: string;
    images: string[];
    discount?: boolean;
    categories: Category[];
}

export class Category {
    id: number;
    title: string;
}

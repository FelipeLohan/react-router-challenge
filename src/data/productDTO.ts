import productsData from "./productsData.json";

export interface Product {
  category: string;
  items: string[];
}

export function getAllProducts(): Product[] {
  return productsData;
}

// Função para buscar produtos por categoria
export function getProductsByCategory(category: string): Product[] {
  return productsData.filter((product) => product.category === category);
}
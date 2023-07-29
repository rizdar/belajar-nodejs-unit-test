import { getAllProducts, getProductById } from '../src/database';
import { ProductService } from '../src/products-service';

jest.mock('../src/database');

test('Mock modules getProductById', () => {
  getProductById.mockImplementation((id) => {
    return {
      id: id,
      name: 'Product mock',
    };
  });

  const product = ProductService.findById(1);

  expect(product).toEqual({
    id: 1,
    name: 'Product Mock',
  });
});

test('mock modules getAllProducts', () => {
  const products = [
    {
      id: 1,
      name: 'Product Mock',
    },
    {
      id: 2,
      name: 'Product Mock',
    },
  ];

  getAllProducts.mockImplementation(() => {
    return products;
  });

  expect(ProductService.findAll()).toEqual(products);
});

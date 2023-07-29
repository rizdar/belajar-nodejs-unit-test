import { getAllProducts, getProductById } from '../src/database';
import { ProductService } from '../src/products-service';

jest.mock('../src/database.js', () => {
  const originalModule = jest.requireActual('../src/database.js');
  return {
    __esmodule: true,
    ...originalModule,
    getAllProducts: jest.fn(),
  };
});

test.failing('Mock modules getProductById', () => {
  ProductService.findById(1);
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

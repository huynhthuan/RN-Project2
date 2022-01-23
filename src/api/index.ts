const baseUrl = 'https://61dc2ad1591c3a0017e1a761.mockapi.io';

const api = {
  getProduct: baseUrl + '/product',
  getDetailProduct: (id: string | number) => baseUrl + '/product/' + id,
  createProduct: baseUrl + '/product',
  updateProduct: baseUrl + '/product',
  deleteProduct: (id: string | number) => baseUrl + '/product/' + id,
};

export default api;

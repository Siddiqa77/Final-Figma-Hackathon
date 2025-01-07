export const product = {
    name: 'featuredProduct',
    title: 'Featured Product',
    type: 'document',
    fields: [
      { name: 'name', title: 'Name', type: 'string' },
      { name: 'code', title: 'Code', type: 'string' },
      { name: 'price', title: 'Price', type: 'string' },
      { name: 'colors', title: 'Colors', type: 'array', of: [{ type: 'string' }] },
      { name: 'image', title: 'Image', type: 'image'},
    ],
  };
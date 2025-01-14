export default {
    name: 'newproduct',
    type: 'document',
    title: 'Product',
    fields: [

      {
        name: 'id',
        title: 'ID',
        type: 'string',
        
      },
      {
        name: 'name',
        type: 'string',
        title: 'Product Name',
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description'
      },
      {
        name: 'price',
        type: 'number',
        title: 'Product Price',
      },
     
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true // Enables cropping and focal point selection
        }
      }
    ]
  };
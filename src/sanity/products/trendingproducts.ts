
export const trendingproducts = {
    name: 'trendingproducts',
    title: 'Trending Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'string',
      },
      {
        name: 'originalPrice',
        title: 'Original Price',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  };
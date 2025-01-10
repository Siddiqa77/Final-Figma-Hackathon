import { type SchemaTypeDefinition } from 'sanity'

import { trendingproducts } from '../products/trendingproducts'


import { shopgridproduct } from '../products/shopgridproduct'

import { latestproduct } from '../products/latestproduct'
import { featuredproduct } from '../products/featuredproduct'
import { relatedProduct } from '../products/relatedproduct'

import { topCategories } from '../products/topcategories'





export const schema: { types: SchemaTypeDefinition[] } = {
  types: [latestproduct,trendingproducts,shopgridproduct,featuredproduct,relatedProduct,topCategories]
}

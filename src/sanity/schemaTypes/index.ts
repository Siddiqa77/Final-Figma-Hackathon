import { type SchemaTypeDefinition } from 'sanity'

import { trendingproducts } from '../products/trendingproducts'
import { topcategories } from '../products/topcategories'

import { shopgridproduct } from '../products/shopgridproduct'

import { latestproduct } from '../products/latestproduct'
import { featuredproduct } from '../products/featuredproduct'
import { relatedProduct } from '../products/relatedproduct'





export const schema: { types: SchemaTypeDefinition[] } = {
  types: [latestproduct,trendingproducts,topcategories,shopgridproduct,featuredproduct,relatedProduct]
}

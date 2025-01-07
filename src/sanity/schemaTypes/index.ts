import { type SchemaTypeDefinition } from 'sanity'
import { latestproduct } from '../products/latestproduct'
import { product } from '../products/featuredproduct'
import { trendingproducts } from '../products/trendingproducts'
import { topcategories } from '../products/topcategories'

import { shopgridproduct } from '../products/shopgridproduct'
import detailpage from '../products/detailpage'





export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,latestproduct,trendingproducts,topcategories,shopgridproduct,detailpage]
}

import { type SchemaTypeDefinition } from 'sanity'

import { latestproduct } from '../products/latestproduct'
import { featuredproduct } from '../products/featuredproduct'
import { relatedProduct } from '../products/relatedproduct'
import { topCategories } from '../products/topcategories'
import { trendingproduct } from '../products/trendingproducts'
import { latestBlog } from '../products/latestblog'
import { shopgridproducts } from '../products/shopgridproduct'
import fetchapi from './fetchapi'








export const schema: { types: SchemaTypeDefinition[] } = {
  types: [latestproduct,trendingproduct,featuredproduct,relatedProduct,topCategories,latestBlog,
    shopgridproducts,fetchapi]
}

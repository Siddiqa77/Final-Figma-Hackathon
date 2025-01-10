import { type SchemaTypeDefinition } from 'sanity'
import { shopgridproducts } from '../products/shopgridproduct'
import { latestproduct } from '../products/latestproduct'
import { featuredproduct } from '../products/featuredproduct'
import { relatedProduct } from '../products/relatedproduct'
import { topCategories } from '../products/topcategories'
import { trendingproduct } from '../products/trendingproducts'
import { latestBlog } from '../products/latestblog'





export const schema: { types: SchemaTypeDefinition[] } = {
  types: [latestproduct,trendingproduct,shopgridproducts,featuredproduct,relatedProduct,topCategories,latestBlog]
}

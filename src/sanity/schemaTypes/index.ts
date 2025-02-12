import { type SchemaTypeDefinition } from 'sanity'
import { relatedProduct } from '../products/relatedproduct'
import { latestBlog } from '../products/latestblog'
import { newitem } from './newitem'
import { heroitem } from '../products/hero'
import { blogpage } from '../products/blog'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [relatedProduct,latestBlog,
    newitem,heroitem,blogpage]
}

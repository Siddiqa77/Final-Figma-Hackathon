
// import ProductDetails from "@/components/detailfolder/ProductDetail";
// import { client } from "@/sanity/lib/client";

// export default async function ProductPage({ params }: { params: { id: string } }) {
//   const fetchProduct = async (id: string) => {
//     const query = `*[_type == "item" && id == "${id}"][0]{
//       id,
//       name,
//       price,
//       description,
//       discountPercentage,
//       isFeaturedProduct,
//       stockLevel,
//       category->{
//         title,
//         value, 
//       },
//       "image": image.asset->url
//     }`;
//     return await client.fetch(query);
//   };

//   const product = await fetchProduct(params.id);
//   if (!product) return <p>Product not found</p>;

//   return <ProductDetails product={product} />;
// }
import ProductDetails from "@/components/detailfolder/ProductDetail";
import { client } from "@/sanity/lib/client";
import { Suspense } from "react";

const fetchProduct = async (id: string) => {
  const query = `*[_type == "item" && id == "${id}"][0]{
    id,
    name,
    price,
    description,
    discountPercentage,
    isFeaturedProduct,
    stockLevel,
    category->{
      title,
      value
    },
    "image": image.asset->url
  }`;
  return await client.fetch(query);
};

async function ProductData({ id }: { id: string }) {
  const product = await fetchProduct(id);
  if (!product) return <p>Product not found</p>;
  return <ProductDetails product={product} />;
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<p>Loading product...</p>}>
      <ProductData id={params.id} />
    </Suspense>
  );
}

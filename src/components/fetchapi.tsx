
import { sanityClient } from "@/sanity/sanity";
// Function to send data to Sanity
export const sendToSanity = async (product: any) => {
  try {
    const response = await sanityClient.create({
      _type: "product", 
    id: product.id,
      name: product.name,
      price: product.price,
      originalprice: product.originalprice,
     
      description: product.description,
     
      image: {
        _type: "image",
        asset: {
          _ref: product.imageRef, 
        },
      },
    });
    //  console.log("Data sent to Sanity:", response);
  } catch (error) {
    console.error("Error sending data to Sanity:", error);
  }
};

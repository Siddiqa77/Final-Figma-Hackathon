export const shopgridproduct = {
  name: "shopgridproduct",
  title: "Shopgrid Product",
  type: "document",
  fields: [
    { name: "name", 
      title: "Name", 
      type: "string" },

    { name: "price", 
      title: "Price", 
      type: "string" },

    { name: "originalprice", 
      title: "Original Price", 
      type: "string" },
    {
      name: "colors",
      title: "Colors",
      type: "array",
      of: [{ type: "string" }],
    },
    { name: "image", 
      title: "Image", 
      type: "image" },
  ],
};

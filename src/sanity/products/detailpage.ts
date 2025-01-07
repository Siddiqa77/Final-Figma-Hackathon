export default {
  name: "detailproduct",
  title: "Product Details",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Product Name",
      type: "string",
    },
    {
      name: "id",
      title: "Product ID",
      type: "string",
      description: "A unique identifier for the product.",
      validation: (Rule: any) =>
        Rule.required()
          .min(1)
          .error("Product ID is required and must be unique."),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "originalprice",
      title: "Original Price",
      type: "number",
      description: "The original price before discount (if any).",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "image",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
    },
  ],
};

const data = {
  isSuccessful: true,
  exceptionMessage: "Successfully fetched all the products",
  result: [
    {
      _id: "69b18c2fb2fe9484783e15f6",
      categoryName: "veg",
      parentId: null,
      products: [
        {
          id: "69b18f30b2fe9484783e160f",
          title: "Aluwadi 250gm",
          images: [
            "https://res.cloudinary.com/dgfnccyus/image/upload/v1773243678/aluwadi-150-250gm_roqj24.jpg",
          ],
          price: 150,
          description:
            "Enjoy the real taste of traditional Indian food with our Aluwadi.",
          sku: "ruchika-0001",
          otherDetails: {
            isNewArrival: false,
            isFeatured: false,
            isBestSeller: true,
            isOnSale: false,
            isDiscounted: false,
            discount: 0,
            isLimitedEdition: false,
            isDiscountinued: false,
            isCodAvailable: false,
            isReturnable: false,
            isOutOfStock: false,
            productDetails: {
              netContent: "250gm",
              useBefore: "n/a",
              mrp: "150",
              uspGram: "250gm",
              genericName: "aluwadi",
              countryOfOrigin: "India",
              manufacturedBy: "Ruchika Foods",
              consumerFeedback: "not available",
              usageRestriction: "not available",
              storage: "not available",
              caution: "not available",
              warning: "not available",
            },
            productDescription: ["n/a"],
            benefits: ["n/a"],
            howToUse: ["n/a"],
            ingredientsUsed: ["n/a"],
          },
          categoryId: "69b18c2fb2fe9484783e15f6",
        },
        {
          id: "69b19057b2fe9484783e1627",
          title: "Bajra Laddu per kg",
          images: [
            "https://res.cloudinary.com/dgfnccyus/image/upload/v1773243678/bajra-laddu-1400perkg_rcqnjy.jpg",
          ],
          price: 1400,
          description:
            "Enjoy the taste of tradition with our healthy Bajra (Pearl Millet) Laddus. Made with care, these laddus are perfect as a tasty snack or a festive sweet.",
          sku: "ruchika-0002",
          otherDetails: {
            isNewArrival: true,
            isFeatured: false,
            isBestSeller: false,
            isOnSale: false,
            isDiscounted: false,
            discount: 0,
            isLimitedEdition: false,
            isDiscountinued: false,
            isCodAvailable: false,
            isReturnable: false,
            isOutOfStock: false,
            productDetails: {
              netContent: "1kg",
              useBefore: "n/a",
              mrp: "1400",
              uspGram: "1kg",
              genericName: "Laddu",
              countryOfOrigin: "India",
              manufacturedBy: "Ruchika Foods",
              consumerFeedback: "not available",
              usageRestriction: "not available",
              storage: "not available",
              caution: "not available",
              warning: "not available",
            },
            productDescription: ["n/a"],
            benefits: ["n/a"],
            howToUse: ["n/a"],
            ingredientsUsed: ["n/a"],
          },
          categoryId: "69b18c2fb2fe9484783e15f6",
        },
        {
          id: "69b19260b2fe9484783e167c",
          title: "Besan Laddu per kg",
          images: [
            "https://res.cloudinary.com/dgfnccyus/image/upload/v1773243687/besan-laddu-800kg_yxjxhj.jpg",
          ],
          price: 800,
          description:
            "Celebrate every occasion with the rich taste of our classic Besan Laddu.",
          sku: "ruchika-0003",
          otherDetails: {
            isNewArrival: false,
            isFeatured: false,
            isBestSeller: false,
            isOnSale: false,
            isDiscounted: false,
            discount: 0,
            isLimitedEdition: false,
            isDiscountinued: false,
            isCodAvailable: false,
            isReturnable: false,
            isOutOfStock: false,
            productDetails: {
              netContent: "1kg",
              useBefore: "n/a",
              mrp: "800",
              uspGram: "1kg",
              genericName: "Besan Laddu",
              countryOfOrigin: "India",
              manufacturedBy: "Ruchika Foods",
              consumerFeedback: "not available",
              usageRestriction: "not available",
              storage: "not available",
              caution: "not available",
              warning: "not available",
            },
            productDescription: ["n/a"],
            benefits: ["n/a"],
            howToUse: ["n/a"],
            ingredientsUsed: ["n/a"],
          },
          categoryId: "69b18c2fb2fe9484783e15f6",
        },
      ],
      children: [],
    },
    {
      _id: "69b18c37b2fe9484783e15fa",
      categoryName: "non veg",
      parentId: null,
      products: [
        {
          id: "69b3caa7597b91835fb637ff",
          title: "testtest",
          images: [
            "https://res.cloudinary.com/dgfnccyus/image/upload/v1768890838/Azardian-1_i8dzvf.webp",
          ],
          price: 200,
          description: "testtesttesttesttest",
          sku: "ruchika-0004",
          otherDetails: {
            isNewArrival: true,
            isFeatured: false,
            isBestSeller: true,
            isOnSale: false,
            isDiscounted: false,
            discount: 0,
            isLimitedEdition: false,
            isDiscountinued: false,
            isCodAvailable: false,
            isReturnable: false,
            isOutOfStock: false,
            productDetails: {
              netContent: "100 g",
              useBefore: "Use Before 24 month from date of manufacture",
              mrp: "1400",
              uspGram: "USP ₹/gm :  ₹ 0.70 / g",
              genericName: "SOAP",
              countryOfOrigin: "India",
              manufacturedBy: "Ruchika Foods",
              consumerFeedback: "not available",
              usageRestriction: "not available",
              storage: "not available",
              caution: "not available",
              warning: "not available",
            },
            productDescription: ["test"],
            benefits: ["test"],
            howToUse: ["test"],
            ingredientsUsed: ["test"],
          },
          categoryId: "69b18c37b2fe9484783e15fa",
        },
      ],
      children: [],
    },
    {
      _id: "69b3b2a1182bccfb2ea3400f",
      categoryName: "hello",
      parentId: null,
      products: [],
      children: [],
    },
  ],
  statusCode: 200,
};

function extractAllProducts(result) {
  return result.flatMap((category) => {
    // Get products from current category
    const currentProducts = category.products || [];

    // If there are children, recursively get their products too
    const childProducts =
      category.children && category.children.length > 0
        ? extractAllProducts(category.children)
        : [];

    // Combine current products with child products
    return [...currentProducts, ...childProducts];
  });
}

// Usage:
const allNestedProducts = extractAllProducts(data.result);
console.log(allNestedProducts);

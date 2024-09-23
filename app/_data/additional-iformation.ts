import { generalInformation } from "./general-information";
import { productInformation } from "./product-information";
import { dimensionInformation } from "./dimension-information";
import { warrantyInformation } from "./warranty-information";

console.log("General Information Length:", generalInformation.length);
console.log("Product Information Length:", productInformation.length);
console.log("Dimension Information Length:", dimensionInformation.length);
console.log("Warranty Information Length:", warrantyInformation.length);

export const additionalInformation = Array.from({ length: 32 }, (_, index) => {
  const general_info = generalInformation[index];
  const product_info = productInformation[index];
  const dimension_info = dimensionInformation[index];
  const warranty_info = warrantyInformation[index];

  return {
    id: index + 1,
    general: general_info,
    product: product_info,
    dimension: dimension_info,
    warranty: warranty_info,
  };
});

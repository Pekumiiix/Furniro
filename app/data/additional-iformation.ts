import { generalInformation } from "./general-information";
import { productInformation } from "./product-information";
import { dimensionInformation } from "./dimension-information";
import { warrantyInformation } from "./warranty-information";

console.log("General Information Length:", generalInformation.length);
console.log("Product Information Length:", productInformation.length);
console.log("Dimension Information Length:", dimensionInformation.length);
console.log("Warranty Information Length:", warrantyInformation.length);

export const additionalInformation: AdditionalInformation[] = Array.from(
  { length: 32 },
  (_, index) => {
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
  }
);

interface GeneralInfo {
  package: string;
  model_number: string;
  secondary_material: string;
  configuration: string;
  upholstery_material: string;
  upholstery_color: string;
}

interface ProductInfo {
  filling_material: string;
  finish_type: string;
  headrest: string;
  max_load_capacity: number;
  origin: string;
}

interface DimensionInfo {
  width: number;
  height: number;
  depth: number;
  weight: number;
  seat_height: number;
  leg_height: number;
}

interface WarrantyInfo {
  summary: string;
  service_type: string;
  covered: string;
  not_covered: string;
  domestic: number;
}

interface AdditionalInformation {
  id: number;
  general: GeneralInfo;
  product: ProductInfo;
  dimension: DimensionInfo;
  warranty: WarrantyInfo;
}

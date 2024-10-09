"use client";

import { useComparison } from "@/app/hooks/comparison-context";
import { additionalInformation } from "@/app/data/additional-iformation";

export default function ProductTable() {
  const { comparison } = useComparison();

  const information = comparison.reduce((acc, product) => {
    const foundInfo = additionalInformation.find(
      (info) => info.id === product.id
    );
    if (foundInfo && !acc.some((info) => info.id === foundInfo.id)) {
      acc.push(foundInfo);
    }
    return acc;
  }, [] as AdditionalInformation[]);

  return (
    <section className="container w-full md:flex items-center py-14 border-t border-[#e8e8e8] overflow-auto">
      <table className="w-[790px] md:min-w-[900px] lg:w-full overflow-y-auto">
        <tbody className="flex flex-col min-w-full w-fit">
          <General information={information} />

          <Product information={information} />

          <Dimension information={information} />

          <Warranty information={information} />
        </tbody>
      </table>
    </section>
  );
}

function General({ information }: GeneralProps) {
  const generalFields: GeneralField[] = [
    { label: "Sales package", key: "package" },
    { label: "Model number", key: "model_number" },
    { label: "Secondary material", key: "secondary_material" },
    { label: "Configuration", key: "configuration" },
    { label: "Upholstery material", key: "upholstery_material" },
    { label: "Upholstery color", key: "upholstery_color" },
  ];

  return (
    <>
      <tr className="mb-1.5">
        <td className="text-lg md:text-2xl font-medium">General</td>
      </tr>
      {generalFields.map((field) => (
        <tr key={field.label} className="grid grid-cols-4 gap-5">
          <td className="text-myBlack md:font-medium text-[13px] md:text-base mb-0.5">
            {field.label}:
          </td>
          {information.map((item, index) => (
            <td
              className="text-myBlack md:font-medium text-[13px] md:text-base"
              key={index}
            >
              {item.general[field.key as keyof GeneralInfo]}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

function Product({ information }: GeneralProps) {
  const productFields: GeneralField[] = [
    { label: "Filling material", key: "filling_material" },
    { label: "Finish type", key: "finish_type" },
    { label: "Adjustable headrest", key: "headrest" },
    { label: "Maximum load capacity (Kg)", key: "max_load_capacity" },
    { label: "Origin of manufacture", key: "origin" },
  ];

  return (
    <>
      <tr className="mt-10 mb-1.5">
        <td className="text-lg md:text-2xl font-medium">Product</td>
      </tr>
      {productFields.map((field) => (
        <tr className="grid grid-cols-4 gap-5" key={field.label}>
          <td className="text-myBlack md:font-medium text-[13px] md:text-base mb-0.5">
            {field.label}:
          </td>
          {information.map((item, index) => (
            <td
              className="text-myBlack md:font-medium text-[13px] md:text-base"
              key={index}
            >
              {item.product[field.key as keyof ProductInfo]}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

function Dimension({ information }: GeneralProps) {
  const productFields: GeneralField[] = [
    { label: "Width (cm)", key: "width" },
    { label: "Height (cm)", key: "height" },
    { label: "Depth (cm)", key: "depth" },
    { label: "Weight (cm)", key: "weight" },
    { label: "Seat height (cm)", key: "seat_height" },
    { label: "Leg height (cm)", key: "leg_height" },
  ];

  return (
    <>
      <tr className="mt-10 mb-1.5">
        <td className="text-lg md:text-2xl font-medium">Dimension</td>
      </tr>
      {productFields.map((field) => (
        <tr key={field.label} className="grid grid-cols-4 gap-5">
          <td className="text-myBlack md:font-medium text-[13px] md:text-base mb-0.5">
            {field.label}:
          </td>
          {information.map((item, index) => (
            <td
              className="text-myBlack md:font-medium text-[13px] md:text-base"
              key={index}
            >
              {item.dimension[field.key as keyof DimensionInfo]}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

function Warranty({ information }: GeneralProps) {
  const productFields: GeneralField[] = [
    { label: "Warranty summary", key: "summary" },
    { label: "Warranty service type", key: "service_type" },
    { label: "Covered in warranty", key: "covered" },
    { label: "Not covered in warranty", key: "not_covered" },
    { label: "Domestic warranty (yrs)", key: "domestic" },
  ];

  return (
    <>
      <tr className="mt-10 mb-1.5">
        <td className="text-lg md:text-2xl font-medium">Warranty</td>
      </tr>
      {productFields.map((field) => (
        <tr key={field.key} className="grid grid-cols-4 gap-5">
          <td className="text-myBlack md:font-medium text-[13px] md:text-base mb-0.5">
            {field.label}:
          </td>
          {information.map((item, index) => (
            <td
              className="text-myBlack md:font-medium text-[13px] md:text-base"
              key={index}
            >
              {item.warranty[field.key as keyof WarrantyInfo]}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

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

interface GeneralProps {
  information: AdditionalInformation[];
}

interface GeneralField {
  label: string;
  key: string;
}

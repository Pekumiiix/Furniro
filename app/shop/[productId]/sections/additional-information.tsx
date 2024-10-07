import { additionalInformation } from "@/app/data/additional-iformation";

export default function AdditionalInformation({ info }: ProductProps) {
  return (
    <section className="grid md:grid-cols-3 lg:flex gap-10">
      <General general={info.general} />
      <Product product={info.product} />
      <Dimension dimension={info.dimension} />
      <Warranty warranty={info.warranty} />
    </section>
  );
}

function General({ general }: { general: GeneralInfo }) {
  return (
    <div className="flex flex-col gap-2 w-fit">
      <p className="text-xl font-medium">General</p>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-myBlack">
          {`Sales Package: ${general.package}`}
        </p>
        <p className="text-sm font-medium text-myBlack">
          {`Model Number: ${general.model_number}`}
        </p>
        <p className="text-sm font-medium text-myBlack">
          {`Secondary Material: ${general.secondary_material}`}
        </p>
        <p className="text-sm font-medium text-myBlack">
          {`Configuration: ${general.configuration}`}
        </p>
        <p className="text-sm font-medium text-myBlack">
          {`Upholstery Material: ${general.upholstery_material}`}
        </p>
        <p className="text-sm font-medium text-myBlack">
          {`Upholstery Color: ${general.upholstery_color}`}
        </p>
      </div>
    </div>
  );
}

function Product({ product }: { product: ProductInfo }) {
  return (
    <div className="flex flex-col gap-2 w-fit">
      <p className="text-xl font-medium">Product</p>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-myBlack">
          {`Filling Material: ${product.filling_material}`}
        </p>
        <p className="text-sm font-medium text-myBlack">
          {`Finish Type: ${product.finish_type}`}
        </p>
        <p className="text-sm font-medium text-myBlack">
          {`Adjustable Headrest: ${product.headrest}`}
        </p>
        <p className="text-sm font-medium text-myBlack">
          {`Maximum Load Capacity: ${product.max_load_capacity} KG`}
        </p>
        <p className="text-sm font-medium text-myBlack">
          {`Origin of Manufacture: ${product.origin}`}
        </p>
      </div>
    </div>
  );
}

function Dimension({ dimension }: { dimension: DimensionInfo }) {
  return (
    <div className="flex flex-col gap-2 w-fit">
      <p className="text-xl font-medium">Dimensions</p>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-myBlack">{`Width: ${dimension.width} cm`}</p>
        <p className="text-sm font-medium text-myBlack">{`Height: ${dimension.height} cm`}</p>
        <p className="text-sm font-medium text-myBlack">{`Depth: ${dimension.depth} cm`}</p>
        <p className="text-sm font-medium text-myBlack">{`Weight: ${dimension.weight} KG`}</p>
        <p className="text-sm font-medium text-myBlack">{`Seat Height: ${dimension.seat_height} cm`}</p>
        <p className="text-sm font-medium text-myBlack">{`Leg Height: ${dimension.leg_height} cm`}</p>
      </div>
    </div>
  );
}

function Warranty({ warranty }: { warranty: WarrantyInfo }) {
  return (
    <div className="flex flex-col gap-2 md:col-span-3 lg:max-w-[550px]">
      <p className="text-xl font-medium">Warranty</p>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-myBlack">
          {`Warranty Summary: ${warranty.summary}`}
        </p>
        <p className="text-sm font-medium text-myBlack">
          {`Warranty Service Type: ${warranty.service_type}`}
        </p>
        <p className="text-sm font-medium text-myBlack">
          {`Covered in Warranty: ${warranty.covered}`}
        </p>
        <p className="text-sm font-medium text-myBlack">
          {`Not Covered in Warranty: ${warranty.not_covered}`}
        </p>
        <p className="text-sm font-medium text-myBlack">
          {`Domestic Warranty: ${warranty.domestic} Year`}
        </p>
      </div>
    </div>
  );
}

// Define proper types for the props
interface AdditionalInformation {
  id: number;
  general: GeneralInfo;
  product: ProductInfo;
  dimension: DimensionInfo;
  warranty: WarrantyInfo;
}

interface ProductProps {
  info: AdditionalInformation;
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

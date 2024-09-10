export default function ProductTable() {
  return (
    <section className="container w-full md:flex items-center justify-center py-14 border-t border-[#E8E8E8] overflow-auto">
      <table className="min-w-[600px] w-full flex flex-col gap-5 md:gap-10">
        <tbody>
          <tr>
            <td className="text-lg md:text-2xl font-medium">General</td>
          </tr>
        </tbody>

        <tbody>
          <tr className="grid grid-cols-4 gap-5 -mb-2.5 md:-mb-5">
            <td className="text-myBlack md:font-medium text-[13px] md:text-base">
              Sales Package
            </td>
            <td className="text-myBlack md:font-medium text-[13px] md:text-base">
              1 sectional sofa
            </td>
            <td className="text-myBlack md:font-medium text-[13px] md:text-base">
              1 Three Seater, 2 Single Seater
            </td>
            <td className="text-myBlack md:font-medium text-[13px] md:text-base">
              1 Three Seater, 2 Single Seater
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr className="grid grid-cols-4 gap-5 -mb-2.5 md:-mb-5">
            <td className="text-myBlack md:font-medium text-[13px] md:text-base">
              Model Number
            </td>
            <td className="text-myBlack md:font-medium text-[13px] md:text-base">
              TFCBLIGRBL6SRHS
            </td>
            <td className="text-myBlack md:font-medium text-[13px] md:text-base">
              DTUBLIGRBL568
            </td>
            <td className="text-myBlack md:font-medium text-[13px] md:text-base">
              DTUBLIGRBL568
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr className="grid grid-cols-4 gap-5 -mb-2.5 md:-mb-5">
            <td className="text-myBlack md:font-medium text-[13px] md:text-base">
              Secondary Material
            </td>
            <td className="text-myBlack md:font-medium text-[13px] md:text-base">
              Solid Wood
            </td>
            <td className="text-myBlack md:font-medium text-[13px] md:text-base">
              Solid Wood
            </td>
            <td className="text-myBlack md:font-medium text-[13px] md:text-base">
              Solid Wood
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

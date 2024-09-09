export default function ProductTable() {
  return (
    <section className="container w-full flex items-center justify-center py-14 border-t border-[#E8E8E8]">
      <table className="w-full flex flex-col gap-10">
        <tr>
          <td className="text-2xl font-medium">General</td>
        </tr>

        <tr className="grid grid-cols-4 gap-5 -mb-5">
          <td className="text-myBlack font-medium">Sales Package</td>
          <td className="text-myBlack font-medium">1 sectional sofa</td>
          <td className="text-myBlack font-medium">
            1 Three Seater, 2 Single Seater
          </td>
        </tr>
        <tr className="grid grid-cols-4 gap-5 -mb-5">
          <td className="text-myBlack font-medium">Model Number</td>
          <td className="text-myBlack font-medium">TFCBLIGRBL6SRHS</td>
          <td className="text-myBlack font-medium">DTUBLIGRBL568</td>
        </tr>
        <tr className="grid grid-cols-4 gap-5 -mb-5">
          <td className="text-myBlack font-medium">Secondary Material</td>
          <td className="text-myBlack font-medium">Solid Wood</td>
          <td className="text-myBlack font-medium">Solid Wood</td>
        </tr>
      </table>
    </section>
  );
}

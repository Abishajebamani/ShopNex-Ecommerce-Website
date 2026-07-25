import Sidebar from "../../components/admin/Sidebar";
import AddProductButton from "../../components/admin/AddProductButton";
import ProductTable from "../../components/admin/ProductTable";

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <div className="w-72">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-4xl font-bold">
            Product Management
          </h1>

        </div>

        <AddProductButton />

        <ProductTable />

      </div>

    </div>
  );
};

export default Products;
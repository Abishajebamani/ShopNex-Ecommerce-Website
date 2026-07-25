import {
  FiMonitor,
  FiSmartphone,
  FiWatch,
  FiHeadphones,
  FiShoppingBag,
  FiGift,
} from "react-icons/fi";

import CategoryCard from "./CategoryCard";

const categories = [
  {
    title: "Electronics",
    icon: <FiMonitor size={35} />,
  },
  {
    title: "Mobiles",
    icon: <FiSmartphone size={35} />,
  },
  {
    title: "Fashion",
    icon: <FiShoppingBag size={35} />,
  },
  {
    title: "Watches",
    icon: <FiWatch size={35} />,
  },
  {
    title: "Accessories",
    icon: <FiHeadphones size={35} />,
  },
  {
    title: "Gift Items",
    icon: <FiGift size={35} />,
  },
];

const Categories = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="text-center">
        <h2 className="text-4xl font-bold text-slate-800">
          Shop by Category
        </h2>

        <p className="text-gray-500 mt-3">
          Explore products across your favourite categories.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            icon={category.icon}
          />
        ))}
      </div>

    </section>
  );
};

export default Categories;
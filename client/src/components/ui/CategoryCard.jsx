const CategoryCard = ({ title, icon }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center cursor-pointer hover:-translate-y-2 hover:shadow-xl transition duration-300">
      <div className="text-blue-600">
        {icon}
      </div>

      <h3 className="mt-4 font-semibold">
        {title}
      </h3>
    </div>
  );
};

export default CategoryCard;
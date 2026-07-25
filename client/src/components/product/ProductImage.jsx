const ProductImage = ({ image, name }) => {
  return (
    <div className="h-60 overflow-hidden bg-gray-100">

      <img
        src={image}
        alt={name}
        className="
        w-full
        h-full
        object-cover
        hover:scale-105
        transition-transform
        duration-300
        "
      />

    </div>
  );
};

export default ProductImage;
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import heroImage from "../../assets/images/hero-banner.jpg";

const Hero = () => {
  return (
    <section
      className="relative min-h-[600px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >

      {/* Overlay */}
      <div className="
        absolute 
        inset-0 
        bg-black/50
      "></div>


      <div className="
        relative 
        max-w-7xl 
        mx-auto 
        px-6 
        py-24 
        flex 
        items-center
      ">


        {/* Content */}

        <div className="max-w-xl text-white">


          <span className="
          inline-block
          bg-blue-600
          px-4
          py-2
          rounded-full
          text-sm
          font-semibold
          ">
            New Tech Collection 2026
          </span>


          <h1 className="
          text-5xl
          md:text-6xl
          font-extrabold
          mt-6
          leading-tight
          ">

            Shop Smarter,
            <br />

            Live Better.

          </h1>


          <p className="
          mt-6
          text-lg
          text-gray-200
          ">
            Discover premium gadgets, smart devices,
            and everyday essentials with exclusive deals
            at ShopNex.
          </p>


          <div className="flex gap-4 mt-8">


            <Link
              to="/products"
              className="
              bg-blue-600
              px-7
              py-3
              rounded-xl
              font-semibold
              flex
              items-center
              gap-2
              hover:bg-blue-700
              transition
              "
            >
              Shop Now
              <FiArrowRight />
            </Link>


            <Link
              to="/products"
              className="
              border
              border-white
              px-7
              py-3
              rounded-xl
              font-semibold
              hover:bg-white
              hover:text-black
              transition
              "
            >
              Explore
            </Link>


          </div>


        </div>


      </div>

    </section>
  );
};

export default Hero;
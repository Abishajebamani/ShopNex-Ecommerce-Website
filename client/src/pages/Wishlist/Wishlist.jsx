import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import WishlistCard from "../../components/wishlist/WishlistCard";
import API from "../../services/api";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchWishlist = async () => {
    try {
      const response = await API.get("/wishlist");

      console.log("Wishlist:", response.data.wishlist);

      setWishlist(response.data.wishlist);
    } catch (error) {
      console.error("Failed to fetch wishlist:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="text-center py-10">
          Loading Wishlist...
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-3xl font-bold mb-8">
          My Wishlist
        </h1>

        {wishlist.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-gray-600">
              Your Wishlist is Empty ❤️
            </h2>

            <p className="text-gray-500 mt-3">
              Save your favourite products here.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {wishlist.map((item) => (
              <WishlistCard
                key={item.wishlist_id}
                product={item}
                fetchWishlist={fetchWishlist}
              />
            ))}

          </div>
        )}

      </section>
    </Layout>
  );
};

export default Wishlist;
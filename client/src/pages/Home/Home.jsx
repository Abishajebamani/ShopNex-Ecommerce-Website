import Layout from "../../components/layout/Layout";
import Hero from "../../components/ui/Hero";
import Categories from "../../components/ui/Categories";
import FeaturedProducts from "../../components/product/FeaturedProducts";
import CategoryCard from "../../components/ui/CategoryCard";
const Home = () => {
  return (
    <Layout>
      <Hero />
      <Categories />
      <FeaturedProducts />
    </Layout>
  );
};

export default Home;
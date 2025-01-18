import Hero from "@/components/Hero";
import Midbanner from "@/components/Homepage/Midbanner";
import Support from "@/components/Homepage/Support";
import Latestblog from "@/components/Homepage/Latestblog";
import Newsletter from "@/components/Homepage/Newsletter";
import DiscountItem from "@/components/Homepage/DiscountItem";
import Tags from "@/components/Homepage/Tags";
import FeaturedProduct from "@/components/Homepage/FeaturedProduct";
import LatestProduct from "@/components/Homepage/LatestProduct";
import TrendingProducts from "@/components/Homepage/TrendingProducts";
import Topcategories from "@/components/Homepage/Topcategories";
 





const page = () => {
  return (
    <div>
      <div>
        {/* Render homepage components */}
        <Hero/>
         <FeaturedProduct /> 
         <LatestProduct /> 
        <Support />
        <Midbanner />
          <TrendingProducts />  
        <DiscountItem />
         <Topcategories /> 
        <Newsletter />
        <Tags />
        <Latestblog />
      </div>
    </div>
  );
};

export default page;

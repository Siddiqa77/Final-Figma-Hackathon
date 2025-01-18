

import Featuredproduct from "@/components/Homepage/Featuredproduct";
import Hero from "@/components/Hero";
import LatestProduct from "@/components/Homepage/latestproduct";
import Midbanner from "@/components/Homepage/Midbanner";
import Support from "@/components/Homepage/Support";
import Latestblog from "@/components/Homepage/Latestblog";
import Newsletter from "@/components/Homepage/Newsletter";
import DiscountItem from "@/components/Homepage/DiscountItem";
import Topcategories from "@/components/Homepage/Topcategories";
import Tags from "@/components/Homepage/Tags";
import Trendingproducts from "@/components/Homepage/Trendingproducts";






const page = () => {
  return (
    <div>
<div>
      {/* Render homepage components */}
      <Hero />
      <Featuredproduct />
      <LatestProduct />
      <Support />
      <Midbanner />
      <Trendingproducts />
      <DiscountItem />
      <Topcategories />
      <Newsletter />
      <Tags />
      <Latestblog />
      
    </div>



    </div>
  )
}

export default page



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

import { fetchMockApi } from "@/api/fetchapi";
import { sendToSanity } from "@/components/fetchapi";

const Page = async () => {
  // Fetch data from Mock API
  const data = await fetchMockApi();
  

  // Send each item to Sanity
  for (const item of data) {
    await sendToSanity(item);
  }

  return (
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
  );
};

export default Page;

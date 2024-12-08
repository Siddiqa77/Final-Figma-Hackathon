
import Featuredproduct from '@/components/Homepage/Featuredproduct'

import Hero from '@/components/Hero'
import LatestProduct from '@/components/Homepage/latestproduct'
import Midbanner from '@/components/Homepage/Midbanner'
import Support from '@/components/Homepage/Support'
import Latestblog from '@/components/Homepage/Latestblog'
import Newsletter from '@/components/Homepage/Newsletter'
import Trendingproduct from '@/components/Homepage/Trendingproduct'
import DiscountItem from '@/components/Homepage/DiscountItem'
import Topcategories from '@/components/Homepage/Topcategories'
import Tags from '@/components/Homepage/Tags'


const Home = () => {
  return (
    <div>
      <Hero/>
     <Featuredproduct/> 
       <LatestProduct/> 
       <Support/>
       <Midbanner/> 
        <Trendingproduct/>  
        <DiscountItem/>
         <Topcategories/>  
       <Newsletter/>
       <Tags/> 
      <Latestblog/> 
      
      
    </div>
  )
}

export default Home
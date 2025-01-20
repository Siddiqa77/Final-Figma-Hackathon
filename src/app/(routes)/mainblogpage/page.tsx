import { BlogSidebar } from "@/components/blogpage/blogSideBar";
import Tags from "@/components/Homepage/Tags";
import Link from "next/link";
const grids = [
    {
      title: "Blog Page",
      
    },
  ];

  const BlogPage = () => {
    const current = grids[0];

  const pages: number[] = [2, 3, 4];

  return (
    <div>
       {/* Hero Section */}
       <section className="relative bg-[#F6F5FF] py-10 md:py-20 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        <div className="md:w-1/3 max-w-lg text-center md:text-left flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#101750] leading-tight mt-2 lg:ml-20">
            {current.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-6 mb-10 mr-4 lg:mr-20">
            <div className="text-[#000000] text-[16px] font-normal cursor-pointer hover:text-[#fb2448] transition">
              Home
            </div>
            <div className="text-[#000] text-[16px] font-normal cursor-pointer hover:text-[#fb2448] transition">
              Pages
            </div>
            <div className="text-[#FB2E86] text-[16px] font-normal cursor-pointer hover:text-[#fb2448] transition">
             Blog Page
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <div className="container md:w-[1170px]  mx-auto px-4 py-16">
        <div className=" md:flex  gap-8">
          {/* Blog Posts */}
          <div className="md:col-span-2 space-y-8">
            
              <article className=" lg:w-[870px] space-y-4">
                <img
                  src={'/blog1.png'}
                  alt="blogfirstpicture"
                  className="w-full rounded-lg"
                />
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="bg-pink-100 text-pink-500 px-4 py-1 ">Surf Auxion</span>
                  <span className="bg-pink-100 text-pink-500 px-4 py-1 ">Aug 09 2020</span>
                </div>
                <h2 className="text-2xl font-bold text-[#151875]">
                  Mauris at orci non vulputate diam tincidunt nec.
                </h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
                </p>
                <Link
                  href="/blog"
                  className="inline-block text-[#151875] hover:text-[#FB2E86] font-semibold hover:underline"
                >
                  Read More
                </Link>
              </article>

              <article className=" lg:w-[870px] space-y-4">
                <img
                  src={'/blog2.png'}
                  alt="Blogsecondpicture"
                  className="w-full rounded-lg"
                />
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="bg-pink-100 text-pink-500 px-4 py-1 ">Surf Auxion</span>
                  <span className="bg-pink-100 text-pink-500 px-4 py-1 ">Aug 09 2020</span>
                </div>
                <h2 className="text-2xl font-bold text-[#151875]">
                Aenean vitae in aliquam ultrices lectus. Etiam.
                </h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
                </p>
                <Link
                  href="/mainblogpage"
                  className="inline-block text-[#151875] hover:text-[#FB2E86] font-semibold hover:underline"
                >
                  Read More
                </Link>
              </article>

              <article className=" lg:w-[870px] space-y-4">
                <img
                  src={'/blog3.png'}
                  alt="Blogthirdpicture"
                  className="w-full rounded-lg"
                />
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="bg-pink-100 text-pink-500 px-4 py-1 ">Surf Auxion</span>
                  <span className="bg-pink-100 text-pink-500 px-4 py-1 ">Aug 09 2020</span>
                </div>
                <h2 className="text-2xl font-bold text-[#151875]">
                Sit nam congue feugiat nisl, mauris amet nisi. 
                </h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
                </p>
                <Link
                  href="/blog"
                  className="inline-block text-[#151875] hover:text-[#FB2E86] font-semibold hover:underline"
                >
                  Read More
                </Link>
              </article>

            {/* Pagination */}
            <div className="flex justify-center gap-2 pt-8">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FB2E86] text-white">
                1
              </span>
              {pages.map((page) => (
                <span
                  key={page}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer"
                >
                  {page}
                </span>
              ))}
            </div>
          </div>

<section>
    <Tags/>
</section>
          {/* Sidebar */}
          <aside className="lg:w-[250px]">
            <BlogSidebar />
          </aside>
        </div>
      </div>

      
<section>
    <Tags/>
</section>
    </div>
  );
}
    export default BlogPage;
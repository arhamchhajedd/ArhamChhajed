import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "HOW TO BUILD A BRAND THAT RESONATES",
    date: "Aug 12",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "THE FUTURE OF WEB DESIGN TRENDS IN 2024",
    date: "Sep 04",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "MAXIMIZING ECOMMERCE CONVERSION RATES",
    date: "Oct 21",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="w-full flex justify-center px-4 py-24 bg-black relative">
      <div className="max-w-[1400px] w-full">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-16 relative">
          <div className="relative inline-block">
            <h2 className="text-[6vw] leading-none font-bold text-white uppercase tracking-tight m-0"
                style={{ fontFamily: 'var(--font-bebas-neue)' }}>
              BLOG
            </h2>
            <span
              className="absolute -bottom-6 -right-12 text-[5vw] text-red-600 transform -rotate-12 select-none"
              style={{ fontFamily: 'var(--font-caveat)' }}
            >
              Insights.
            </span>
          </div>
          
          <button className="hidden md:flex items-center gap-2 text-white/50 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black hover:border-white">
            View All <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md bg-zinc-900 mb-6">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              </div>
              
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight uppercase group-hover:text-red-500 transition-colors"
                    style={{ fontFamily: 'var(--font-bebas-neue)' }}>
                  {post.title}
                </h3>
                <span className="text-white/40 font-mono text-xs uppercase tracking-widest shrink-0 mt-1">
                  {post.date}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

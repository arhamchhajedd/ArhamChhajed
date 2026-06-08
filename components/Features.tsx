import { Box, Cpu, Users, RotateCw } from "lucide-react";

const features = [
  { icon: Box, title: "STRATEGY-FIRST DESIGN", desc: "We build with purpose, aligning design with your business goals." },
  { icon: Cpu, title: "CLIENT-CENTRIC APPROACH", desc: "Your vision is our priority. We collaborate closely with you." },
  { icon: Users, title: "PROVEN EXPERTISE & CODE", desc: "Experienced team with a track record of successful deliveries." },
  { icon: RotateCw, title: "END-TO-END SOLUTIONS", desc: "From concept to deployment, we handle the entire lifecycle." },
];

export default function Features() {
  return (
    <section className="w-full flex-col items-center px-4 py-32 relative overflow-hidden bg-black border-t border-white/10">
      <div className="max-w-[1400px] w-full mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-[6vw] md:text-[5vw] leading-none font-bold text-white uppercase tracking-tight m-0"
              style={{ fontFamily: 'var(--font-bebas-neue)' }}>
            WHAT MAKES US UNIQUE
          </h2>
          <p className="mt-6 text-white/50 font-mono text-xs md:text-sm uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
            AWARD WINNING DIGITAL EXPERIENCES THROUGH INNOVATION, DEDICATION, AND FLAWLESS EXECUTION.
          </p>
        </div>

        {/* Unified Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 mb-8 border border-white/20 rounded-xl flex justify-center items-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-white group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-white font-bold font-mono text-sm uppercase tracking-widest mb-4 group-hover:text-red-500 transition-colors">
                {feature.title}
              </h3>
              <p className="text-white/50 text-xs font-mono uppercase tracking-widest leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

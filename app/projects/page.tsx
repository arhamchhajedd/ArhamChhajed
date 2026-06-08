import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import LazyVideo from "@/components/LazyVideo";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <PageTransition>
    <main className="min-h-screen">
      <Header showHero={false} />

      <section className="w-full flex flex-col items-center px-4 pt-48 pb-24 relative overflow-hidden bg-zinc-50 dark:bg-black transition-colors duration-300">
        <div className="max-w-[1400px] w-full mx-auto">

          {/* Header */}
          <div className="flex justify-between items-end mb-16 relative">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white font-mono text-xs uppercase tracking-widest transition-colors w-fit"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
              <h1
                className="text-[10vw] sm:text-[8vw] md:text-[6vw] leading-none font-bold text-black dark:text-white uppercase tracking-tight m-0 transition-colors duration-300"
                style={{ fontFamily: 'var(--font-bebas-neue)' }}
              >
                ALL PROJECTS
              </h1>
            </div>

            <div className="hidden md:block text-black/50 dark:text-white/50 font-mono text-xl uppercase tracking-widest transition-colors duration-300">
              {String(projects.length).padStart(2, '0')}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {projects.map((project) => {
              const cardClasses = `relative h-[60vh] md:h-[70vh] group cursor-pointer overflow-hidden rounded-2xl transition-colors ${project.cols} ${!project.bgColor ? "bg-zinc-200 dark:bg-zinc-900" : ""}`;

              const cardContent = (
                <>
                  {project.video ? (
                    <LazyVideo
                      src={project.video}
                      className="absolute inset-0 w-full h-full object-cover opacity-80 md:opacity-60 md:transition-all md:duration-700 md:group-hover:scale-105 md:group-hover:opacity-100"
                    />
                  ) : project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-80 md:opacity-60 md:transition-all md:duration-700 md:group-hover:scale-105 md:group-hover:opacity-100"
                    />
                  ) : null}

                  {project.centerLogo ? (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 md:transition-transform md:duration-700 md:group-hover:scale-105">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={project.centerLogo} alt={`${project.title} Logo`} className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain drop-shadow-2xl" />
                    </div>
                  ) : null}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-100 md:opacity-90 md:group-hover:opacity-100 md:transition-opacity md:duration-500 z-10" />

                  <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full flex justify-between items-end translate-y-0 opacity-100 md:translate-y-8 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:transition-all md:duration-700 md:ease-out z-20">
                    <div className="max-w-xl">
                      <h3
                        className="text-2xl md:text-5xl font-bold text-white uppercase tracking-tight md:transition-colors md:duration-300 md:group-hover:text-red-500"
                        style={{ fontFamily: 'var(--font-bebas-neue)' }}
                      >
                        {project.title}
                      </h3>
                      <p className="text-red-500 font-mono text-[10px] md:text-xs uppercase tracking-widest mt-1 md:mt-2 font-bold mb-2 md:mb-4">
                        {project.category}
                      </p>
                      <p className="text-white/70 text-xs md:text-sm leading-relaxed line-clamp-2 md:line-clamp-none">
                        {project.description}
                      </p>
                    </div>

                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex shrink-0 items-center justify-center">
                      {project.link ? (
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      ) : (
                        <span className="text-black text-xl font-bold leading-none">+</span>
                      )}
                    </div>
                  </div>
                </>
              );

              if (project.link) {
                return (
                  <a
                    key={project.id}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClasses}
                    style={project.bgColor ? { backgroundColor: project.bgColor } : undefined}
                  >
                    {cardContent}
                  </a>
                );
              }

              return (
                <div
                  key={project.id}
                  className={cardClasses}
                  style={project.bgColor ? { backgroundColor: project.bgColor } : undefined}
                >
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
    </PageTransition>
  );
}

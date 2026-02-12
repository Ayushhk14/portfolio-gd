"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Briefcase, Users, Zap, Award } from "lucide-react"

const highlights = [
  {
    icon: Briefcase,
    value: "2+",
    label: "Years at ADRS Techno",
  },
  {
    icon: Zap,
    value: "200+",
    label: "Social Media Creatives",
  },
  {
    icon: Users,
    value: "Complete",
    label: "Brand Identity Systems",
  },
  {
    icon: Award,
    value: "Pixel-Perfect",
    label: "UI/UX Execution",
  },
]

const timeline = [
  {
    period: "2022 - Present",
    role: "Graphic Designer",
    company: "ADRS Techno",
    description:
      "Led end-to-end design execution for branding, digital marketing, and UI/UX projects. Designed 200+ social media creatives, ad banners, and promotional materials. Created complete brand identity systems including logos, typography, and color palettes. Designed high-fidelity UI layouts, wireframes, and interactive prototypes in Figma. Ensured visual consistency and brand alignment across digital campaigns.",
    skills: ["Photoshop", "Illustrator", "Figma", "Blender"],
  },
]

export function ExperienceSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section
      ref={ref}
      id="experience"
      className="relative overflow-hidden px-6 py-28 lg:py-36"
    >
      <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary/5 blur-[150px]" />

      <div className="mx-auto max-w-7xl">
        <div className={`text-center transition-all duration-700 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Experience
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">2+ years of professional growth at ADRS Techno</span>
          </h2>
        </div>

        {/* Highlight Stats */}
        <div
          className={`mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4 transition-all duration-700 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.15s" }}
        >
          {highlights.map((item) => (
            <div
              key={item.label}
              className="glass group flex flex-col items-center rounded-2xl p-6 text-center transition-all duration-500 hover:border-primary/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <item.icon className="h-5 w-5" />
              </div>
              <p className="mt-4 font-display text-3xl font-bold text-primary">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-16">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:left-1/2 md:block md:-translate-x-px" />

            <div className="flex flex-col gap-12">
              {timeline.map((item, i) => (
                <div
                  key={item.period}
                  className={`relative transition-all duration-700 ${
                    isInView ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${0.2 + i * 0.15}s` }}
                >
                  <div
                    className={`flex flex-col gap-4 md:flex-row md:items-start ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div className={`glass rounded-2xl p-6 transition-all duration-500 hover:border-primary/30 md:w-[calc(50%-2rem)] ${
                      i % 2 === 0 ? "md:text-right" : ""
                    }`}>
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {item.period}
                      </span>
                      <h3 className="mt-2 font-display text-xl font-bold text-foreground">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-muted-foreground">
                        {item.company}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                      <div className={`mt-4 flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-md bg-secondary/80 px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden md:flex md:w-16 md:items-start md:justify-center md:pt-6">
                      <div className="h-3 w-3 rounded-full border-2 border-primary bg-background" />
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

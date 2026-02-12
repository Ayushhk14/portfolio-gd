"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Palette, Layers, PenTool, Box } from "lucide-react"

const capabilities = [
  {
    icon: Palette,
    title: "Adobe Photoshop",
    description:
      "Photo editing, digital design, and social media creatives. Designed 200+ promotional materials, ad banners, and marketing assets with pixel-perfect execution.",
  },
  {
    icon: PenTool,
    title: "Adobe Illustrator",
    description:
      "Vector illustration, logo design, and complete brand identity systems. Creating typography, color palettes, and branding assets that define visual identity.",
  },
  {
    icon: Layers,
    title: "Figma",
    description:
      "UI/UX design, wireframes, and interactive prototypes. Designing high-fidelity UI layouts with user-centered principles and responsive design patterns.",
  },
  {
    icon: Box,
    title: "Blender",
    description:
      "Basic 3D modeling, rendering, and visual assets. Developed 3D mockups and product visuals to enhance brand presentations and marketing campaigns.",
  },
]

export function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section
      ref={ref}
      id="about"
      className="relative overflow-hidden px-6 py-28 lg:py-36"
    >
      {/* Background accent */}
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-[150px]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left Column */}
          <div className={`transition-all duration-700 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              About Me
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              <span className="text-balance">
                Designing experiences that leave lasting impressions
              </span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
              I&apos;m a creative designer with 2+ years of professional experience
              at ADRS Techno, specializing in branding, digital marketing, and
              UI/UX design. My work focuses on delivering high-quality visual
              solutions that strengthen brand identity and drive engagement across
              digital platforms.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
              From designing 200+ social media creatives to building complete brand
              identity systems and high-fidelity UI layouts in Figma, I bring
              creative concept development and pixel-perfect execution to every
              project. I collaborate closely with developers and marketing teams to
              ensure visual consistency and brand alignment.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Typography & Color Theory", "Branding & Identity", "Responsive UI Design", "Creative Concept Development"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Capabilities */}
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className={`glass group rounded-2xl p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${
                  isInView ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <cap.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

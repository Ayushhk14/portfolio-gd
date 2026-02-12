"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"
import { ExternalLink } from "lucide-react"

type Category = "All" | "UI Design" | "Branding" | "Social Media" | "3D Visuals"

interface Project {
  title: string
  description: string
  tools: string[]
  outcome: string
  image: string
  category: Category
}

const projects: Project[] = [
  // Mobile & Web UI Design Projects (Figma)
  {
    title: "Mobile & Web UI Design",
    description:
      "Designed high-fidelity UI layouts, wireframes, and interactive prototypes in Figma. Created responsive interfaces with user-centered design principles, including dashboards, mobile apps, and landing pages with consistent visual elements.",
    tools: ["Figma", "UI/UX Design", "Prototyping"],
    outcome: "Delivered pixel-perfect, responsive designs with clear visual hierarchy",
    image: "/images/images.jpeg",
    category: "UI Design",
  },
  // Branding & Logo Design Projects
  {
    title: "Branding & Logo Design",
    description:
      "Created complete brand identity systems including logo design, typography selection, color palette development, and brand guidelines. Designed vector illustrations, packaging concepts, and infographics for consistent brand application.",
    tools: ["Illustrator", "Photoshop"],
    outcome: "Established cohesive visual identities across all brand touchpoints",
    image: "/images/yoonh-thumblogo.jpg",
    category: "Branding",
  },
  // Social Media Campaign Creatives
  {
    title: "Social Media Campaign Creatives",
    description:
      "Designed 200+ social media posts, ad banners, story templates, and promotional materials for Instagram, LinkedIn, and Facebook. Created eye-catching visuals with photo editing, compositing, and poster designs aligned with brand guidelines.",
    tools: ["Photoshop", "Illustrator"],
    outcome: "Maintained brand consistency across all social media platforms",
    image: "/images/6ce380237841019.Y3JvcCwyNzk5LDIxOTAsMCww.jpg",
    category: "Social Media",
  },
  // 3D Visual Experiments (Blender - Basic Level)
  {
    title: "3D Visual Experiments",
    description:
      "Created basic 3D product mockups, visualizations, and rendered visuals using Blender. Developed simple 3D models with basic lighting setups, low-poly graphics, and space visualizations for brand presentations and marketing materials.",
    tools: ["Blender", "Photoshop"],
    outcome: "Added dimensional depth and visual variety to design projects",
    image: "/images/vintage-tech-display-stockcake.jpg",
    category: "3D Visuals",
  },
]

const categories: Category[] = [
  "All",
  "UI Design",
  "Branding",
  "Social Media",
  "3D Visuals",
]

export function ProjectsSection() {
  const [active, setActive] = useState<Category>("All")
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.05 })

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active)

  return (
    <section
      ref={ref}
      id="projects"
      className="relative overflow-hidden px-6 py-28 lg:py-36"
    >
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-primary/5 blur-[150px]" />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className={`text-center transition-all duration-700 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Portfolio
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">Design work from ADRS Techno</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            A collection of UI designs, branding projects, social media creatives, and 3D visual experiments created during my professional experience.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          className={`mt-12 flex flex-wrap items-center justify-center gap-2 transition-all duration-700 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.15s" }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className={`glass group cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.05 * i}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {project.description}
                </p>

                {/* Tools */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-md bg-secondary/80 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Outcome */}
                <p className="mt-3 text-xs font-medium text-primary">
                  {project.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

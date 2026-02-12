"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowDown, Download } from "lucide-react"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = sectionRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20
      el.style.setProperty("--mouse-x", `${x}px`)
      el.style.setProperty("--mouse-y", `${y}px`)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
      id="hero"
    >
      {/* Background Glow Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-primary/5 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Hero 3D Visual */}
      <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 opacity-30 lg:block lg:opacity-40">
        <div
          className="animate-float"
          style={{
            transform: "translate(var(--mouse-x, 0px), var(--mouse-y, 0px))",
            transition: "transform 0.3s ease-out",
          }}
        >
          <Image
            src="/images/hero-3d.jpg"
            alt=""
            width={600}
            height={600}
            className="h-[500px] w-[500px] rounded-full object-cover mix-blend-lighten xl:h-[600px] xl:w-[600px]"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl w-full">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
              Available for freelance work
            </span>
          </div>

          {/* Name & Title */}
          <h1
            className="animate-fade-in-up font-display text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-balance">Ayush</span>
            <br />
            <span className="text-primary">Kachhi</span>
          </h1>

          <p
            className="animate-fade-in-up mt-4 text-lg text-muted-foreground sm:text-xl lg:text-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            Graphic Designer &middot; UI Designer &middot; Visual Creator
          </p>

          <p
            className="animate-fade-in-up mt-6 max-w-xl text-base leading-relaxed text-muted-foreground/80 lg:text-lg"
            style={{ animationDelay: "0.3s" }}
          >
            Creative and detail-oriented Graphic Designer with 2+ years of
            professional experience at ADRS Techno. Skilled in high-quality visual
            designs, branding assets, UI layouts, and digital illustrations using
            Adobe Photoshop, Illustrator, Figma, and Blender.
          </p>

          {/* CTA Buttons */}
          <div
            className="animate-fade-in-up mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-primary/25"
            >
              View Projects
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="mailto:ayushkachhi52@gmail.com"
              className="group flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-secondary"
            >
              <Download className="h-4 w-4" />
              Hire Me
            </a>
          </div>

          {/* Stats */}
          <div
            className="animate-fade-in-up mt-16 flex flex-wrap gap-10 border-t border-border/50 pt-8"
            style={{ animationDelay: "0.5s" }}
          >
            {[
              { value: "2+", label: "Years at ADRS Techno" },
              { value: "200+", label: "Social Media Creatives" },
              { value: "Jabalpur", label: "Based in India" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1s" }}>
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-8 w-5 rounded-full border-2 border-current p-1">
            <div className="mx-auto h-1.5 w-1 animate-bounce rounded-full bg-current" />
          </div>
        </a>
      </div>
    </section>
  )
}

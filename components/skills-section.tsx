"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"

const skills = [
  { name: "Adobe Photoshop", level: 90, label: "Advanced" },
  { name: "Adobe Illustrator", level: 88, label: "Advanced" },
  { name: "Figma", level: 85, label: "Advanced" },
  { name: "Blender", level: 65, label: "Basic" },
  { name: "UI/UX Design", level: 82, label: "Advanced" },
  { name: "Branding & Identity", level: 85, label: "Advanced" },
  { name: "Typography & Color Theory", level: 80, label: "Advanced" },
  { name: "Responsive UI Design", level: 78, label: "Intermediate" },
]

export function SkillsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section
      ref={ref}
      id="skills"
      className="relative overflow-hidden px-6 py-28 lg:py-36"
    >
      <div className="pointer-events-none absolute left-0 bottom-0 h-96 w-96 rounded-full bg-primary/5 blur-[150px]" />

      <div className="mx-auto max-w-7xl">
        <div className={`text-center transition-all duration-700 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Skills & Expertise
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">Tools I master, results I deliver</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground lg:text-lg">
            A refined toolkit built over 2+ years at ADRS Techno, from branding
            and digital design to user-centered UI layouts.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className={`glass group rounded-2xl p-6 transition-all duration-500 hover:border-primary/30 ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.05 * i}s` }}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-base font-semibold text-foreground">
                  {skill.name}
                </h3>
                <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
                  {skill.label}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                  style={{
                    width: isInView ? `${skill.level}%` : "0%",
                    transitionDelay: `${0.2 + i * 0.08}s`,
                  }}
                />
              </div>
              <p className="mt-2 text-right text-xs text-muted-foreground">
                {skill.level}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

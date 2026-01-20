"use client"

import { cn } from "@/lib/utils"
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react"

const education = [
  {
    id: 1,
    degree: "B.Tech in Computer Science and Business Systems",
    institution: "KIT's College of Engineering Kolhapur",
    institutionSubtitle: "Empowered Autonomous",
    location: "Kolhapur, Maharashtra",
    duration: "2022 - 2026",
    expectedGrad: "June 2026",
    cgpa: "7.69",
    coursework: ["Data Structures & Algorithms", "OOP", "OS", "DBMS", "SDLC", "Computer Networking"],
    color: "from-primary/20 to-emerald-500/20",
    highlight: true,
  },
  {
    id: 2,
    degree: "Higher Secondary Education (HSC)",
    institution: "Dr. Kadam Jeevan Vikas Prashala & Jr. College",
    location: "Pune, Maharashtra",
    duration: "2019 - 2021",
    expectedGrad: "June 2021",
    grade: "92.17%",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 3,
    degree: "Secondary Education (SSC)",
    institution: "S.B. Patil Public School",
    location: "Pune, Maharashtra",
    duration: "2018 - 2019",
    expectedGrad: "June 2019",
    grade: "86.40%",
    color: "from-purple-500/20 to-pink-500/20",
  },
]

export function Education() {
  return (
    <section id="education" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 space-y-3 animate-fade-in-up">
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
            Academic Background
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Education</h2>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Academic journey and educational milestones shaping my technical foundation.
          </p>
        </div>

        <div className="space-y-5">
          {education.map((edu, index) => (
            <article
              key={edu.id}
              className={cn(
                "group relative overflow-hidden rounded-xl border bg-card/40 glass p-6 sm:p-8 transition-all duration-400 hover:border-primary/40 hover:bg-card/60 active:scale-[0.99] hover-lift animate-fade-in-up",
                edu.highlight ? "border-primary/30 lg:p-10" : "border-border",
              )}
              style={{ animationDelay: `${index * 150 + 200}ms` }}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                  edu.color,
                )}
              />

              <div className="relative z-10">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  {/* Left side - Main info */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 rounded-lg border border-primary/40 bg-primary/15 p-2.5">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-gradient mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-base font-medium text-foreground mb-1">
                          {edu.institution}
                        </p>
                        {edu.institutionSubtitle && (
                          <p className="text-sm text-muted-foreground italic">
                            {edu.institutionSubtitle}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary/70" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary/70" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>

                    {edu.coursework && (
                      <div className="space-y-2">
                        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                          Relevant Coursework
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course) => (
                            <span
                              key={course}
                              className="rounded-md border border-border/60 bg-secondary/50 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-foreground"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right side - Grade/CGPA */}
                  <div className="flex items-center gap-6 lg:flex-col lg:items-end lg:gap-3">
                    <div className="rounded-xl border border-primary/40 bg-primary/10 px-5 py-4 text-center min-w-[120px]">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="font-mono text-xs uppercase tracking-wider text-primary">
                          {edu.cgpa ? "CGPA" : "Grade"}
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-primary">
                        {edu.cgpa || edu.grade}
                      </p>
                      {edu.cgpa && (
                        <p className="font-mono text-[10px] text-muted-foreground mt-1">
                          out of 10
                        </p>
                      )}
                    </div>
                    {edu.highlight && (
                      <div className="rounded-lg border border-border/60 bg-secondary/50 px-4 py-2 lg:w-full">
                        <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground text-center">
                          Expected
                        </p>
                        <p className="font-mono text-xs text-foreground text-center font-medium">
                          {edu.expectedGrad}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-transparent transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { cn } from "@/lib/utils"
import { Briefcase, MapPin, Calendar, ExternalLink, ChevronRight } from "lucide-react"

interface Experience {
  id: number
  role: string
  company: string
  companyUrl: string
  location: string
  duration: string
  type: string
  description: string
  highlights: string[]
  tech: string[]
  color: string
  barClass: string
  iconColor: string
  current?: boolean
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "AI ML Engineer Intern",
    company: "Dutient",
    companyUrl: "https://www.dutient.ai/",
    location: "Pune, Maharashtra (Remote)",
    duration: "Feb 2026 – Present",
    type: "Internship",
    current: true,
    color: "from-emerald-500/20 to-teal-500/20",
    barClass: "from-emerald-500 to-teal-500",
    iconColor: "text-emerald-400",
    description:
      "Building production AI/ML systems and full-stack SaaS platforms for compliance management and HR automation. Working across the full stack — from RAG pipelines and LLM integrations to Next.js frontends, Docker containerization, and AWS/k3s deployment.",
    highlights: [
      "Architected a two-stage RAG pipeline (AWS Bedrock + pgvector) achieving 98% reduction in LLM API costs via semantic shortlisting and optimized embedding retrieval.",
      "Engineered a high-throughput resume ingestion system with parallel micro-batching, improving processing speed by 3.5x while maintaining rate-limit compliance.",
      "Built an intelligent extraction engine (Node.js + Amazon Nova Micro) with 95% parsing accuracy; implemented vector embeddings (Amazon Titan) for semantic candidate search.",
      "Developed a full-stack HRMS platform (Next.js + Node.js) with employee management, leave tracking, and role-based access control.",
      "Built a DPO Compliance Assistant SaaS (Next.js + shadcn/ui) featuring company profiles, legal entity management, department structures, and control framework modules.",
      "Containerized all services with Docker and deployed via AWS ECR + k3s for scalable, production-ready infrastructure.",
    ],
    tech: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "AWS Bedrock",
      "pgvector",
      "RAG Pipelines",
      "Amazon Nova",
      "Docker",
      "AWS ECR",
      "k3s",
      "shadcn/ui",
      "PostgreSQL",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 space-y-3 animate-fade-in-up">
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
            Professional Journey
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Experience</h2>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Real-world engineering roles where I&apos;ve shipped production systems and solved hard problems.
          </p>
        </div>

        <div className="space-y-5">
          {experiences.map((exp, index) => (
            <article
              key={exp.id}
              className="group relative overflow-hidden rounded-xl border border-border bg-card/40 glass p-6 sm:p-8 transition-all duration-400 hover:border-primary/40 hover:bg-card/60 active:scale-[0.99] hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 150 + 200}ms` }}
            >
              {/* Gradient top-bar accent */}
              <div className={cn("absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r", exp.barClass)} />

              {/* Hover background overlay */}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                  exp.color,
                )}
              />

              <div className="relative z-10">
                {/* Card header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-5">
                  {/* Left: role + company */}
                  <div className="flex items-start gap-3">
                    <div className="mt-1 rounded-lg border border-border/60 bg-card/60 p-2.5">
                      <Briefcase className={cn("h-5 w-5", exp.iconColor)} />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-gradient mb-1">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "text-base font-semibold transition-colors duration-200 hover:underline underline-offset-4",
                            exp.iconColor,
                          )}
                        >
                          {exp.company}
                        </a>
                        <ExternalLink className={cn("h-3.5 w-3.5", exp.iconColor)} />
                        <span className="text-sm text-muted-foreground font-mono">·</span>
                        <span className="text-sm text-muted-foreground font-mono">{exp.type}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: CURRENT badge + duration + location */}
                  <div className="flex flex-row flex-wrap items-center gap-3 sm:flex-col sm:items-end sm:gap-2">
                    {exp.current && (
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 font-mono text-xs text-emerald-400">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        </span>
                        CURRENT
                      </div>
                    )}
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5 text-primary/70" />
                        <span className="font-mono text-xs text-muted-foreground">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-primary/70" />
                        <span className="font-mono text-xs text-muted-foreground">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2.5 mb-6">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <ChevronRight className={cn("mt-0.5 h-4 w-4 shrink-0", exp.iconColor)} />
                      <span className="text-sm text-muted-foreground leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-muted/40 border border-border/30 text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom hover bar */}
              <div
                className={cn(
                  "absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r transition-all duration-500 group-hover:w-full",
                  exp.barClass,
                )}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

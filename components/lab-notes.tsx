"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Palette, Server, Sparkles, Code2, Database, Shield, Wrench, Cpu } from "lucide-react"

const skills = [
  {
    id: 1,
    title: "Frontend & UI",
    icon: Palette,
    skills: ["React 19", "Next.js 16", "Tailwind CSS", "Framer Motion", "shadcn/ui", "Responsive Design"],
    color: "from-purple-500/20 to-violet-500/20",
    iconColor: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    id: 2,
    title: "Backend Architecture",
    icon: Server,
    skills: ["Node.js", "Express.js", "WebSockets", "Microservices", "RESTful APIs"],
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    id: 3,
    title: "Agentic AI & ML",
    icon: Sparkles,
    skills: ["AWS Bedrock", "RAG Pipelines", "Amazon Nova", "Gemini 1.5 Flash", "Vector Embeddings", "Multi-Agent Systems"],
    color: "from-pink-500/20 to-fuchsia-500/20",
    iconColor: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    id: 4,
    title: "Languages",
    icon: Code2,
    skills: ["TypeScript", "JavaScript (ES6+)", "Java", "C++", "Python"],
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    id: 5,
    title: "Database & Cloud",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "pgvector", "DynamoDB", "AWS (EC2, S3, ECR)", "Docker", "k3s / Kubernetes"],
    color: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    id: 6,
    title: "Security & Identity",
    icon: Shield,
    skills: ["JWT Authentication", "OAuth 2.0", "RBAC", "OIDC", "API Security"],
    color: "from-red-500/20 to-rose-500/20",
    iconColor: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    id: 7,
    title: "DevOps & Tools",
    icon: Wrench,
    skills: ["Git", "GitHub Actions", "Docker", "AWS ECR", "k3s", "Vercel", "Postman", "CI/CD Pipelines"],
    color: "from-cyan-500/20 to-sky-500/20",
    iconColor: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    id: 8,
    title: "CS Fundamentals",
    icon: Cpu,
    skills: ["Data Structures", "Algorithms", "System Design", "OOP", "Distributed Systems"],
    color: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
]

export function LabNotes() {
  const [expandedSkill, setExpandedSkill] = useState<number | null>(null)

  return (
    <section id="skills" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 space-y-3 animate-fade-in-up">
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">Technical Expertise</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Technical Arsenal</h2>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Core competencies and technologies I work with to build scalable, production-ready systems.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <article
                key={skill.id}
                className={cn(
                  "group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-card/40 glass p-6 transition-all duration-400 hover:border-primary/40 hover:bg-card/60 active:scale-[0.99] hover-lift animate-fade-in-up",
                  expandedSkill === skill.id && "border-primary/50 bg-card/70",
                )}
                style={{ animationDelay: `${index * 100 + 200}ms` }}
                onClick={() => setExpandedSkill(expandedSkill === skill.id ? null : skill.id)}
              >
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                    skill.color,
                  )}
                />

                <div className="relative z-10">
                  <div className="mb-4 sm:mb-5 flex items-center gap-3">
                    <div className={cn("rounded-lg p-2.5", skill.bgColor)}>
                      <Icon className={cn("h-5 w-5", skill.iconColor)} />
                    </div>
                  </div>

                  <h3 className="mb-3 text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-gradient">
                    {skill.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-border/60 bg-secondary/50 px-2 py-1 font-mono text-[10px] text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-transparent transition-all duration-500 group-hover:w-full" />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

"use client"

import { cn } from "@/lib/utils"
import { Award, CheckCircle2 } from "lucide-react"

const certifications = [
  {
    id: 1,
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Coursera",
    date: "Dec 2024",
    verified: true,
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
  },
  {
    id: 2,
    title: "Full Stack Web Development Cohort – 0–100",
    issuer: "100xDevs",
    date: "May 2024",
    verified: true,
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
  },
  {
    id: 3,
    title: "Cybersecurity Virtual Internship Certificate",
    issuer: "Palo Alto Networks via EduSkills",
    date: "March 2024",
    verified: true,
    color: "from-red-500/20 to-orange-500/20",
    iconColor: "text-red-500",
  },
  {
    id: 4,
    title: "AIML Virtual Internship Certificate",
    issuer: "Google via EduSkills",
    date: "Nov 2023",
    verified: true,
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-500",
  },
]

const hackerRankBadges = [
  {
    id: 1,
    title: "Java (5★ Gold Badge)",
    platform: "HackerRank",
    verified: true,
    badge: "🥇",
  },
  {
    id: 2,
    title: "SQL (Advanced)",
    platform: "HackerRank",
    verified: true,
    badge: "⭐",
  },
  {
    id: 3,
    title: "Problem Solving (3 Stars)",
    platform: "HackerRank",
    verified: true,
    badge: "⚡",
  },
  {
    id: 4,
    title: "Java (Basic)",
    platform: "HackerRank",
    verified: true,
    badge: "✓",
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 space-y-3 animate-fade-in-up">
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
            Credentials
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Certifications</h2>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Professional certifications and verified achievements demonstrating expertise across multiple domains.
          </p>
        </div>

        {/* Professional Certifications */}
        <div className="mb-10 space-y-3">
          <h3 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
            Professional Certifications
          </h3>
          <div className="grid gap-5 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <article
                key={cert.id}
                className="group relative overflow-hidden rounded-xl border border-border bg-card/40 glass p-6 transition-all duration-400 hover:border-primary/40 hover:bg-card/60 active:scale-[0.99] hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                    cert.color,
                  )}
                />

                <div className="relative z-10">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <Award className={cn("h-5 w-5", cert.iconColor)} />
                      {cert.verified && (
                        <div className="flex items-center gap-1 rounded-full border border-primary/40 bg-primary/15 px-2 py-0.5">
                          <CheckCircle2 className="h-3 w-3 text-primary" />
                          <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                            Verified
                          </span>
                        </div>
                      )}
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">{cert.date}</span>
                  </div>

                  <h3 className="mb-2 text-base font-semibold tracking-tight transition-colors duration-300 group-hover:text-gradient">
                    {cert.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-transparent transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>

        {/* HackerRank Badges */}
        <div className="space-y-3">
          <h3 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">HackerRank Badges</h3>
          <div className="rounded-xl border border-border bg-card/40 glass backdrop-blur-sm overflow-hidden hover-lift">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border/30">
              {hackerRankBadges.map((badge, index) => (
                <div
                  key={badge.id}
                  className="group relative p-5 transition-all duration-300 hover:bg-secondary/30 animate-fade-in"
                  style={{ animationDelay: `${index * 100 + 600}ms` }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{badge.badge}</span>
                    {badge.verified && (
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                    )}
                  </div>
                  <h4 className="font-mono text-sm font-medium mb-1 transition-colors group-hover:text-gradient">
                    {badge.title}
                  </h4>
                  <p className="font-mono text-xs text-muted-foreground">{badge.platform}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

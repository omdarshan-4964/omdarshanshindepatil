"use client"

import { useState } from "react"
import { Github, Twitter, Linkedin, Mail, ExternalLink, Heart, Check } from "lucide-react"

const socialLinks = [
  { label: "GitHub", href: "https://github.com/omdarshan-4964", handle: "@omdarshan-4964", icon: Github },
  { label: "Twitter", href: "https://x.com/Omdarshan_jsx", handle: "@Omdarshan_jsx", icon: Twitter },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/omdarshanshindepatil", handle: "/in/omdarshanshindepatil", icon: Linkedin },
  { label: "Email", href: "mailto:omdarshanpatil@gmail.com", handle: "omdarshanpatil@gmail.com", icon: Mail },
]

const EMAIL = "omdarshanpatil@gmail.com"

export function Footer() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      // Fallback: open mailto if clipboard fails
      window.location.href = `mailto:${EMAIL}`
    }
  }
  return (
    <footer id="connect" className="border-t border-border/30 px-4 sm:px-6 py-20 sm:py-28 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-50" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid gap-12 sm:gap-16 lg:grid-cols-2">
          {/* Left column */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">Connect</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
                {"Let's build something "}
                <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text animate-gradient">together</span>
              </h2>
            </div>
            <p className="max-w-md text-base sm:text-lg text-muted-foreground leading-relaxed">
              Always interested in collaborations, interesting problems, and conversations about code, design, and
              everything in between.
            </p>

            <div className="pt-2">
              <button
                onClick={handleCopyEmail}
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl border border-primary bg-primary/10 px-8 py-4 sm:py-4 font-mono text-sm text-primary transition-all duration-500 hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] w-full sm:w-auto"
              >
                <span className="relative z-10">{copied ? "email copied!" : "send a signal"}</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                  {copied ? <Check className="h-4 w-4" /> : "→"}
                </span>
                <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover:translate-x-0" />
              </button>
            </div>
          </div>

          {/* Right column - Links */}
          <div className="space-y-6 lg:text-right animate-fade-in-up stagger-2">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-muted-foreground">
              Find me elsewhere
            </p>
            <div className="space-y-2">
              {socialLinks.map((link, index) => {
                const isEmail = link.label === "Email"
                const Component = isEmail ? "button" : "a"
                const linkProps = isEmail
                  ? { onClick: handleCopyEmail }
                  : {
                      href: link.href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }

                return (
                  <Component
                    key={link.label}
                    {...linkProps}
                    className="group flex items-center justify-between gap-4 rounded-xl border border-transparent p-4 transition-all duration-300 lg:flex-row-reverse active:bg-secondary/30 hover:border-border/50 hover:bg-card/50 hover:shadow-md hover-lift glass animate-fade-in w-full text-left"
                    style={{ animationDelay: `${index * 100 + 400}ms` }}
                  >
                  <div className="flex items-center gap-3 lg:flex-row-reverse">
                    <link.icon className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:scale-110 group-hover:rotate-6" />
                    <span className="font-mono text-sm font-medium transition-colors group-hover:text-gradient">
                      {link.label}
                    </span>
                    {link.label !== "Email" && (
                      <ExternalLink className="h-3 w-3 text-muted-foreground/50 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
                    )}
                  </div>
                  <span className="font-mono text-xs text-muted-foreground truncate group-hover:text-foreground transition-colors">
                    {isEmail && copied ? "copied!" : link.handle}
                  </span>
                  </Component>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 flex flex-col items-center justify-between gap-6 border-t border-border/30 pt-8 sm:pt-10 sm:flex-row animate-fade-in stagger-4">
          <div className="flex items-center gap-2.5 font-mono text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span>Forged with</span>
            <Heart className="h-3.5 w-3.5 text-destructive animate-pulse" />
            <span>& code</span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.slice(0, 3).map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-muted-foreground/50 transition-all duration-300 hover:text-primary hover:scale-110 hover:rotate-12 animate-fade-in"
                style={{ animationDelay: `${index * 100 + 800}ms` }}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <p className="font-mono text-xs text-muted-foreground text-center sm:text-right">
            © {new Date().getFullYear()} Omdarshan Shinde Patil — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

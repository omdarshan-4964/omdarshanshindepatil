import { Code2, Rocket, Target, Zap, Bot, Award, Users, GitBranch } from "lucide-react";

export default function IntroductionPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground">
                Hi, I&apos;m Omdarshan Shinde Patil
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
                Building Systems That{" "}
                <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text">
                  Scale
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-3xl">
              A final-year BTech student specializing in AI-driven architectures and distributed systems. 
              I don&apos;t just write code—I architect solutions that handle real-world scale with 99.9% uptime. 
              From concurrent AI execution engines to real-time collaborative platforms, my projects prove production readiness.
            </p>

            <div className="flex flex-wrap gap-4 font-mono text-sm">
              <div className="flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-primary">Available for Opportunities</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-border bg-card/50 px-4 py-2">
                <span className="text-muted-foreground">Remote • Freelance • Relocation Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded border border-border/50 bg-card/50 p-6 sm:p-10 backdrop-blur-sm space-y-8">
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
                My Journey
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                From Curiosity to Production
              </h2>
            </div>

            <div className="space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
              <p>
                I discovered programming wasn&apos;t just about writing code—it was about solving real problems at scale. 
                While most students were building CRUD apps, I was architecting a <span className="text-foreground font-medium">Fan-Out AI execution engine</span> that 
                triggers multiple AI agents concurrently, and a <span className="text-foreground font-medium">collaborative code editor</span> serving 
                50+ concurrent users with sub-50ms latency.
              </p>

              <p>
                My approach is simple: <span className="text-foreground font-medium">build it, deploy it, measure it, improve it</span>. 
                Every project I&apos;ve shipped has real users, real metrics, and real uptime requirements. From managing 2000+ event bookings 
                with 95% conflict-free scheduling to implementing JWT-based authentication systems with 3-tier RBAC, I focus on building 
                systems that enterprises trust.
              </p>

              <p>
                Currently in my final year at <span className="text-foreground font-medium">KIT&apos;s College of Engineering</span> (7.69 CGPA), 
                I&apos;ve complemented my academics with industry-recognized certifications from Google, 100xDevs, and Palo Alto Networks. 
                But what truly defines me isn&apos;t my resume—it&apos;s the <span className="text-foreground font-medium">6+ production applications</span> maintaining 
                99.9% uptime that speak for themselves.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <div className="rounded-lg border border-border/60 bg-secondary/50 px-4 py-3">
                <p className="font-mono text-2xl font-bold text-primary">6+</p>
                <p className="text-xs text-muted-foreground">Production Apps</p>
              </div>
              <div className="rounded-lg border border-border/60 bg-secondary/50 px-4 py-3">
                <p className="font-mono text-2xl font-bold text-primary">99.9%</p>
                <p className="text-xs text-muted-foreground">Uptime</p>
              </div>
              <div className="rounded-lg border border-border/60 bg-secondary/50 px-4 py-3">
                <p className="font-mono text-2xl font-bold text-primary">1000+</p>
                <p className="text-xs text-muted-foreground">Active Users</p>
              </div>
              <div className="rounded-lg border border-border/60 bg-secondary/50 px-4 py-3">
                <p className="font-mono text-2xl font-bold text-primary">&lt;50ms</p>
                <p className="text-xs text-muted-foreground">Latency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Bring */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 space-y-4 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
              What I Bring to Your Team
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              More Than Just Code
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Bot,
                title: "AI & Automation",
                description:
                  "Building agentic AI systems with RAG pipelines, multi-agent architectures, and concurrent execution engines using Gemini and OpenAI.",
              },
              {
                icon: Zap,
                title: "Performance Engineering",
                description:
                  "Obsessed with sub-50ms latencies, 99.9% uptime, and zero-downtime deployments. Real-time systems with WebSockets and fan-out patterns.",
              },
              {
                icon: GitBranch,
                title: "System Architecture",
                description:
                  "Designing distributed systems, microservices, and scalable APIs. Experience with Docker, PostgreSQL, MongoDB, and cloud deployments.",
              },
              {
                icon: Award,
                title: "Production Mindset",
                description:
                  "Enterprise-grade authentication (JWT, RBAC, OIDC), security best practices, and battle-tested code managing thousands of real users.",
              },
              {
                icon: Rocket,
                title: "Fast Learner",
                description:
                  "Went from zero to building Next.js 16 apps in weeks. Google-certified in Cybersecurity. 100xDevs Full Stack graduate. Always evolving.",
              },
              {
                icon: Users,
                title: "Team Player",
                description:
                  "Clear documentation, clean code, and collaborative mindset. Comfortable with Git workflows, code reviews, and agile methodologies.",
              },
              {
                icon: Target,
                title: "Problem Solver",
                description:
                  "HackerRank 5★ Java Gold Badge, 3★ Problem Solver. CS fundamentals in DSA, algorithms, and system design. Built for complex challenges.",
              },
              {
                icon: Code2,
                title: "Full Stack Versatility",
                description:
                  "React 19, Next.js 16, TypeScript, Node.js, Express, Tailwind, Prisma. Frontend beauty meets backend power in every project I ship.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group rounded border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded border border-primary/30 bg-primary/10 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I'm Looking For */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded border border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 p-6 sm:p-10 backdrop-blur-sm">
            <div className="space-y-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary mb-3">
                  Open to Opportunities
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
                  Let&apos;s Build Something Great Together
                </h2>
              </div>
              
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  I&apos;m actively seeking <span className="text-foreground font-medium">internship opportunities</span> with potential for 
                  conversion to full-time, as well as <span className="text-foreground font-medium">freelance projects</span> where I can make an immediate impact.
                </p>
                
                <p className="text-foreground font-medium">
                  Ideal roles: Full Stack Engineer • AI/ML Engineer • Backend Engineer • System Architect
                </p>
                
                <div className="pt-4 space-y-2 font-mono text-sm">
                  <p className="flex items-center gap-2">
                    <span className="text-primary">→</span>
                    <span>Remote-first or open to relocation anywhere in India</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-primary">→</span>
                    <span>Available to start immediately</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-primary">→</span>
                    <span>Graduating June 2026 (Final Year BTech)</span>
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="mailto:omdarshanpatil@gmail.com"
                  className="inline-flex items-center gap-3 rounded-lg border border-primary bg-primary px-6 py-3 font-mono text-sm text-primary-foreground transition-all duration-300 hover:bg-primary/90 active:scale-[0.98]"
                >
                  <span>Let&apos;s Talk</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

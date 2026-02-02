'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';

export default function PEFACaseStudy() {
  return (
    <main className="min-h-screen py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Navigation */}
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Case Studies
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            PEFA Entertainment: Building a Movie Streaming Platform from ground up
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            How we built and shipped a digital entertainment platform that serves video content reliably across devices, handled infrastructure challenges, and delivered a production-ready product under tight timelines.
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>2024 </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-sm bg-primary/10 border border-primary/20 rounded-full text-primary">
              Next.js
            </span>
            <span className="px-3 py-1 text-sm bg-primary/10 border border-primary/20 rounded-full text-primary">
              React
            </span>
            <span className="px-3 py-1 text-sm bg-primary/10 border border-primary/20 rounded-full text-primary">
              DevOps
            </span>
            <span className="px-3 py-1 text-sm bg-primary/10 border border-primary/20 rounded-full text-primary">
              AWS/Cloud Infrastructure
            </span>
            <span className="px-3 py-1 text-sm bg-primary/10 border border-primary/20 rounded-full text-primary">
              CI/CD
            </span>
          </div>
        </motion.div>

        {/* Case Study Content */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-16"
        >
          {/* Section 1: Context & Problem */}
          <section>
            <h2 className="text-3xl font-bold mb-6">The Problem</h2>

            <p className="text-lg text-muted-foreground mb-6">
              PEFA Entertainment needed a modern digital platform to deliver video content to users across web and mobile devices. The company had content ready to distribute but lacked the technical infrastructure to do so reliably at scale.
            </p>

            <p className="text-lg text-muted-foreground mb-6">
              The core challenge was building a platform that could:
            </p>

            <ul className="space-y-3 text-lg text-muted-foreground mb-8 ml-6">
              <li>• Handle concurrent users without performance degradation</li>
              <li>• Deliver fast load times across different network conditions</li>
              <li>• Work seamlessly on both desktop and mobile browsers</li>
              <li>• Support video streaming with minimal buffering</li>
              <li>• Be maintainable and scalable for future features</li>
            </ul>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Initial Requirements</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <span className="font-medium text-foreground">Timeline:</span> 3 months to production launch</li>
                <li>• <span className="font-medium text-foreground">Target:</span> Support 500 concurrent users</li>
                <li>• <span className="font-medium text-foreground">Performance:</span> Page load under 3 seconds on 3G</li>
                <li>• <span className="font-medium text-foreground">Devices:</span> Desktop, mobile web, responsive design</li>
              </ul>
            </div>
          </section>

          {/* Section 2: Constraints & Approach */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Constraints & Approach</h2>

            <p className="text-lg text-muted-foreground mb-6">
              I owned the complete technical execution—frontend development, DevOps setup, quality assurance, and deployment pipeline. This meant making architectural decisions that balanced immediate delivery needs with long-term maintainability.
            </p>

            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-3">Key Constraints</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Small team with aggressive timeline</li>
                <li>• Limited infrastructure budget initially</li>
                <li>• Need for rapid iteration based on early user feedback</li>
                <li>• No existing DevOps or deployment pipeline</li>
              </ul>
            </div>

            <p className="text-lg text-muted-foreground">
              The approach: Build a solid foundation first, then iterate on features. Prioritize performance and reliability over feature breadth in the initial release.
            </p>
          </section>

          {/* Section 3: Technical Decisions */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Technical Decisions</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">1. Technology Stack</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Chose <span className="text-foreground font-medium">Next.js with React</span> for the frontend. This decision gave us:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
                  <li>• Server-side rendering for fast initial page loads</li>
                  <li>• Built-in image optimization for bandwidth efficiency</li>
                  <li>• File-based routing for easier navigation structure</li>
                  <li>• Strong TypeScript support for fewer runtime errors</li>
                </ul>
                <p className="text-lg text-muted-foreground">
                  The tradeoff: Next.js added complexity compared to pure React, but the performance benefits and developer experience were worth it for a content-heavy platform.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">2. Infrastructure & Deployment</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Set up automated deployment pipeline using modern DevOps practices:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
                  <li>• GitHub Actions for CI/CD automation</li>
                  <li>• Staging and production environments for safe releases</li>
                  <li>• Automated testing before each deployment</li>
                  <li>• CDN integration for static asset delivery</li>
                </ul>
                <p className="text-lg text-muted-foreground">
                  This infrastructure work upfront paid dividends—we could ship updates multiple times per week without manual intervention or downtime.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">3. Video Delivery Strategy</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Implemented adaptive bitrate streaming to handle varying network conditions:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li>• HLS (HTTP Live Streaming) protocol for broad device support</li>
                  <li>• CDN caching to reduce origin server load</li>
                  <li>• Lazy loading for video thumbnails and metadata</li>
                  <li>• Progressive loading states to manage user expectations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Key Tradeoffs */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Key Tradeoffs</h2>

            <p className="text-lg text-muted-foreground mb-6">
              Every product decision involves tradeoffs. Here are the most significant ones:
            </p>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Feature Scope for V1</h3>
                <p className="text-muted-foreground mb-3">
                  <span className="font-medium text-foreground">Decision:</span> Ship with core playback and browsing features only. Postponed user accounts, favorites, and social features.
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Reasoning:</span> Better to launch with excellent core experience than ship buggy advanced features. We could validate user interest before investing in complex account systems.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Rendering Strategy</h3>
                <p className="text-muted-foreground mb-3">
                  <span className="font-medium text-foreground">Decision:</span> Use static generation for content pages, server-side rendering for dynamic sections.
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Reasoning:</span> Static pages gave us blazing fast load times and reduced server costs. Accepted slightly longer build times as a tradeoff for better user experience.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Mobile Approach</h3>
                <p className="text-muted-foreground mb-3">
                  <span className="font-medium text-foreground">Decision:</span> Build responsive web app instead of native mobile apps.
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Reasoning:</span> Single codebase meant faster iteration and easier maintenance. Modern web APIs provided most native app features we needed. Could always build native later if data showed the need.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Implementation & Iteration */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Implementation & Iteration</h2>

            <p className="text-lg text-muted-foreground mb-6">
              The build process followed an iterative approach with regular feedback loops:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Phase 1: Foundation (Weeks 1-6)</h3>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li>• Set up project structure and development environment</li>
                  <li>• Built core video player component</li>
                  <li>• Established deployment pipeline and staging environment</li>
                  <li>• Created responsive layout system</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Phase 2: Core Features (Weeks 7-12)</h3>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li>• Implemented content browsing and search</li>
                  <li>• Integrated CDN for video delivery</li>
                  <li>• Built automated testing suite</li>
                  <li>• Performance optimization for mobile devices</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Phase 3: Polish & Launch (Weeks 13-16)</h3>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li>• Load testing and performance tuning</li>
                  <li>• Cross-browser compatibility testing</li>
                  <li>• Monitoring and analytics setup</li>
                  <li>• Soft launch with limited audience, then full release</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6: Results & Impact */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-primary">Quantitative Outcomes</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>✓ Launched on schedule (16 weeks)</li>
                  <li>✓ Page load time: 1.8s average (target was 3s)</li>
                  <li>✓ Successfully handled 8,000+ concurrent users</li>
                  <li>✓ 95% reduction in video buffering complaints</li>
                  <li>✓ Mobile performance score: 88/100 (Lighthouse)</li>
                  <li>✓ Zero critical production bugs in first month</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Qualitative Wins</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• Positive user feedback on interface simplicity</li>
                  <li>• Deployment process reduced from hours to minutes</li>
                  <li>• Team could ship updates confidently</li>
                  <li>• Foundation enabled rapid feature development post-launch</li>
                  <li>• Low maintenance burden allowed focus on new features</li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-muted-foreground">
              The platform became stable enough that we could shift focus from "making it work" to "making it better"—adding features users actually requested rather than fixing fundamental issues.
            </p>
          </section>

          {/* Section 7: Lessons Learned */}
          <section>
            <h2 className="text-3xl font-bold mb-6">What I Learned</h2>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">1. Infrastructure Investment Pays Off</h3>
                <p className="text-muted-foreground">
                  Spending the first two weeks on deployment automation felt slow at the time, but it saved countless hours later. Every feature shipped faster because the deployment pipeline was solid.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">2. Performance Budget is Critical</h3>
                <p className="text-muted-foreground">
                  Setting clear performance targets early (e.g., "page load under 3 seconds") prevented feature creep from degrading UX. Every feature was evaluated against this budget.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">3. Testing Catches Issues Before Users Do</h3>
                <p className="text-muted-foreground">
                  Automated testing for critical user flows (play video, browse content) caught regressions that would have been embarrassing in production. The time invested in tests was worth it.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">4. Scope Discipline Enables Quality</h3>
                <p className="text-muted-foreground">
                  Saying "no" to features in v1 was hard but necessary. We shipped a polished core experience instead of a buggy feature-rich mess. Users appreciated reliability over bells and whistles.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: What I'd Do Differently */}
          <section>
            <h2 className="text-3xl font-bold mb-6">What I'd Do Differently</h2>

            <p className="text-lg text-muted-foreground mb-6">
              No project is perfect. Here's what I'd change with hindsight:
            </p>

            <ul className="space-y-4 text-lg text-muted-foreground ml-6">
              <li>
                <span className="font-medium text-foreground">Earlier load testing:</span> We discovered some performance bottlenecks late in the cycle. Load testing earlier would have caught these when they were easier to fix.
              </li>
              <li>
                <span className="font-medium text-foreground">More user testing:</span> We did some user testing but could have done more. A few UX issues surfaced after launch that testing would have revealed.
              </li>
              <li>
                <span className="font-medium text-foreground">Better monitoring from day one:</span> We added comprehensive monitoring after launch. Having it from the start would have given us better data during development.
              </li>
            </ul>
          </section>

          {/* Section 9: Next Steps */}
          <section>
            <h2 className="text-3xl font-bold mb-6">What's Next</h2>

            <p className="text-lg text-muted-foreground mb-6">
              Post-launch, we're focused on data-driven improvements:
            </p>

            <ul className="space-y-3 text-lg text-muted-foreground ml-6 mb-6">
              <li>• Adding user accounts and personalized recommendations (most requested feature)</li>
              <li>• Improving mobile video controls based on user feedback</li>
              <li>• A/B testing different content discovery patterns</li>
              <li>• Expanding platform to support live streaming</li>
            </ul>

            <p className="text-lg text-muted-foreground">
              The foundation we built allows us to move quickly on these features without worrying about the platform falling over. That's the value of doing the hard infrastructure work upfront.
            </p>
          </section>

          {/* Key Takeaway */}
          <section className="bg-primary/5 border border-primary/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Key Takeaway</h2>
            <p className="text-lg text-muted-foreground">
              Building a platform isn't just about writing code—it's about making decisions under constraints, balancing short-term delivery with long-term maintainability, and creating systems that enable future iteration. PEFA Entertainment shipped on time because we focused ruthlessly on what mattered: a stable, fast, reliable platform that solved the core user need.
            </p>
          </section>
        </motion.article>

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all case studies
          </Link>
        </div>
      </div>
    </main>
  );
}

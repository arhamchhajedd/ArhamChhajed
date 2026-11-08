import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions governing the use of Arham Chhajed's software development, IT solutions, and vibe coding mentorship services.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms & Conditions | Arham Chhajed",
    description: "Terms and conditions governing the use of Arham Chhajed's software development, IT solutions, and vibe coding mentorship services.",
    url: "/terms",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Arham Chhajed",
    description: "Terms and conditions governing the use of Arham Chhajed's software development, IT solutions, and vibe coding mentorship services.",
  },
};

const sections = [
  {
    title: "1. Introduction",
    content:
      "These Terms and Conditions govern the relationship between Arham Chhajed (hereinafter referred to as \"Arham,\" \"I,\" \"me,\" or \"my\") and the client (hereinafter referred to as \"you,\" \"your,\" or \"client\") engaging my web development, design, and digital services. By hiring Arham Chhajed or using any of my services, you acknowledge that you have read, understood, and agree to be bound by these terms in their entirety. If you do not agree with any part of these terms, please refrain from engaging my services.",
  },
  {
    title: "2. Scope of Services",
    content:
      "I specialize in landing page development, multi-page websites, portfolio websites, SaaS websites, MVP development, website redesign, Shopify store setup, custom e-commerce development, error solving and bug fixing, and ongoing maintenance and support. The specific scope, deliverables, features, and timeline for each project will be mutually agreed upon and documented in a project proposal or written agreement before any work commences. Any services not explicitly mentioned in the agreed proposal are outside the scope and may require a separate engagement.",
  },
  {
    title: "3. Project Proposals and Agreements",
    content:
      "Before the commencement of any project, I will provide a detailed proposal outlining the project scope, estimated timeline, cost breakdown, number of revision rounds, and deliverables. The project will only begin once the client has reviewed and approved the proposal in writing (including approval via email or WhatsApp). Any verbal agreements not documented in writing shall not be considered binding on either party.",
  },
  {
    title: "4. Payment Terms",
    content:
      "All projects require a minimum advance payment of 50% of the total project cost before work begins. The remaining 50% is due upon completion of the project, prior to the handover of final files, source code, and deployment access. For larger projects, payments may be structured into milestones as agreed in the proposal. All payments are to be made in Indian Rupees (INR) via UPI, bank transfer, or any other method mutually agreed upon. Invoices will be issued for every payment. Failure to make timely payments may result in project suspension until outstanding amounts are cleared.",
  },
  {
    title: "5. Project Timeline and Delivery",
    content:
      "I am committed to delivering projects within the estimated timeline provided in the proposal. However, timelines are estimates and not guaranteed deadlines. Delays caused by late client feedback, delayed content or asset submission, additional revision requests beyond the agreed scope, or force majeure events are not my responsibility. I will communicate proactively about any anticipated delays and work collaboratively to minimize impact on the project schedule.",
  },
  {
    title: "6. Client Responsibilities",
    content:
      "The client is responsible for providing all necessary content, including text, images, logos, branding guidelines, login credentials, and any other materials required for the project, in a timely manner. The client must designate a single point of contact for all project communications to ensure clarity and efficiency. Delays in providing required materials or feedback will directly impact the project timeline, and I shall not be held responsible for such delays.",
  },
  {
    title: "7. Revisions and Change Requests",
    content:
      "Each project includes a predefined number of revision rounds as specified in the proposal (typically two to three rounds). Revisions refer to minor adjustments and tweaks within the approved design direction. Requests that involve a complete change in design direction, addition of new pages or features, structural changes to the website architecture, or changes to approved wireframes or mockups are classified as change requests and will be quoted separately. All change requests must be submitted in writing for clarity and documentation.",
  },
  {
    title: "8. Intellectual Property Rights",
    content:
      "Upon receipt of full and final payment, the client receives complete ownership of all custom design files, source code, and digital assets specifically created for the project. I retain the right to showcase the completed project in my portfolio, case studies, social media, and marketing materials unless the client explicitly requests otherwise in writing prior to project commencement. Third-party assets such as stock images, fonts, plugins, or frameworks used in the project remain subject to their respective licenses and are not transferred to the client as proprietary assets.",
  },
  {
    title: "9. Hosting, Domains, and Third-Party Services",
    content:
      "I do not provide web hosting or domain registration services unless explicitly included in the project proposal. The client is responsible for purchasing and maintaining their own hosting, domain names, and any third-party subscriptions or services (such as email marketing tools, analytics platforms, or payment gateways) required for the project. I can recommend reliable hosting providers and assist with initial setup, but ongoing management of these services remains the client's responsibility.",
  },
  {
    title: "10. Confidentiality",
    content:
      "Both parties agree to maintain strict confidentiality regarding all proprietary information, business strategies, technical specifications, and sensitive data shared during the course of the engagement. This includes but is not limited to login credentials, business plans, customer data, and financial information. This confidentiality obligation shall survive the completion or termination of any project and shall remain in effect indefinitely. Neither party shall disclose confidential information to any third party without prior written consent.",
  },
  {
    title: "11. Cancellation and Refund Policy",
    content:
      "If the client decides to cancel the project after work has commenced, the advance payment is non-refundable as it covers the time, effort, and resources already invested. If more than 50% of the project has been completed at the time of cancellation, the client will be billed for the additional work completed beyond the advance payment at my standard rates. If I cancel the project due to internal reasons, all payments received will be refunded in full within 15 business days. Refund requests must be submitted in writing via email.",
  },
  {
    title: "12. Warranties and Disclaimers",
    content:
      "I warrant that all deliverables will be of professional quality and substantially conform to the specifications agreed upon in the project proposal. I provide a 30-day post-delivery warranty period during which I will fix any bugs, broken links, or functional issues in the delivered product at no additional cost. However, I do not guarantee specific business outcomes such as increased traffic, sales, or search engine rankings, as these depend on factors beyond my control. All services are provided on an \"as is\" basis after the warranty period.",
  },
  {
    title: "13. Limitation of Liability",
    content:
      "To the maximum extent permitted by applicable law, Arham Chhajed shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to the use of my services or deliverables. This includes but is not limited to loss of revenue, loss of data, business interruption, or loss of profits. My total cumulative liability for any claim arising from or related to a specific project shall not exceed the total amount paid by the client for that particular project.",
  },
  {
    title: "14. Indemnification",
    content:
      "The client agrees to indemnify, defend, and hold harmless Arham Chhajed from any claims, damages, losses, liabilities, costs, and expenses (including legal fees) arising from or related to the client's use of the deliverables, any content provided by the client, violation of any third-party rights, or breach of these terms and conditions.",
  },
  {
    title: "15. Force Majeure",
    content:
      "Neither party shall be held liable for any delay or failure to perform obligations under these terms caused by circumstances beyond their reasonable control. This includes natural disasters, pandemics, government actions, internet outages, power failures, cyberattacks, or any other events that could not have been reasonably anticipated or prevented. The affected party shall notify the other party promptly and make reasonable efforts to mitigate the impact.",
  },
  {
    title: "16. Governing Law and Dispute Resolution",
    content:
      "These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from or related to these terms or our services shall first be attempted to be resolved through good-faith negotiation between the parties. If a resolution cannot be reached within 30 days, the dispute shall be subject to the exclusive jurisdiction of the courts located in Maharashtra, India.",
  },
  {
    title: "17. Modifications to These Terms",
    content:
      "I reserve the right to update, modify, or replace these Terms and Conditions at any time. Any changes will be posted on this page with an updated effective date. It is the client's responsibility to review these terms periodically. Continued engagement of my services after any modifications constitutes acceptance of the updated terms. For ongoing projects, the terms in effect at the time of the project proposal shall apply unless both parties agree otherwise in writing.",
  },
  {
    title: "18. Contact Information",
    content:
      "For any questions, concerns, or clarifications regarding these Terms and Conditions, please reach out to me via email at arham@undesk.in or through the contact form available on my website. I aim to respond to all inquiries within 24 to 48 business hours.",
  },
];

export default function TermsPage() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        <div className="w-full max-w-[1400px] px-4 mx-auto pt-8 md:pt-12">
          <Link href="/" className="inline-flex items-center gap-2 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white font-mono text-sm uppercase tracking-widest transition-colors duration-300 group">
            <span className="w-8 h-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center transition-colors group-hover:border-red-500">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </span>
            Back to Home
          </Link>
        </div>

        <div className="pt-8 md:pt-16 pb-16 md:pb-24">
          <Reveal>
            <section className="w-full bg-zinc-50 dark:bg-black py-16 md:py-24 transition-colors duration-300">
              <div className="w-full max-w-[1400px] px-4 mx-auto">
                {/* Header */}
                <div className="flex justify-between items-end mb-16 relative">
                  <div className="relative inline-block">
                    <h1
                      className="text-4xl min-[380px]:text-5xl sm:text-6xl md:text-[6vw] leading-none font-bold text-black dark:text-white uppercase tracking-tight m-0 transition-colors duration-300"
                      style={{ fontFamily: "var(--font-bebas-neue)" }}
                    >
                      Terms &<br />Conditions
                    </h1>
                  </div>
                  <div className="hidden md:block text-black/50 dark:text-white/50 font-mono text-xl uppercase tracking-widest transition-colors duration-300">
                    LEGAL
                  </div>
                </div>

                <p className="text-black/50 dark:text-white/50 font-mono text-xs uppercase tracking-widest mb-12 transition-colors duration-300">
                  Effective Date: April 2026
                </p>

                {/* Content */}
                <div className="border-t border-black/10 dark:border-white/20 transition-colors duration-300">
                  {sections.map((section, index) => (
                    <div
                      key={index}
                      className="py-8 border-b border-black/10 dark:border-white/20 transition-colors duration-300"
                    >
                      <h2
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white uppercase tracking-tight mb-4 transition-colors duration-300"
                        style={{ fontFamily: "var(--font-bebas-neue)" }}
                      >
                        {section.title}
                      </h2>
                      <p className="text-black/70 dark:text-white/70 text-sm md:text-base leading-relaxed max-w-3xl transition-colors duration-300">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <Footer />
        </Reveal>
      </main>
    </PageTransition>
  );
}

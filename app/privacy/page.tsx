import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Privacy Policy | WorkRed Studio",
  description: "Privacy policy of WorkRed Studio explaining how we collect, use, store, and protect your personal information.",
};

const sections = [
  {
    title: "1. Introduction",
    content:
      "WorkRed Studio (\"WorkRed,\" \"we,\" \"us,\" or \"our\") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, store, share, and safeguard your data when you visit our website, engage our services, or communicate with us through any channel including WhatsApp, email, or our contact form. By using our website or engaging our services, you consent to the practices described in this policy.",
  },
  {
    title: "2. Information We Collect",
    content:
      "We collect information that you voluntarily provide to us when you reach out for a project inquiry, fill out our contact form, or communicate with us via WhatsApp or email. This includes your full name, email address, phone number, business or organization name, project requirements and descriptions, budget and timeline preferences, and any files or assets you share with us. Additionally, we automatically collect certain technical information when you visit our website, including your IP address, browser type and version, device type, operating system, pages visited and time spent on each page, referring website URL, and approximate geographic location based on IP address.",
  },
  {
    title: "3. How We Use Your Information",
    content:
      "We use the information we collect for the following purposes: to respond to your inquiries and provide project estimates; to deliver, manage, and improve our web development and design services; to communicate project updates, milestones, and deliverables; to send invoices and process payments; to analyze website traffic and user behavior to improve our website experience; to maintain records of client interactions and project history for quality assurance; to comply with applicable legal obligations and resolve disputes; and to showcase completed projects in our portfolio (with client consent or as per agreed terms). We do not use your personal information for unsolicited marketing or promotional campaigns unless you have explicitly opted in to receive such communications.",
  },
  {
    title: "4. Legal Basis for Processing",
    content:
      "We process your personal information based on the following legal grounds: contractual necessity, where processing is required to fulfill our obligations under a project agreement; legitimate interest, where processing is necessary for our legitimate business interests such as improving our services and protecting our rights; consent, where you have given clear consent for us to process your personal information for a specific purpose; and legal obligation, where processing is necessary to comply with applicable laws and regulations.",
  },
  {
    title: "5. Cookies and Tracking Technologies",
    content:
      "Our website may use cookies, web beacons, and similar tracking technologies to enhance your browsing experience and collect analytical data. Cookies are small text files stored on your device that help us recognize returning visitors, understand browsing patterns, and improve site functionality. We use essential cookies that are necessary for the website to function properly and cannot be disabled; analytics cookies that help us understand how visitors interact with our website through services such as Google Analytics; and preference cookies that remember your settings and choices such as theme preferences. You can manage or disable cookies through your browser settings at any time. Please note that disabling certain cookies may affect your experience on our website.",
  },
  {
    title: "6. Data Sharing and Third Parties",
    content:
      "We do not sell, rent, or trade your personal information to any third party for marketing or commercial purposes. We may share your information only in the following limited circumstances: with trusted service providers and tools that assist us in operating our business, such as hosting providers, analytics services, payment processors, and communication platforms; with professional advisors such as accountants or legal counsel when necessary; when required to comply with a legal obligation, court order, or governmental request; and to protect the rights, property, or safety of WorkRed Studio, our clients, or the public. All third-party service providers we work with are contractually required to handle your data responsibly and in accordance with applicable privacy laws.",
  },
  {
    title: "7. Data Security",
    content:
      "We take the security of your personal information seriously and implement appropriate technical and organizational measures to protect it against unauthorized access, alteration, disclosure, or destruction. These measures include the use of encrypted communication channels for sensitive data exchange, secure storage of client files and project assets, restricted access to personal information on a need-to-know basis, and regular review of our security practices and procedures. Despite our best efforts, no method of data transmission over the internet or electronic storage is completely secure. We cannot guarantee absolute security but are committed to taking all reasonable precautions to safeguard your data.",
  },
  {
    title: "8. Data Retention",
    content:
      "We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements. Specifically, project-related data and communications are retained for the duration of the client relationship and for a period of three years following project completion for reference and support purposes. Contact form submissions and inquiry data are retained for up to one year if no project engagement results. Financial records and invoices are retained as required by applicable tax and accounting laws. Upon expiration of the retention period, your personal information will be securely deleted or anonymized.",
  },
  {
    title: "9. Your Rights",
    content:
      "Depending on your jurisdiction, you may have certain rights regarding your personal information. These rights may include the right to access and obtain a copy of the personal information we hold about you; the right to rectification, allowing you to request correction of any inaccurate or incomplete information; the right to erasure, allowing you to request deletion of your personal information where there is no compelling reason for continued processing; the right to restrict processing under certain circumstances; the right to data portability, allowing you to receive your data in a structured, commonly used format; and the right to object to certain types of processing. To exercise any of these rights, please contact us using the details provided at the end of this policy. We will respond to your request within 30 days.",
  },
  {
    title: "10. Third-Party Links",
    content:
      "Our website may contain links to third-party websites, platforms, and services, including but not limited to social media profiles, payment gateways, hosting providers, and client project websites. These third-party sites operate independently and have their own privacy policies and terms of service. WorkRed Studio is not responsible for the privacy practices, content, or security of any third-party websites. We strongly encourage you to review the privacy policies of any external sites before providing them with your personal information.",
  },
  {
    title: "11. Children's Privacy",
    content:
      "Our services are intended for businesses, professionals, and individuals who are at least 18 years of age. We do not knowingly collect, use, or store personal information from individuals under the age of 18. If we become aware that we have inadvertently collected personal data from a minor, we will take prompt steps to delete such information from our records. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.",
  },
  {
    title: "12. International Data Considerations",
    content:
      "WorkRed Studio is based in India and primarily serves clients within India and internationally. If you are accessing our website or engaging our services from outside India, please be aware that your information may be transferred to, stored, and processed in India. By using our services, you consent to the transfer of your information to India and acknowledge that data protection laws in India may differ from those in your jurisdiction.",
  },
  {
    title: "13. Changes to This Privacy Policy",
    content:
      "We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we collect, use, and protect your information. For material changes that significantly affect how we handle your personal data, we will make reasonable efforts to notify affected clients directly.",
  },
  {
    title: "14. Contact Us",
    content:
      "If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please contact us via WhatsApp at +91 7410030558 or through the contact form on our website at workred.studio. You may also reach out to us via email for formal privacy-related requests. We aim to acknowledge all inquiries within 24 hours and provide a substantive response within 7 business days.",
  },
];

export default function PrivacyPage() {
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
                      className="text-[10vw] sm:text-[8vw] md:text-[6vw] leading-none font-bold text-black dark:text-white uppercase tracking-tight m-0 transition-colors duration-300"
                      style={{ fontFamily: "var(--font-bebas-neue)" }}
                    >
                      Privacy<br />Policy
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

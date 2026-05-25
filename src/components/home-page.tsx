"use client";

import Image from "next/image";
import { AuthorSubmissionForm } from "@/components/author-submission-form";
import { motion } from "framer-motion";
import { type ReactNode, useState } from "react";
import { Accessibility, ArrowRight, BookOpen, Edit3, Mail, MapPin, Megaphone, MessageCircle, Phone, Quote, Sparkles, UsersRound } from "lucide-react";

const fade = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };
const wa = "https://wa.me/919363687259?text=Vanakkam%20Meiporul%20Publications%2C%20I%20want%20to%20publish%20my%20book";
const kindleLink = "https://www.amazon.com/dp/B0GZHHBZ4R";
const logoImage = "/images/logo/Meiporul%20Logo%20with%20TM.jpg";
const siteBackgroundImage = "/images/Untitled%20design.jpg";
const authorSubmissionImage = "/images/ChatGPT%20Image%20May%2018%2C%202026%2C%2003_42_14%20PM.png";
const featuredBookCover = "/images/book_cover/Meiporul%20book%20front.jpg";
const whyItMattersImage = "/images/why-it-matters/Meiporul%20flex%20%2848%20x%2048%20in-%20left%20%26%20right%29.png";
const kumudhamPdf = "/kumudam_pdf/Kumudham%20Book%20review.pdf";
const vikatanLink = "https://www.vikatan.com/features/human-stories/visually-challenged-persons-motivational-story";
const vikatanImages = [
  "/images/Vikatan/31881019-f4ce-4ead-974d-19a17a18156b.jpeg",
  "/images/Vikatan/4191e5d2-8fea-40f3-8950-49dfc11a6b79.jpeg",
  "/images/Vikatan/d91eca83-8f67-487a-b90c-c0e54f2de26c.jpeg"
];
const galleryItems = [
  { src: "/images/gallery/books_gathering/572A2375.JPG", caption: "Book gathering and launch atmosphere" },
  { src: "/images/gallery/books_gathering/572A2522.JPG", caption: "Community members celebrating published voices" },
  { src: "/images/gallery/books_gathering/572A2584.JPG", caption: "A premium moment from the publication event" },
  { src: "/images/gallery/books_gathering/DSC_6433.JPG", caption: "Readers, guests, and stories coming together" },
  { src: "/images/gallery/books_gathering/DSC_6667.JPG", caption: "An authentic gathering around books and impact" },
  { src: "/images/gallery/books_gathering/_MG_5917.JPG", caption: "Meiporul event photography from a live publishing moment" }
];

const authorGalleryItems = [
  { name: "Mu Murugesh", src: "/images/Authors/Mu_murugesh.jpeg" },
  { name: "Rishikesh", src: "/images/Authors/Rishikesh.jpeg" },
  { name: "Shalini Priyadharshini", src: "/images/Authors/Shalini_priyadharshini.PNG" },
  { name: "Suhana", src: "/images/Authors/Suhana.jpeg" },
  { name: "Ja Rajagopalan", src: "/images/Authors/Ja Rajagopalan.jpeg" },
  { name: "Aadhimoolakrishnan", src: "/images/Authors/Aadhimolakrishnan.jpeg" },
  { name: "Yathiri Karthick", src: "/images/Authors/Yathiri karthick.jpeg" },
  { name: "Damayanthi", src: "/images/Authors/Damayanthi.png" },
  { name: "Kutty Revathi", src: "/images/Authors/kutty_revathi.jpeg" },
  { name: "Senthil Jeganathan", src: "/images/Authors/senthil_jeganathan.jpeg" }
];

const founders = [
  { name: "Ms. Gomathi Perumal", designation: "Founder Trustee", src: "/images/founder/gomathi.png", position: "center 18%" },
  { name: "Mr. Thiyagrajan Nagaraj", designation: "Co-Founder Trustee", src: "/images/founder/thyagu.png", position: "center 18%" }
];

const coordinators = [
  { name: "Abinaya S", designation: "Coordinator", src: "/images/Coordinators/Abinaya%20S.png", position: "center 15%" },
  { name: "Abinaya A", designation: "Coordinator", src: "/images/Coordinators/Abinaya%20A.jpeg", position: "center 18%" }
];

const services = [
  { icon: BookOpen, title: "Book Publishing Support", tag: "From idea to ISBN-ready book", text: "Structured guidance for manuscripts, production, and release planning." },
  { icon: Accessibility, title: "Inclusive Publishing", tag: "Braille-first accessibility", text: "Braille and accessible formats for readers who are often excluded." },
  { icon: Edit3, title: "Content & Editing Guidance", tag: "Professional editorial care", text: "Developmental feedback, language polish, and author mentoring." },
  { icon: Megaphone, title: "Launch & Promotion", tag: "Give the book a stage", text: "Launch events, press-ready storytelling, and community amplification." }
];

export function HomePage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main-content" className="overflow-hidden text-forest" style={{ backgroundImage: `linear-gradient(rgba(249,246,239,.92), rgba(249,246,239,.95)), url("${siteBackgroundImage}")`, backgroundSize: "cover", backgroundPosition: "center top", backgroundRepeat: "no-repeat" }}>
      <Hero />
      <TrustStrip />
      <About />
      <WhatWeDo />
      <FeaturedWork />
      <WhyItMatters />
      <FeaturedIn />
      <CallForAuthors />
      <section id="submission" className="px-5 py-24 md:px-10"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr]"><SectionKicker eyebrow="Author submission" title="Start your publishing journey" text="A guided, accessible form that helps our editorial team understand your story, needs, and publishing readiness." /><AuthorSubmissionForm /></div></section>
      <AccessibilitySupport />
      <Testimonials />
      <Gallery />
      <Team />
      <Contact />
      <Footer />
      <a href={wa} aria-label="Chat with Meiporul Publications on WhatsApp" className="focus-ring fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-obsidian shadow-premium"><MessageCircle size={18} aria-hidden="true" /> WhatsApp</a>
      </main>
    </>
  );
}

// function Nav() {
//   const links = ["About", "Work", "Authors", "Accessibility", "Contact"];
//   return <header className="fixed inset-x-0 top-0 z-40 border-b border-emeraldDeep/10 bg-[#f9f6ef]/92 shadow-sm backdrop-blur-xl"><nav aria-label="Primary navigation" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4"><a href="#hero" aria-label="Meiporul Publications home" className="flex items-center gap-4"><span className="focus-ring overflow-hidden rounded-full border-2 border-antiqueGold/55 bg-white p-1.5 shadow-premium"><Image src={logoImage} alt="Meiporul Publications logo" width={60} height={60} className="h-14 w-14 rounded-full object-contain md:h-16 md:w-16" priority /></span><span className="font-sans text-[1.15rem] font-extrabold tracking-tight text-black not-italic md:text-[1.45rem]">Meiporul Publications</span></a><div className="hidden items-center gap-7 text-base font-semibold text-black md:flex">{links.map((l) => <a key={l} className="focus-ring transition-colors hover:text-black/70" href={`#${l.toLowerCase()}`}>{l}</a>)}</div><div className="flex items-center gap-3"><a href="#submission" className="focus-ring rounded-full bg-antiqueGold px-5 py-2 text-sm font-semibold text-obsidian">Publish Your Book</a></div></nav></header>;
// }

function Nav() {
  const links = ["About", "Work", "Authors", "Accessibility", "Contact"];

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-emeraldDeep/10 bg-[#f9f6ef]/95 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-[88px] max-w-7xl items-center justify-between px-6 lg:px-10"
      >
        {/* Logo Section */}
        <a
          href="#hero"
          aria-label="Meiporul Publications home"
          className="flex items-center gap-3"
        >
          <span className="overflow-hidden rounded-full border border-antiqueGold/40 bg-white p-1 shadow-sm">
            <Image
              src={logoImage}
              alt="Meiporul Publications logo"
              width={52}
              height={52}
              className="h-12 w-12 rounded-full object-contain"
              priority
            />
          </span>

          <span className="font-sans text-[1.2rem] font-bold tracking-tight text-black lg:text-[1.35rem]">
            Meiporul Publications
          </span>
        </a>

        {/* Center Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-[15px] font-medium text-black/80 transition hover:text-black"
            >
              {l}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center">
          <a
            href="#submission"
            className="rounded-full bg-antiqueGold px-5 py-2.5 text-sm font-semibold text-obsidian shadow-sm transition hover:scale-[1.02]"
          >
            Publish Your Book
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return <section id="hero" className="relative flex min-h-screen items-center px-5 pt-28 md:px-10"><div className="absolute inset-0 noise opacity-40" /><div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle_at_70%_20%,rgba(215,181,109,.18),transparent 30%), linear-gradient(135deg,rgba(249,246,239,.72) 0%,rgba(238,245,239,.68) 55%,rgba(249,246,239,.8) 100%), url("${siteBackgroundImage}")`, backgroundSize: "auto, auto, cover", backgroundPosition: "center, center, center top", backgroundRepeat: "no-repeat" }} /><div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]"><motion.div initial="hidden" animate="show" transition={{ staggerChildren: .12 }}><motion.div variants={fade} className="mb-6 inline-flex items-center gap-2 rounded-full border border-antiqueGold/35 bg-antiqueGold/10 px-5 py-2.5 text-base font-semibold text-forest"><Sparkles size={18} /> 11+ Years of Social Impact</motion.div><motion.h1 variants={fade} className="max-w-4xl font-sans text-4xl font-extrabold leading-[1.02] tracking-tight text-forest md:text-5xl"> <span className="gold-text">Publishing Stories That Deserve to Be Heard.</span></motion.h1><motion.p variants={fade} className="mt-7 max-w-2xl text-lg leading-8 text-black">Empowering individuals, including persons with disabilities, to bring their stories to life through inclusive, premium, and trustworthy publishing.</motion.p><motion.div variants={fade} className="mt-9 flex flex-col gap-4 sm:flex-row"><a href="#submission" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-antiqueGold px-7 py-4 font-semibold text-obsidian">Publish Your Book <ArrowRight size={18} /></a><a href="#contact" className="focus-ring inline-flex items-center justify-center rounded-full border border-emeraldDeep/15 px-7 py-4 font-semibold text-forest hover:border-antiqueGold/60">Contact Us</a></motion.div></motion.div><HeroVisual /></div></section>;
}

function HeroVisual() {
  return <motion.div aria-hidden="true" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8 }} className="relative mx-auto mt-6 w-full max-w-[25rem] justify-self-center lg:mt-10 lg:max-w-[27rem] lg:justify-self-end"><div className="absolute -inset-8 rounded-[3rem] bg-antiqueGold/15 blur-3xl" /><div className="glass relative rounded-[2.5rem] p-5 shadow-premium"><div className="aspect-[5/6] rounded-[2rem] bg-[linear-gradient(160deg,rgba(255,255,255,.18),rgba(255,255,255,.03)),radial-gradient(circle_at_35%_25%,rgba(215,181,109,.34),transparent_28%),linear-gradient(135deg,#153d2c,#06100c)] p-6"><div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-white/12 p-6"><p className="text-[0.82rem] font-extrabold uppercase tracking-[.24em] text-champagne/95">Inclusive Publishing</p><div><div className="mb-6 grid grid-cols-6 gap-3" aria-hidden>{Array.from({ length: 36 }).map((_, i) => <span key={i} className={`h-3 w-3 rounded-full ${i % 4 === 0 ? "bg-antiqueGold" : "bg-white/18"}`} />)}</div><p className="font-sans text-4xl font-bold text-champagne">Braille. Books. Belonging.</p></div><span aria-hidden="true" /></div></div></div></motion.div>;
}

function TrustStrip() {
  const highlights = [
    { value: "11+", label: "Years Experience" },
    { value: "1", label: "Tamil Braille Publication" },
    { value: "26+", label: "Stories Published" },
  ];

  return <section className="relative z-10 px-5 py-10 md:px-10"><div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">{highlights.map((item) => <div key={item.label} className="glass rounded-3xl p-6 text-center shadow-gold"><p className="font-sans text-4xl font-bold text-forest">{item.value}</p><p className="mt-2 text-[0.82rem] font-extrabold uppercase tracking-[.18em] text-emeraldDeep/90">{item.label}</p></div>)}<div className="glass rounded-3xl p-6 text-center shadow-gold"><p className="font-sans text-3xl font-bold text-forest">NGO-backed</p><p className="mt-2 text-[0.82rem] font-extrabold uppercase tracking-[.18em] text-emeraldDeep/90">Trust Initiative</p></div></div></section>;
}

function About() {
  const timeline = ["11+ years of grassroots social-impact work", "Inclusive programs for access, dignity, and empowerment", "Publishing initiative launched to preserve unheard stories", "Braille-first Tamil publication milestone"];
  return <section id="about" className="px-5 py-24 md:px-10"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr]"><SectionKicker eyebrow="About the initiative" title="A publishing house with a social conscience" text={<>Meiporul Publications is built by <a href="https://meiporultrust.org/" target="_blank" rel="noopener noreferrer" className="font-extrabold text-forest underline decoration-antiqueGold underline-offset-4 hover:text-antiqueGold">Meiporul Chennai Foundation Trust</a> to create a dignified pathway for people whose stories are powerful, but whose access to publishing is limited.</>} /><div className="grid gap-4">{timeline.map((item, i) => <motion.div key={item} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="glass rounded-3xl p-6"><p className="text-antiqueGold">0{i + 1}</p><p className="mt-2 text-xl text-forest/90">{item}</p></motion.div>)}<blockquote className="rounded-3xl border-l-4 border-antiqueGold bg-white/70 p-6 text-emeraldDeep/80"><Quote className="mb-4 text-antiqueGold" />We publish to honour lived experience, not just manuscripts. Every author deserves editorial dignity and a reader.</blockquote></div></div></section>;
}

function WhatWeDo() {
  return <section className="px-5 py-24 md:px-10"><div className="mx-auto max-w-7xl"><SectionKicker eyebrow="What we do" title="Premium publishing support, designed for access" text="A complete service model for authors, families, schools, NGOs, and collaborators." /><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{services.map(({ icon: Icon, title, tag, text }) => <motion.article key={title} whileHover={{ y: -8 }} className="glass rounded-[2rem] p-6 shadow-gold"><Icon className="text-antiqueGold" size={32} /><h3 className="mt-6 font-sans text-2xl font-bold text-forest">{title}</h3><p className="mt-2 font-semibold text-forest/85">{tag}</p><p className="mt-3 text-sm leading-6 text-emeraldDeep/62">{text}</p></motion.article>)}</div></div></section>;
}

function FeaturedWork() {
  return <section id="work" className="px-5 py-24 md:px-10"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr]"><motion.div whileInView={{ rotate: -2, y: -8 }} viewport={{ once: true }} className="mx-auto w-full max-w-md rounded-[2rem] bg-gradient-to-br from-champagne/60 to-antiqueGold p-4 shadow-premium"><div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-[#f6ecda]"><Image src={featuredBookCover} alt="Book cover of Kanbathellam Marayumendral" fill className="object-contain object-center p-4 md:p-5" sizes="(min-width: 1024px) 28vw, 100vw" /><div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-obsidian/28 via-transparent to-transparent" /><div className="absolute bottom-5 left-5 rounded-full border border-antiqueGold/50 bg-pearl/88 px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[.24em] text-forest">First Tamil Braille Publication</div></div></motion.div><div><span className="rounded-full border border-antiqueGold/40 px-4 py-2 text-sm text-forest">Featured Work</span><h2 className="mt-7 font-sans text-4xl font-extrabold text-forest md:text-5xl">A book that made achievement visible</h2><p className="mt-6 text-lg leading-8 text-black">“Kanbathellam Marayumendral” documents the lives of twenty-six visually impaired achievers — a landmark publication shaped with emotional care, public launch moments, and accessibility at its centre.</p><div className="mt-8 grid gap-4 sm:grid-cols-3">{["Author interviews", "Braille access", "Launch events"].map((item) => <div key={item} className="rounded-2xl border border-emeraldDeep/12 bg-white p-4 text-sm text-forest/72 shadow-gold">{item}</div>)}</div><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={kindleLink} target="_blank" rel="noopener noreferrer" aria-label="Read book preview on Amazon Kindle, opens in a new tab" className="focus-ring inline-flex items-center gap-2 rounded-full bg-antiqueGold px-6 py-3 font-semibold text-obsidian">Read preview <ArrowRight size={16} aria-hidden="true" /></a><a href={kindleLink} target="_blank" rel="noopener noreferrer" aria-label="Download or buy the book on Amazon Kindle, opens in a new tab" className="focus-ring inline-flex items-center justify-center rounded-full border border-emeraldDeep/15 bg-white px-6 py-3 font-semibold text-forest hover:border-antiqueGold/60">Download</a></div></div></div></section>;
}

function WhyItMatters() {
  return <section className="px-5 py-24 md:px-10"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2"><div className="rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,.10),rgba(255,255,255,.03))] p-4 shadow-premium md:p-6"><div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-[#efe6d3]"><Image src={whyItMattersImage} alt="Meiporul impact poster featuring inclusive community voices and visually impaired achievers" fill className="object-contain object-center p-4 md:p-5" sizes="(min-width: 1024px) 42vw, 100vw" priority={false} /></div></div><SectionKicker eyebrow="Why it matters" title="Publishing has not been equally accessible" text="Many authors from underserved communities carry extraordinary lived experiences but lack mentorship, formatting support, funding pathways, accessible formats, and trusted launch platforms. Meiporul closes that gap with care and credibility." /></div></section>;
}

function FeaturedIn() {
  return <section className="px-5 pb-24 md:px-10"><div className="mx-auto max-w-7xl"><SectionKicker eyebrow="FEATURED IN" title="In The Spotlight" text="Kaanbathellam Maraiyumendral has been featured and appreciated across media platforms, literary communities, publication networks, and social impact forums for its powerful storytelling and meaningful representation." /><div className="mt-10 grid gap-8 lg:grid-cols-2"><div className="glass rounded-[2.5rem] p-6 shadow-premium md:p-8"><h3 className="font-sans text-3xl font-bold text-forest">Featured in Vikatan</h3><div className="mt-6"><div className="grid gap-4 md:grid-cols-2"><motion.figure whileHover={{ y: -4 }} className="overflow-hidden rounded-[1.5rem] border border-emeraldDeep/10 shadow-gold"><Image src={vikatanImages[0]} alt="Vikatan feature screenshot 1 for Kaanbathellam Maraiyumendral" width={1242} height={1600} className="h-auto w-full" sizes="(min-width: 1024px) 22vw, (min-width: 768px) 40vw, 100vw" /></motion.figure><motion.figure whileHover={{ y: -4 }} className="overflow-hidden rounded-[1.5rem] border border-emeraldDeep/10 shadow-gold"><Image src={vikatanImages[1]} alt="Vikatan feature screenshot 2 for Kaanbathellam Maraiyumendral" width={1244} height={1600} className="h-auto w-full" sizes="(min-width: 1024px) 22vw, (min-width: 768px) 40vw, 100vw" /></motion.figure></div><motion.figure whileHover={{ y: -4 }} className="mx-auto mt-4 w-full overflow-hidden rounded-[1.5rem] border border-emeraldDeep/10 shadow-gold md:-mt-3 md:w-[48%]"><Image src={vikatanImages[2]} alt="Vikatan feature screenshot 3 for Kaanbathellam Maraiyumendral" width={1236} height={1600} className="h-auto w-full" sizes="(min-width: 1024px) 22vw, (min-width: 768px) 32vw, 100vw" /></motion.figure></div><a href={vikatanLink} target="_blank" rel="noopener noreferrer" className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-antiqueGold px-6 py-3 font-semibold text-obsidian">Read Vikatan feature <ArrowRight size={16} aria-hidden="true" /></a></div><div className="glass rounded-[2.5rem] p-6 shadow-premium md:p-8"><h3 className="font-sans text-3xl font-bold text-forest">Featured in Kumudham</h3><div className="mt-6 overflow-hidden rounded-[1.75rem] border border-emeraldDeep/10 bg-white shadow-gold"><iframe title="Kumudham book review PDF preview" src={kumudhamPdf} className="h-[32rem] w-full border-0" /></div><a href={kumudhamPdf} target="_blank" rel="noopener noreferrer" className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full border border-emeraldDeep/15 bg-white px-6 py-3 font-semibold text-forest hover:border-antiqueGold/60">Open Kumudham PDF <ArrowRight size={16} aria-hidden="true" /></a></div></div></div></section>;
}

function CallForAuthors() {
  return <section id="authors" className="px-5 py-24 md:px-10"><div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[linear-gradient(135deg,#fffdf8,#f4ead2)] p-6 text-obsidian shadow-premium md:p-12"><div className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]"><div><p className="text-[0.78rem] font-bold uppercase tracking-[.28em] text-emeraldDeep/90">Call for authors</p><h2 className="mt-4 font-sans text-4xl font-extrabold text-forest md:text-6xl">Have a Story to Share?</h2><p className="mt-5 max-w-xl text-lg text-forest/75">Bring us your idea, lived experience, research, poetry, memoir, or community story. We help shape it into a book with dignity.</p><a href={wa} aria-label="Talk to Meiporul Publications on WhatsApp" className="mt-8 inline-flex items-center gap-2 rounded-full bg-emeraldDeep px-6 py-3 font-semibold text-white"><MessageCircle size={18} aria-hidden="true" /> Talk on WhatsApp</a></div><div className="overflow-hidden rounded-[2rem] border border-antiqueGold/20 bg-white shadow-premium"><div className="relative aspect-[4/3] w-full"><Image src={authorSubmissionImage} alt="Call for authors illustration" fill className="object-cover" sizes="(min-width: 1024px) 42vw, 100vw" /></div></div></div></div></section>;
}

function AccessibilitySupport() {
  const support = ["Keyboard and switch-control friendly navigation", "Large buttons and form fields for easier tapping", "Phone and WhatsApp help if typing is difficult", "Reduced-motion and high-contrast settings respected"];
  return <section id="accessibility" className="px-5 py-24 md:px-10"><div className="mx-auto max-w-7xl rounded-[2.5rem] bg-forest p-6 text-champagne shadow-premium md:p-10"><div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]"><div><p className="text-[0.78rem] font-bold uppercase tracking-[.28em] text-antiqueGold">Accessibility support</p><h2 className="mt-4 font-sans text-4xl font-extrabold md:text-5xl">Built for every author</h2><p className="mt-5 text-lg leading-8 text-champagne/78">People who are blind, visually impaired, physically challenged, or using assistive technology can navigate, contact us, and begin publishing without barriers.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><a href="tel:+919363687259" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-antiqueGold px-6 py-3 font-semibold text-obsidian"><Phone size={18} aria-hidden="true" /> Call for help</a><a href={wa} className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-champagne/30 px-6 py-3 font-semibold text-champagne"><MessageCircle size={18} aria-hidden="true" /> WhatsApp support</a></div></div><ul className="grid gap-4 md:grid-cols-2">{support.map((item) => <li key={item} className="rounded-3xl border border-champagne/15 bg-white/8 p-5 text-lg leading-7"><Accessibility className="mb-4 text-antiqueGold" aria-hidden="true" />{item}</li>)}</ul></div></div></section>;
}

function Testimonials() {
  const testimonials = [
    {
      name: "Rishikesh Raghavendiran",
      paragraphs: [
        "எழுத்தாளர் ஜெயமோகன் தனது சாட்சி மொழி நூலில் சில வாய்மொழிக் கதைகளைக் குறிப்பிட்டிருப்பார். அதில், அரசனோடு ஏற்பட்ட முரண் காரணமாகச் சிறையில் அடைக்கப்பட்ட ஒரு ஓவியனின் கதையை பலரிடமும் பகிர்ந்திருக்கிறேன். அந்த ஓவியன் சிறைச்சுவர்களில் முதலில் ஒரு வானத்தை வரைவான். பிறகு அதில் சில பறவைகள், மரங்கள் என எப்போதும் எதையாவது வரைந்துகொண்டே இருப்பான். அரசன் சிறைக்கு வருகை தந்த ஒரு நாளில், சுவரில் ஒரு பெரிய கதவை வரைந்துகொண்டிருப்பான். அவனைக் கண்ட அரசன், \"வாழ்நாள் முழுவதும் நீ இந்தச் சிறையிலேயே கிடந்து சாக வேண்டியதுதான். இப்படி வரைந்துகொண்டே இருப்பதில் உனக்கு என்ன கிடைத்துவிடப் போகிறது?\" என்று ஏளனமாகக் கேட்பான். அதற்கு அந்த ஓவியன் வெடித்துச் சிரித்தபடியே, தான் வரைந்த கதவின் வழியே குதித்து, அந்த வானத்தில் பறந்து மறைவான்.",
        "மெய்ப்பொருள் அறக்கட்டளை, பார்வையற்றவர்களோடு இணைந்து தொடர்ச்சியாகக் களப்பணியாற்றி வருகிறது. அதன் ஒரு பகுதியாக, தங்களின் வாழ்வியல் சவால்களை வெற்றிகரமாக எதிர்கொண்டு மீண்டு வந்தவர்களின் கதைகளை ஒரு தொகுப்பாக வெளியிட்டிருக்கிறார்கள்.",
        "இந்நூலில் இடம்பெற்றுள்ளவர்கள் அனைவரும் நமது சமகாலத்து நாயகர்கள், தங்களுக்கான வானத்தைத் தாங்களே வரைந்து, அதில் மிக உயரே பறப்பவர்கள்.",
        "இந்நூலினைப் பிரெய்லி (Braille) முறையிலும் வாசிக்க இயலும்.",
      ],
    },
    {
      name: "Dhamayanthi",
      paragraphs: [
        "மெய்ப்பொருள் அறக்கட்டளை- கோமதியையும் தியாகுவையும் நான் முதன் முதலில் சந்தித்த பொழுது என்னை மிகவும் ஈர்த்தது அவர்களுடைய நேர்மையான மனம் மட்டுமே. மெல்ல மெல்ல அந்த நேர்மையுடன் பிறர் சார்ந்த கரிசனை - எல்லா பொழுதுகளிலும் மற்றவர்களை பற்றி மற்றவர்களின் ஆன்மாவில் ஏற்படும் வலி துயரம் உணர்ந்து அதை நீக்கும் மனநிலை கொண்டதாக இருப்பதை உணர்ந்தேன்.",
        "26 பார்வை சவால் நிறைந்த மனிதர்களின் வாழ்க்கை முறையை “காண்பதெல்லாம் மறையுமென்றால்” என்ற பிரெயில் புத்தகமாக தமிழில் முதன்முதலில் கொண்டு வந்த பெருமையை இப்போது அணிந்திருக்கிறார்கள். உள்ளொளி என்றொரு வார்த்தை உண்டு. அதை நாமே தேடி கண்டும் பிடிக்கலாம். அல்லது இருளின் சாயலை மீறி ஓடும் போது ஒளியின் பாதையைக் கண்டடையலாம்.",
        "இவை எல்லாம் வாழ்க்கை கதைகள் - எனவே இவற்றில் மிகைப்படுத்தல் இல்லை; மாறாக, அவர்களின் தினசரி சவால்கள், சமூகத்தின் பார்வை, தனிமை, அதற்குள் ஒளிரும் சிறுசிறு நம்பிக்கைகள்—இவை அனைத்தும் நேர்மையாக சொல்லப்பட்டிருக்கின்றன.",
        "இந்நூல் பார்வையற்றவர்களின் உலகத்தை நமக்கு அறிமுகப்படுத்துவதோடு, நாம் வாழும் வாழ்க்கையைப் பற்றியும் சிந்திக்க வைக்கிறது. ஒளி என்பது கண்களுக்கானது மட்டுமல்ல. அது மனத்திற்கானது.",
        "எதுவாயினும் இது ஒரு வரலாற்று நிகழ்வு. நம்பிக்கையின் சாசனம். தமிழில் பிரெயில் இலக்கியத்துக்கு இது ஒரு ஆரம்பம்.",
      ],
    },
  ];

  return <section className="px-5 py-24 md:px-10"><div className="mx-auto max-w-7xl"><SectionKicker eyebrow="Testimonials" title="Voices of trust" text="Featured reflections on the spirit, impact, and accessibility of this publication." /><div className="mt-10 grid gap-6 lg:grid-cols-2">{testimonials.map((testimonial) => <blockquote key={testimonial.name} className="glass rounded-[2.25rem] border border-antiqueGold/20 p-7 shadow-premium md:p-10"><Quote className="text-antiqueGold" size={32} /><div className="mt-6 space-y-5 text-base leading-8 text-forest/80 md:text-lg">{testimonial.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><p className="mt-8 text-sm font-semibold uppercase tracking-[.22em] text-emeraldDeep/55">{testimonial.name}</p></blockquote>)}</div></div></section>;
}

function Gallery() {
  return <section className="px-5 py-24 md:px-10"><div className="mx-auto max-w-7xl"><SectionKicker eyebrow="Gallery" title="Events, launches, and community moments" /><div className="mt-10 grid gap-5 md:grid-cols-3">{galleryItems.map(({ src, caption }) => <motion.figure key={src} whileHover={{ y: -8 }} className="group overflow-hidden rounded-[2rem] border border-emeraldDeep/10 bg-white shadow-gold"><div className="relative aspect-[4/3] overflow-hidden"><Image src={src} alt={caption} fill className="object-cover transition duration-500 group-hover:scale-[1.04]" sizes="(min-width: 768px) 33vw, 100vw" /><div className="absolute inset-0 bg-gradient-to-t from-obsidian/55 via-obsidian/10 to-transparent" /></div></motion.figure>)}</div></div></section>;
}

function Team() {
  const [activeGroup, setActiveGroup] = useState<"founders" | "authors" | "coordinators" | null>(null);
  const activePeople = activeGroup === "founders" ? founders : activeGroup === "authors" ? authorGalleryItems : coordinators;
  const activeTitle = activeGroup === "founders" ? "Founders" : activeGroup === "authors" ? "Authors" : "Coordinators";

  return <section className="px-5 py-24 md:px-10"><div className="mx-auto max-w-7xl"><SectionKicker eyebrow="Team" title="Built like a publishing house, grounded like an NGO" /><div className="mt-10 grid gap-5 md:grid-cols-3"><button type="button" onClick={() => setActiveGroup((current) => current === "founders" ? null : "founders")} aria-expanded={activeGroup === "founders"} aria-controls="team-gallery" className="glass group rounded-[2rem] p-6 text-left transition hover:-translate-y-1 hover:shadow-premium"><UsersRound className="text-antiqueGold" /><h3 className="mt-6 font-sans text-3xl font-bold text-forest">Founder</h3><p className="mt-5 inline-flex items-center gap-2 font-semibold text-emeraldDeep">{activeGroup === "founders" ? "Hide founders" : "View founders"}<ArrowRight size={16} className={`transition-transform ${activeGroup === "founders" ? "rotate-90" : "group-hover:translate-x-1"}`} /></p></button><button type="button" onClick={() => setActiveGroup((current) => current === "authors" ? null : "authors")} aria-expanded={activeGroup === "authors"} aria-controls="team-gallery" className="glass group rounded-[2rem] p-6 text-left transition hover:-translate-y-1 hover:shadow-premium"><UsersRound className="text-antiqueGold" /><h3 className="mt-6 font-sans text-3xl font-bold text-forest">Authors</h3><p className="mt-5 inline-flex items-center gap-2 font-semibold text-emeraldDeep">{activeGroup === "authors" ? "Hide authors" : "View authors"}<ArrowRight size={16} className={`transition-transform ${activeGroup === "authors" ? "rotate-90" : "group-hover:translate-x-1"}`} /></p></button><button type="button" onClick={() => setActiveGroup((current) => current === "coordinators" ? null : "coordinators")} aria-expanded={activeGroup === "coordinators"} aria-controls="team-gallery" className="glass group rounded-[2rem] p-6 text-left transition hover:-translate-y-1 hover:shadow-premium"><UsersRound className="text-antiqueGold" /><h3 className="mt-6 font-sans text-3xl font-bold text-forest">Coordinators</h3><p className="mt-5 inline-flex items-center gap-2 font-semibold text-emeraldDeep">{activeGroup === "coordinators" ? "Hide coordinators" : "View coordinators"}<ArrowRight size={16} className={`transition-transform ${activeGroup === "coordinators" ? "rotate-90" : "group-hover:translate-x-1"}`} /></p></button></div>{activeGroup ? <div id="team-gallery" className="mt-10 rounded-[2.5rem] border border-emeraldDeep/10 bg-white/80 p-6 shadow-gold md:p-8"><h3 className="font-sans text-3xl font-bold text-forest">{activeTitle}</h3><div className="mt-6 grid gap-6 md:grid-cols-2">{activePeople.map((person) => <TeamMemberCard key={person.name} {...person} />)}</div></div> : null}</div></section>;
}

function TeamMemberCard({ name, src, position }: { name: string; src: string; position?: string }) {
  return <motion.figure whileHover={{ y: -6 }} className="group mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-emeraldDeep/10 bg-white shadow-gold"><div className="relative aspect-[4/3] overflow-hidden bg-[#f7f1e4]"><Image src={src} alt={name} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" style={{ objectPosition: position ?? "center top" }} sizes="(min-width: 768px) 40vw, 100vw" /></div><figcaption className="px-5 py-5 text-center"><p className="font-sans text-2xl font-bold text-forest">{name}</p></figcaption></motion.figure>;
}

function Contact() {
  return <section id="contact" className="px-5 py-24 md:px-10"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2"><div><SectionKicker eyebrow="Contact" title="Collaborate, publish, or support the mission" text="Connect with Meiporul Publications for publishing enquiries, donations, accessibility collaborations, and institutional partnerships." /><address className="mt-8 grid gap-4 text-forest/75 not-italic"><p className="flex gap-3"><Mail className="text-antiqueGold" aria-hidden="true" /><a className="focus-ring hover:text-antiqueGold" href="mailto:meiporulchennai@gmail.com
">meiporulchennai@gmail.com
</a></p><p className="flex gap-3"><Phone className="text-antiqueGold" aria-hidden="true" /><a className="focus-ring hover:text-antiqueGold" href="tel:+919363687259">+91 93636 87259</a></p><p className="flex gap-3"><MapPin className="text-antiqueGold" aria-hidden="true" /> Chennai, Tamil Nadu, India</p></address></div><div className="glass rounded-[2rem] p-4"><iframe title="Map showing Meiporul Publications location in Chennai, Tamil Nadu, India" className="h-80 w-full rounded-[1.5rem] border-0" loading="lazy" src="https://www.google.com/maps?q=Chennai%2C%20Tamil%20Nadu%2C%20India&output=embed" /></div></div></section>;
}

function Footer() {
  return <footer className="border-t border-emeraldDeep/10 px-5 py-12 md:px-10"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4"><div><h2 className="font-sans text-3xl font-bold text-forest">Meiporul Publications</h2><p className="mt-3 text-sm text-emeraldDeep/60">India’s inclusive publishing platform for stories that deserve to be heard.</p></div>{["About", "Quick links", "Legal"].map((h) => <div key={h}><h3 className="font-semibold text-forest">{h}</h3><ul className="mt-3 space-y-2 text-sm text-emeraldDeep/60"><li>Mission</li><li>Author submission</li><li>Privacy policy</li></ul></div>)}<form className="md:col-span-4 flex flex-col gap-3 rounded-3xl border border-emeraldDeep/10 p-4 sm:flex-row"><input aria-label="Newsletter email" placeholder="Email for newsletter" className="focus-ring flex-1 rounded-full border border-emeraldDeep/10 bg-white px-5 py-3 text-forest placeholder:text-emeraldDeep/35" /><button className="focus-ring rounded-full bg-antiqueGold px-6 py-3 font-semibold text-obsidian">Subscribe</button></form></div></footer>;
}

function SectionKicker({ eyebrow, title, text }: { eyebrow: string; title: string; text?: ReactNode }) {
  return <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}><p className="text-[0.82rem] font-extrabold uppercase tracking-[.22em] text-antiqueGold">{eyebrow}</p><h2 className="mt-4 max-w-4xl font-sans text-4xl font-extrabold leading-tight text-forest md:text-5xl">{title}</h2>{text ? <p className="mt-5 max-w-3xl text-lg leading-8 text-emeraldDeep/68">{text}</p> : null}</motion.div>;
}
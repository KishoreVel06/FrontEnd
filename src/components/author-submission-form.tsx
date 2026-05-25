"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Save, Send } from "lucide-react";
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";

type FormState = {
  name: string; phone: string; email: string; location: string; languagePreference: string;
  firstTimeAuthor: string; bio: string; category: string;
  title: string; genre: string; bookLanguage: string; description: string;
  manuscriptStatus: string; publishingNeeds: string[]; purpose: string; consent: boolean;
};

const initialState: FormState = {
  name: "", phone: "", email: "", location: "", languagePreference: "Tamil",
  firstTimeAuthor: "yes", bio: "", category: "",
  title: "", genre: "", bookLanguage: "Tamil", description: "",
  manuscriptStatus: "Idea", publishingNeeds: [], purpose: "", consent: false
};

const steps = ["Basic Info", "About Author", "Book Details", "Manuscript", "Needs", "Final"];
const needs = ["Editing", "Braille", "Design", "Promotion"];

export function AuthorSubmissionForm() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<FormState>(initialState);
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "saving" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const progress = useMemo(() => Math.round(((step + 1) / steps.length) * 100), [step]);

  useEffect(() => {
    const saved = localStorage.getItem("meiporul-author-submission");
    if (saved) setValues({ ...initialState, ...JSON.parse(saved) });
  }, []);

  const setField = (name: keyof FormState, value: string | boolean | string[]) => setValues((prev) => ({ ...prev, [name]: value }));
  const input = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setField(event.target.name as keyof FormState, event.target.value);
  const toggleNeed = (need: string) => setField("publishingNeeds", values.publishingNeeds.includes(need) ? values.publishingNeeds.filter((item) => item !== need) : [...values.publishingNeeds, need]);
  const save = () => { localStorage.setItem("meiporul-author-submission", JSON.stringify(values)); setStatus("saving"); setTimeout(() => setStatus("idle"), 900); };

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!values.consent) { setMessage("Please provide consent to submit your publishing enquiry."); setStatus("error"); return; }
    setStatus("submitting"); setMessage("");
    const form = new FormData();
    form.append("submission_json", JSON.stringify(values));
    if (file) form.append("manuscript_file", file);
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";
      const response = await fetch(`${baseUrl}/api/v1/submissions`, { method: "POST", body: form });
      if (!response.ok) throw new Error("Submission failed");
      localStorage.removeItem("meiporul-author-submission");
      setStatus("success");
    } catch {
      setStatus("error"); setMessage("We could not submit right now. Please try again or contact us on WhatsApp.");
    }
  }

  if (status === "success") return <SuccessScreen />;

  return (
    <form onSubmit={submit} className="glass rounded-[2rem] p-5 shadow-premium md:p-8" aria-label="Author submission form">
      <p className="mb-6 rounded-2xl border border-antiqueGold/30 bg-antiqueGold/10 p-4 text-sm leading-6 text-forest/80">
        This form works with keyboard navigation and assistive devices. If typing is difficult, call or WhatsApp us at <a className="focus-ring font-semibold text-forest underline" href="tel:+919363687259">+91 93636 87259</a> and our team can help collect your details.
      </p>
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-emeraldDeep/70"><span id="submission-step">Step {step + 1} of {steps.length}: {steps[step]}</span><span aria-hidden="true">{progress}%</span></div>
        <div className="mt-3 h-2 rounded-full bg-emeraldDeep/10" role="progressbar" aria-labelledby="submission-step" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}><motion.div className="h-2 rounded-full bg-antiqueGold" animate={{ width: `${progress}%` }} /></div>
      </div>
      <div className="min-h-[360px]">{renderStep()}</div>
      {message && <p className="mt-4 rounded-2xl border border-red-300 bg-red-50 p-3 text-sm text-red-800" role="alert">{message}</p>}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="button" onClick={save} className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-emeraldDeep/15 px-5 py-3 text-sm text-forest/85 hover:border-antiqueGold/60"><Save size={16} aria-hidden="true" />{status === "saving" ? "Saved" : "Save & continue later"}</button>
        <div className="flex gap-3">
          <button type="button" aria-label="Go to previous form step" disabled={step === 0} onClick={() => setStep((s) => Math.max(0, s - 1))} className="focus-ring rounded-full border border-emeraldDeep/15 px-5 py-3 text-forest disabled:opacity-35"><ArrowLeft size={16} aria-hidden="true" /></button>
          {step < steps.length - 1 ? <button type="button" aria-label="Go to next form step" onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))} className="focus-ring inline-flex items-center gap-2 rounded-full bg-antiqueGold px-6 py-3 font-semibold text-obsidian">Next <ArrowRight size={16} aria-hidden="true" /></button> : <button type="submit" disabled={status === "submitting"} className="focus-ring inline-flex items-center gap-2 rounded-full bg-antiqueGold px-6 py-3 font-semibold text-obsidian"><Send size={16} aria-hidden="true" />{status === "submitting" ? "Submitting..." : "Submit"}</button>}
        </div>
      </div>
    </form>
  );

  function renderStep() {
    const fieldClass = "focus-ring w-full rounded-2xl border border-emeraldDeep/12 bg-white px-4 py-4 text-forest placeholder:text-emeraldDeep/35";
    if (step === 0) return <div className="grid gap-4 md:grid-cols-2"><Input c={fieldClass} name="name" label="Name" value={values.name} onChange={input} autoComplete="name" /><Input c={fieldClass} name="phone" type="tel" label="Phone" value={values.phone} onChange={input} autoComplete="tel" /><Input c={fieldClass} name="email" type="email" label="Email" value={values.email} onChange={input} autoComplete="email" /><Input c={fieldClass} name="location" label="Location" value={values.location} onChange={input} autoComplete="address-level2" /><Select c={fieldClass} name="languagePreference" label="Language preference" value={values.languagePreference} onChange={input} options={["Tamil", "English", "Hindi", "Other"]} /></div>;
    if (step === 1) return <div className="grid gap-4"><Select c={fieldClass} name="firstTimeAuthor" label="First-time author?" value={values.firstTimeAuthor} onChange={input} options={["yes", "no"]} /><Textarea c={fieldClass} name="bio" label="Short bio" value={values.bio} onChange={input} /><Input c={fieldClass} name="category" label="Category (visually impaired, student, educator, etc.)" value={values.category} onChange={input} /></div>;
    if (step === 2) return <div className="grid gap-4 md:grid-cols-2"><Input c={fieldClass} name="title" label="Book title" value={values.title} onChange={input} /><Input c={fieldClass} name="genre" label="Genre" value={values.genre} onChange={input} /><Select c={fieldClass} name="bookLanguage" label="Book language" value={values.bookLanguage} onChange={input} options={["Tamil", "English", "Hindi", "Bilingual", "Other"]} /><Textarea c={`${fieldClass} md:col-span-2`} name="description" label="Book description" value={values.description} onChange={input} /></div>;
    if (step === 3) return <div className="grid gap-4"><Select c={fieldClass} name="manuscriptStatus" label="Manuscript status" value={values.manuscriptStatus} onChange={input} options={["Idea", "Draft", "Completed"]} /><label className="grid gap-2 text-sm text-emeraldDeep/70">Upload manuscript (optional)<input className={fieldClass} type="file" accept=".pdf,.doc,.docx,.txt" onChange={(e) => setFile(e.target.files?.[0] ?? null)} /></label></div>;
    if (step === 4) return <div><p className="mb-4 text-forest/75">Select the support you need.</p><div className="grid gap-3 sm:grid-cols-2">{needs.map((need) => <button key={need} type="button" aria-pressed={values.publishingNeeds.includes(need)} onClick={() => toggleNeed(need)} className={`focus-ring rounded-2xl border p-4 text-left ${values.publishingNeeds.includes(need) ? "border-antiqueGold bg-antiqueGold/15" : "border-emeraldDeep/12 bg-white"}`}><span className="font-semibold text-forest">{need}</span><span className="block text-sm text-emeraldDeep/60">Professional support for inclusive publishing.</span></button>)}</div></div>;
    return <div className="grid gap-4"><Textarea c={fieldClass} name="purpose" label="Why do you want to publish this book?" value={values.purpose} onChange={input} /><label className="flex gap-3 rounded-2xl border border-emeraldDeep/12 bg-white p-4 text-sm text-forest/75"><input type="checkbox" checked={values.consent} onChange={(e) => setField("consent", e.target.checked)} /> I consent to Meiporul Publications contacting me about this submission.</label></div>;
  }
}

function Input({ c, label, ...props }: { c: string; label: string } & React.InputHTMLAttributes<HTMLInputElement>) { return <label className="grid gap-2 text-sm text-emeraldDeep/70">{label}<input className={c} {...props} /></label>; }
function Textarea({ c, label, ...props }: { c: string; label: string } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) { return <label className="grid gap-2 text-sm text-emeraldDeep/70">{label}<textarea rows={5} className={c} {...props} /></label>; }
function Select({ c, label, options, ...props }: { c: string; label: string; options: string[] } & React.SelectHTMLAttributes<HTMLSelectElement>) { return <label className="grid gap-2 text-sm text-emeraldDeep/70">{label}<select className={c} {...props}>{options.map((item) => <option className="bg-white text-forest" key={item}>{item}</option>)}</select></label>; }
function SuccessScreen() { return <div className="glass rounded-[2rem] p-8 text-center shadow-premium"><CheckCircle2 className="mx-auto text-antiqueGold" size={54} /><h3 className="mt-5 font-sans text-4xl font-bold text-forest">Submission received</h3><p className="mx-auto mt-3 max-w-xl text-emeraldDeep/72">Thank you. Our publishing team will review your story and contact you shortly with the next steps.</p></div>; }
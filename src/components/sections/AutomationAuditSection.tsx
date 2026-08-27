import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  Globe, 
  Building, 
  Users, 
  Database, 
  TrendingUp, 
  AlertCircle, 
  Mail, 
  User, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  Zap,
  BarChart,
  Cpu,
  ChevronDown,
  Check
} from "lucide-react";
import { Link } from "@tanstack/react-router";

const BUSINESS_TYPES = [
  "Home Services",
  "Dental Clinic",
  "Real Estate",
  "Professional Services",
  "Marketing Agency",
  "Other Service Business",
];

const EMPLOYEE_RANGES = ["1-5 employees", "5-20 employees", "20-50 employees", "50+ employees"];

const CRM_OPTIONS = ["HubSpot", "GoHighLevel", "Salesforce", "Zoho", "Spreadsheets / None", "Other CRM"];

const LEAD_VOLUMES = ["< 50 leads/mo", "50-200 leads/mo", "200-500 leads/mo", "500+ leads/mo"];

const OPERATIONAL_PROBLEMS = [
  "Slow lead response times",
  "Missed follow-ups & lead decay",
  "Manual scheduling back-and-forth",
  "Client onboarding friction",
  "Manual slide deck reporting",
  "Low Google review volume",
];

const AUDIT_FLOW_STEPS = [
  { label: "Website", icon: Globe },
  { label: "AI Analyzes Business", icon: Cpu },
  { label: "Finds Opportunities", icon: Sparkles },
  { label: "Generates Report", icon: BarChart },
  { label: "Lead Enters CRM", icon: Database },
  { label: "Lead Score", icon: Zap },
  { label: "Personalized Follow-up", icon: Mail },
  { label: "Calendar", icon: Calendar },
];

interface CustomSelectProps {
  value: string;
  options: string[];
  onChange: (val: string) => void;
}

function CustomSelect({ value, options, onChange }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between rounded-xl border border-sandel-border bg-sandel px-4 py-3 text-xs sm:text-sm font-semibold text-neutral-900 shadow-2xs transition-all hover:border-neutral-400 hover:bg-white focus:border-[#ff7a00] focus:outline-none cursor-pointer"
      >
        <span>{value}</span>
        <ChevronDown className={`size-4 text-neutral-500 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#ff7a00]" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.98 }}
              animate={{ opacity: 1, y: 4, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 right-0 top-full z-50 rounded-xl border border-sandel-border bg-sandel-card p-1.5 shadow-xl max-h-60 overflow-y-auto"
            >
              {options.map((option) => {
                const isSelected = option === value;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      onChange(option);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold font-sans transition-colors cursor-pointer text-left ${
                      isSelected 
                        ? "bg-[#ff7a00]/10 text-[#ff7a00] font-bold" 
                        : "text-neutral-800 hover:bg-sandel hover:text-neutral-900"
                    }`}
                  >
                    <span>{option}</span>
                    {isSelected && <Check className="size-3.5 text-[#ff7a00] shrink-0" />}
                  </button>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export function AutomationAuditSection() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    website: "",
    businessType: "Home Services",
    employeeCount: "5-20 employees",
    currentCrm: "HubSpot",
    leadVolume: "50-200 leads/mo",
    biggestProblem: "Slow lead response times",
    name: "",
    email: "",
  });

  const handleChange = (field: string, val: string) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="automation-audit" className="relative bg-sandel py-20 text-neutral-900 md:py-28">
      <div className="container-pad mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-neutral-900">
            Get Your Free Automation Audit
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-neutral-600 font-sans max-w-2xl mx-auto">
            Discover exactly where your business is losing leads and how much time & revenue custom AI workflows can recover for you.
          </p>
        </div>

        {/* VISUAL AUDIT MECHANISM DIAGRAM */}
        <div className="mt-12 rounded-2xl border border-sandel-border bg-sandel-card p-5 shadow-xs max-w-5xl mx-auto">
          <div className="text-center mb-3">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-500">
              How Your Automated Audit Pipeline Works
            </span>
          </div>
          <div className="grid grid-cols-2 xs:grid-cols-4 lg:grid-cols-8 gap-2">
            {AUDIT_FLOW_STEPS.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="flex flex-col items-center text-center p-2 rounded-xl bg-sandel border border-sandel-border">
                  <div className="flex size-7 items-center justify-center rounded-lg bg-[#ff7a00]/10 text-[#ff7a00] mb-1.5">
                    <Icon className="size-3.5" />
                  </div>
                  <span className="text-[10px] font-semibold text-neutral-800 font-sans leading-tight">
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* AUDIT FORM CONTAINER */}
        <div className="mt-10 max-w-3xl mx-auto rounded-3xl border border-sandel-border bg-sandel-card p-6 sm:p-10 shadow-lg">
          {submitted ? (
            /* SUBMITTED RESULT VIEW */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6"
            >
              <div className="inline-flex size-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 mb-4">
                <CheckCircle2 className="size-8" />
              </div>
              <h3 className="font-serif text-3xl font-normal text-neutral-900">
                Audit Blueprint Generated!
              </h3>
              <p className="mt-2 text-sm sm:text-base text-neutral-600 font-sans max-w-lg mx-auto">
                We have processed <span className="font-semibold text-neutral-900">{formData.website || "your website"}</span> for <span className="font-semibold text-neutral-900">{formData.businessType}</span>.
              </p>

              {/* Instant Score Card */}
              <div className="mt-8 grid gap-4 sm:grid-cols-3 text-left">
                <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-200/60">
                  <span className="text-xs font-mono font-semibold text-[#ff7a00] uppercase block">
                    Automation Potential
                  </span>
                  <span className="text-3xl font-serif font-bold text-neutral-900 mt-1 block">
                    92%
                  </span>
                  <span className="text-[11px] text-neutral-600 mt-1 block">
                    High ROI opportunity detected
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/60">
                  <span className="text-xs font-mono font-semibold text-emerald-600 uppercase block">
                    Estimated Time Saved
                  </span>
                  <span className="text-3xl font-serif font-bold text-neutral-900 mt-1 block">
                    ~48 hrs/mo
                  </span>
                  <span className="text-[11px] text-neutral-600 mt-1 block">
                    Across lead triage & booking
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/60">
                  <span className="text-xs font-mono font-semibold text-blue-600 uppercase block">
                    Speed-to-Lead Gain
                  </span>
                  <span className="text-3xl font-serif font-bold text-neutral-900 mt-1 block">
                    &lt; 60 secs
                  </span>
                  <span className="text-[11px] text-neutral-600 mt-1 block">
                    Sub-minute AI response time
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/book">
                  <button className="w-full sm:w-auto rounded-xl bg-[#18181b] px-8 py-4 text-sm font-medium text-white shadow-md transition hover:bg-black flex items-center justify-center gap-2 cursor-pointer">
                    <span>Review Full Audit on Calendar</span>
                    <Calendar className="size-4" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ) : (
            /* MULTI-STEP FORM */
            <form onSubmit={handleSubmit}>
              {/* Form Step Indicator */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-100">
                <span className="text-xs font-mono font-bold text-[#ff7a00] uppercase tracking-wider">
                  Step {step} of 3 — {step === 1 ? "Business Profile" : step === 2 ? "Operational Stack" : "Deliver My Audit"}
                </span>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === step ? "w-8 bg-[#ff7a00]" : i < step ? "w-3 bg-neutral-800" : "w-3 bg-neutral-200"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Step 1: Business Profile */}
              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 font-mono mb-2">
                      Company Website URL *
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3.5 top-3.5 size-4 text-neutral-400" />
                      <input
                        type="url"
                        required
                        placeholder="https://yourcompany.com"
                        value={formData.website}
                        onChange={(e) => handleChange("website", e.target.value)}
                        className="w-full rounded-xl border border-neutral-300 bg-neutral-50/50 pl-10 pr-4 py-3 text-sm text-neutral-900 focus:border-[#ff7a00] focus:bg-white focus:outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 font-mono mb-2">
                        Business Type
                      </label>
                      <CustomSelect
                        value={formData.businessType}
                        options={BUSINESS_TYPES}
                        onChange={(val) => handleChange("businessType", val)}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 font-mono mb-2">
                        Number of Employees
                      </label>
                      <CustomSelect
                        value={formData.employeeCount}
                        options={EMPLOYEE_RANGES}
                        onChange={(val) => handleChange("employeeCount", val)}
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full mt-4 rounded-xl bg-[#18181b] py-3.5 text-sm font-semibold text-white transition hover:bg-black flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Next: Operational Stack</span>
                    <ArrowRight className="size-4" />
                  </button>
                </motion.div>
              )}

              {/* Step 2: Operational Stack */}
              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 font-mono mb-2">
                        Current CRM
                      </label>
                      <CustomSelect
                        value={formData.currentCrm}
                        options={CRM_OPTIONS}
                        onChange={(val) => handleChange("currentCrm", val)}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 font-mono mb-2">
                        Approximate Leads / Month
                      </label>
                      <CustomSelect
                        value={formData.leadVolume}
                        options={LEAD_VOLUMES}
                        onChange={(val) => handleChange("leadVolume", val)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 font-mono mb-2">
                      Biggest Operational Problem *
                    </label>
                    <CustomSelect
                      value={formData.biggestProblem}
                      options={OPERATIONAL_PROBLEMS}
                      onChange={(val) => handleChange("biggestProblem", val)}
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 rounded-xl border border-neutral-300 py-3.5 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-100 cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="w-2/3 rounded-xl bg-[#18181b] py-3.5 text-sm font-semibold text-white transition hover:bg-black flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Next: Deliver Report</span>
                      <ArrowRight className="size-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Contact & Submit */}
              {step === 3 && (
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 font-mono mb-2">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 size-4 text-neutral-400" />
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="w-full rounded-xl border border-neutral-300 bg-neutral-50/50 pl-10 pr-4 py-3 text-sm text-neutral-900 focus:border-[#ff7a00] focus:bg-white focus:outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 font-mono mb-2">
                      Work Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3.5 size-4 text-neutral-400" />
                      <input
                        type="email"
                        required
                        placeholder="john@yourcompany.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="w-full rounded-xl border border-neutral-300 bg-neutral-50/50 pl-10 pr-4 py-3 text-sm text-neutral-900 focus:border-[#ff7a00] focus:bg-white focus:outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-1/3 rounded-xl border border-neutral-300 py-3.5 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-100 cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 rounded-xl bg-[#ff7a00] py-3.5 text-sm font-semibold text-black shadow-md transition hover:bg-[#ff8c24] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Generate My Audit Report</span>
                      <Sparkles className="size-4 text-black" />
                    </button>
                  </div>
                </motion.div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

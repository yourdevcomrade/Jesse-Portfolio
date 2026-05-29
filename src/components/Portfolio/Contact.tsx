import { motion } from "framer-motion";
import { Mail, MapPin, Send, AlertCircle, CheckCircle } from "lucide-react";
import { useState } from "react";
import { sendContactEmail } from "@/api/contact.functions";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectDetails: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Email validation - proper pattern with exact domain matching
  const isValidEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Common valid email domains - exact matches
    const validDomains = [
      "gmail.com",
      "yahoo.com",
      "outlook.com",
      "hotmail.com",
      "aol.com",
      "icloud.com",
      "mail.com",
      "protonmail.com",
      "tutanota.com",
      "googlemail.com",
      "ymail.com",
      "rocketmail.com",
      "live.com",
      "msn.com",
      "inbox.com",
      "fastmail.com",
      "zoho.com",
    ];

    if (!emailRegex.test(email)) return false;

    const domain = email.split("@")[1].toLowerCase();
    // Only accept exact matches from common domains or valid business domains
    return (
      validDomains.includes(domain) ||
      /^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*\.[a-z]{2,}$/i.test(
        domain,
      )
    );
  };

  // Count words (not characters)
  const countWords = (text: string) => {
    return text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
  };

  // Validate individual field
  const validateField = (name: string, value: string) => {
    const newErrors = { ...errors };

    if (name === "name") {
      if (!value.trim()) {
        newErrors.name = "Name is required";
      } else if (value.trim().length < 5) {
        newErrors.name = "Name must be at least 5 characters";
      } else {
        delete newErrors.name;
      }
    }

    if (name === "email") {
      if (!value.trim()) {
        newErrors.email = "Email is required";
      } else if (!isValidEmail(value)) {
        newErrors.email = "Please enter a valid email address";
      } else {
        delete newErrors.email;
      }
    }

    if (name === "projectDetails") {
      if (!value.trim()) {
        newErrors.projectDetails = "Project details are required";
      } else if (countWords(value) < 20) {
        newErrors.projectDetails = "Project details must be at least 20 words";
      } else {
        delete newErrors.projectDetails;
      }
    }

    setErrors(newErrors);
  };

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateField(name, value);
  };

  // Mark field as touched
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  // Validate all fields on submission
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 5) {
      newErrors.name = "Name must be at least 5 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = "Project details are required";
    } else if (countWords(formData.projectDetails) < 20) {
      newErrors.projectDetails = "Project details must be at least 20 words";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Determine if field should show error
  const shouldShowError = (fieldName: string) => {
    return touched[fieldName as keyof typeof touched] && errors[fieldName];
  };

  // Determine if field is valid
  const isFieldValid = (fieldName: string) => {
    const value = formData[fieldName as keyof typeof formData];
    return (
      touched[fieldName as keyof typeof touched] &&
      !errors[fieldName] &&
      typeof value === "string" &&
      value.trim()
    );
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(251,191,36,0.12),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-amber-300/80 mb-4">
            Contact
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.05]">
            Have a Project
            <br />
            <span className="italic font-serif text-white/70">in Mind?</span>
          </h2>
          <p className="mt-6 text-white/60 max-w-md leading-relaxed">
            Tell me about your project, timeline, and what business success
            looks like for you. I review briefs and respond with a clear path
            forward within 24 hours.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href="mailto:hello@jesseadesoji.dev"
              className="flex items-center gap-4 text-white/80 hover:text-white group"
            >
              <span className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-amber-300/40 group-hover:text-amber-300 transition">
                <Mail size={16} />
              </span>
              hello@jesseadesoji.dev
            </a>
            <div className="flex items-center gap-4 text-white/80">
              <span className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center">
                <MapPin size={16} />
              </span>
              Lagos, Nigeria - Partnering with brands globally
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={async (e) => {
            e.preventDefault();
            if (validateForm()) {
              setLoading(true);
              setSubmitError("");
              try {
                await sendContactEmail({ data: formData });
                setSent(true);
                setTimeout(() => {
                  setSent(false);
                  setFormData({
                    name: "",
                    email: "",
                    company: "",
                    projectDetails: "",
                  });
                  setTouched({});
                }, 3000);
              } catch (err) {
                setSubmitError("Something went wrong. Please try again.");
              } finally {
                setLoading(false);
              }
            }
          }}
          className="lg:col-span-7 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur p-6 sm:p-10 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <Field
                label="Name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={shouldShowError("name") ? errors.name : ""}
                isValid={isFieldValid("name")}
                required
              />
            </div>
            <div>
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@brand.com"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={shouldShowError("email") ? errors.email : ""}
                isValid={isFieldValid("email")}
                required
              />
            </div>
          </div>
          <Field
            label="Company"
            name="company"
            placeholder="Optional"
            value={formData.company}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div>
            <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">
              Project details
            </label>
            <div className="relative">
              <textarea
                name="projectDetails"
                required
                rows={5}
                placeholder="Tell me about your project, goals, and timeline…"
                value={formData.projectDetails}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full rounded-xl bg-black/40 border px-4 py-3 text-white placeholder:text-white/30 focus:ring-0 outline-none transition resize-none ${
                  shouldShowError("projectDetails")
                    ? "border-red-500/60 focus:border-red-500/80"
                    : isFieldValid("projectDetails")
                      ? "border-green-500/60 focus:border-green-500/80"
                      : "border-white/10 focus:border-amber-300/60"
                }`}
              />
              {shouldShowError("projectDetails") && (
                <AlertCircle className="absolute right-3 top-3 w-5 h-5 text-red-500" />
              )}
              {isFieldValid("projectDetails") && (
                <CheckCircle className="absolute right-3 top-3 w-5 h-5 text-green-500" />
              )}
            </div>
            {shouldShowError("projectDetails") && (
              <p className="mt-1 text-xs text-red-500">
                {errors.projectDetails}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={sent || loading}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-7 py-3.5 text-sm font-medium hover:bg-amber-200 transition-all duration-300 disabled:opacity-60"
          >
            {sent ? "Message sent — talk soon" : loading ? "Sending…" : "Send message"}
            {!sent && !loading && (
              <Send
                size={15}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            )}
          </button>
          {submitError && (
            <p className="text-xs text-red-500 mt-2">{submitError}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  isValid,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  isValid?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          {...props}
          className={`w-full rounded-xl bg-black/40 border px-4 py-3 text-white placeholder:text-white/30 focus:ring-0 outline-none transition ${
            error
              ? "border-red-500/60 focus:border-red-500/80"
              : isValid
                ? "border-green-500/60 focus:border-green-500/80"
                : "border-white/10 focus:border-amber-300/60"
          }`}
        />
        {error && (
          <AlertCircle className="absolute right-3 top-3.5 w-5 h-5 text-red-500" />
        )}
        {isValid && (
          <CheckCircle className="absolute right-3 top-3.5 w-5 h-5 text-green-500" />
        )}
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
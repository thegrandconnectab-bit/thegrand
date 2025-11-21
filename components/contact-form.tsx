"use client";

import { useState, FormEvent } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const form = e.currentTarget;
      const formDataToSend = new FormData(form);
      
      // Add subject line
      const subject = formData.inquiryType
        ? `${formData.inquiryType} - Contact Form Submission`
        : "Contact Form Submission";
      formDataToSend.append("_subject", subject);

      // Add reply-to email
      formDataToSend.append("_replyto", formData.email);

      // Prevent FormSubmit from showing their default page
      formDataToSend.append("_next", window.location.href);
      
      // Disable captcha (optional, can be enabled later)
      formDataToSend.append("_captcha", "false");

      // Submit to FormSubmit using AJAX endpoint
      const response = await fetch("https://formsubmit.co/ajax/thegrandconnectAB@gmail.com", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          inquiryType: "",
          message: "",
        });
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again or email us directly at thegrandconnectAB@gmail.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      action="https://formsubmit.co/thegrandconnectAB@gmail.com"
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Honeypot field to prevent spam */}
      <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[var(--text-primary)]"
          >
            Name <span className="text-orange-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-[var(--card-border)] bg-[var(--surface-strong)] px-4 py-2.5 md:py-3 text-sm md:text-base text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 transition"
            placeholder="Your name"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[var(--text-primary)]"
          >
            Email <span className="text-orange-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-[var(--card-border)] bg-[var(--surface-strong)] px-4 py-2.5 md:py-3 text-sm md:text-base text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 transition"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-[var(--text-primary)]"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-[var(--card-border)] bg-[var(--surface-strong)] px-4 py-2.5 md:py-3 text-sm md:text-base text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 transition"
            placeholder="+91 1234567890"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="inquiryType"
            className="block text-sm font-medium text-[var(--text-primary)]"
          >
            Inquiry Type
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            className="w-full rounded-xl border border-[var(--card-border)] bg-[var(--surface-strong)] px-4 py-2.5 md:py-3 text-sm md:text-base text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 transition"
          >
            <option value="">Select an option</option>
            <option value="Join a Session">Join a Session</option>
            <option value="Partner With Us">Partner With Us</option>
            <option value="Support Our Mission">Support Our Mission</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Media/Press">Media/Press</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[var(--text-primary)]"
        >
          Message <span className="text-orange-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-xl border border-[var(--card-border)] bg-[var(--surface-strong)] px-4 py-2.5 md:py-3 text-sm md:text-base text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 transition resize-none"
          placeholder="Tell us how we can help you..."
        />
      </div>

      {submitStatus.type && (
        <div
          className={`rounded-xl border p-4 ${
            submitStatus.type === "success"
              ? "border-green-500/50 bg-green-500/10 text-green-600 dark:text-green-400"
              : "border-red-500/50 bg-red-500/10 text-red-600 dark:text-red-400"
          }`}
        >
          <p className="text-sm">{submitStatus.message}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-orange-500 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold text-white transition hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed shadow-[var(--shadow-soft)]"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}


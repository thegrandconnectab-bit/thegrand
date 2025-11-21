import Image from "next/image";
import { ContactForm } from "../../components/contact-form";

export default function ContactPage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <div className="overflow-hidden rounded-2xl md:rounded-[40px]">
        <Image
          src="/img-3.png"
          alt="Elders smiling during a Grand Connect session"
          width={1800}
          height={1200}
          className="h-48 w-full object-cover hidden md:block md:h-[12rem]"
          priority
        />
      </div>

      <section className="space-y-4 md:space-y-6">
        <div className="space-y-3 md:space-y-4">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] md:tracking-[0.35em] font-bold text-orange-500">
            Get in Touch
          </p>
          <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
            We'd love to hear from you
          </h1>
          <p className="text-base md:text-lg text-[var(--text-secondary)]">
            Whether you're interested in joining a session, partnering with us, or simply want to
            learn more about The Grand Connect, we're here to help. Reach out and let's start a
            conversation.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:gap-8 md:grid-cols-2">
        <div className="space-y-4 md:space-y-6 rounded-2xl md:rounded-[32px] border border-[var(--card-border)] bg-[var(--surface)] p-6 md:p-8">
          <div className="space-y-3 md:space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-orange-500">
              Email
            </p>
            <a
              href="mailto:thegrandconnectAB@gmail.com"
              className="block break-all text-xl md:text-2xl font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition"
            >
              thegrandconnectAB@gmail.com
            </a>
            <p className="text-sm md:text-base text-[var(--text-secondary)]">
              Send us an email and we'll get back to you as soon as possible. We typically respond
              within 24-48 hours.
            </p>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6 rounded-2xl md:rounded-[32px] border border-[var(--card-border)] bg-[var(--surface)] p-6 md:p-8">
          <div className="space-y-3 md:space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-orange-500">
              Phone
            </p>
            <a
              href="tel:+918882741858"
              className="block text-xl md:text-2xl font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition"
            >
              +91 8882741858
            </a>
            <p className="text-sm md:text-base text-[var(--text-secondary)]">
              Give us a call during business hours. We're happy to answer your questions and help
              you get started with The Grand Connect.
            </p>
          </div>
        </div>

      </section>

      <section className="rounded-2xl md:rounded-[32px] border border-[var(--card-border)] bg-[var(--surface)] p-6 md:p-8 space-y-5 md:space-y-6">
        <div className="space-y-2 md:space-y-3">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] font-bold text-orange-500">
            Send us a message
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-orange-500">Contact Form</h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)]">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>
        <div className="mt-4 md:mt-6">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}


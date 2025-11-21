import Image from "next/image";

const teachings = [
  {
    label: "Curiosity",
    text: "Elders prove that curiosity has no age; they simply need a patient bridge.",
  },
  {
    label: "Compassion",
    text: "Teaching technology becomes a lesson in empathy for younger mentors.",
  },
  {
    label: "Shared progress",
    text: "Real innovation happens when wisdom and youthful energy co-create.",
  },
];

export default function FounderPage() {
  return (
    <div className="space-y-16">
      <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="rounded-[32px] border border-[var(--card-border)] bg-[var(--surface)] p-8 shadow-[var(--shadow-soft)]">
          <Image
            src="/founder-img.jpeg"
            alt="Arshi Bansal smiling"
            width={900}
            height={1200}
            className="h-96 w-full rounded-2xl object-cover"
            priority
          />
          <p className="text-sm uppercase tracking-[0.3em] font-bold text-orange-500 mt-6">
            Founder's Message
          </p>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
          “Every time an elder masters a new skill, it proves that curiosity has no age—and that learning is the most powerful bridge between generations.”
          </p>
          <p className="mt-6 text-sm text-[var(--text-tertiary)]">— Arshi Bansal</p>
          <div className="mt-6 pt-6 border-t border-[var(--card-border)]">
            <p className="text-sm text-[var(--text-tertiary)]">Contact</p>
            <a
              href="mailto:thegrandconnectAB@gmail.com"
              className="mt-2 inline-block text-base font-medium text-[var(--accent)] hover:underline"
            >
              thegrandconnectAB@gmail.com
            </a>
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] font-bold text-orange-500">
            Founder
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            "Every time an elder masters a new skill, it proves that curiosity has no age."
          </h1>
          <p className="text-lg text-[var(--text-secondary)]">
            Hi, I'm Arshi Bansal, the founder of The Grand Connect. This initiative began with a simple realization — that while the world is racing ahead with innovation, the real progress lies in how we bring everyone along, especially those who once guided us through life.
          </p>
          <p className="text-lg text-[var(--text-secondary)]">
            The Grand Connect is my tribute to the elders of our society — to their resilience, wisdom, and grace. It's also a reminder to my generation that respect, patience, and integrity are not outdated values; they are the foundation of meaningful progress.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {teachings.map((item) => (
          <article
            key={item.label}
            className="space-y-3 rounded-2xl border border-[var(--card-border)] bg-[var(--surface-strong)] p-6"
          >
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-orange-500">
              Lesson
            </p>
            <h2 className="text-2xl font-semibold">{item.label}</h2>
            <p className="text-[var(--text-secondary)]">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="rounded-[32px] border border-[var(--card-border)] bg-[var(--surface)] p-8 space-y-6">
        <p className="text-lg text-[var(--text-secondary)]">
          While my dream of establishing the E4D Lab (Engineering for Development) — a hub for innovations designed to make seniors' lives easier — is still in its early stages, it remains a core part of my vision.
        </p>
        <p className="text-lg text-[var(--text-secondary)]">
          To further expand the horizons of The Grand Connect, I aim to integrate E4D into its system as a space where retired science teachers, engineers, and researchers can collaborate with curious and creative youth. Together, they can transform ideas into real innovations — blending experience with energy, wisdom with wonder, and compassion with creation.
        </p>
        <p className="text-lg text-[var(--text-secondary)]">
          For now, The Grand Connect stands as the first step in that journey — uniting the young and the old, teaching both to see the best in each other through teaching for technology. Because in teaching our elders, we don't just give knowledge — we receive wisdom.
        </p>
      </section>

      <section className="rounded-3xl border border-[var(--card-border)] bg-[var(--surface)] p-8">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-orange-500">Message to families</h2>
            <p className="text-lg text-[var(--text-secondary)]">
              Bring your grandparents. Bring your children. Bring the recipes, poems, lullabies, and folk tales that
              raised you. We will wrap them in technology gently so they travel farther, stay safer, and feel more loved.
              That is the promise of The Grand Connect.
            </p>
            <p className="text-lg text-[var(--text-secondary)]">
              Because every time we teach our elders, we don’t just give knowledge—we receive wisdom, patience, and
              reminders of who we are meant to be.
            </p>
          </div>
          <Image
            src="/award.jpeg"
            alt="Community recognition for Grand Connect"
            width={1100}
            height={800}
            className="h-72 w-full rounded-3xl object-cover md:h-80 lg:h-96"
            priority
          />
        </div>
      </section>
    </div>
  );
}


import Image from "next/image";

const testimonialVideos = [
  {
    title: "Confidence in a Call",
    link: "https://drive.google.com/file/d/1KWoLWziNooRE7YmyIVgGwjJZ3Gs6UHSd/view?usp=drive_link",
  },
  {
    title: "Youth Mentor Reflection",
    link: "https://drive.google.com/file/d/1wliJnWu0nHGJ6-ORZ8wjjZp1Q1NAVcKt/view?usp=drive_link",
  },
  {
    title: "Sukhad Circle Voices",
    link: "https://drive.google.com/file/d/1z6MkcRL4ZTEjyPp2N3CrLnt65efax1ah/view?usp=drive_link",
  },
  {
    title: "Families on Trust",
    link: "https://drive.google.com/file/d/1RyCnonMx-v47bHnDHbYzayZtONRoHqzL/view?usp=drive_link",
  },
  {
    title: "Why Elders Show Up",
    link: "https://drive.google.com/file/d/1xO7EWw92ICv-4NS35MkiX5TFHU78KxdL/view?usp=drive_link",
  },
];

export default function PartnersPage() {
  return (
    <div className="space-y-16">
      <section className="grid gap-8 rounded-[32px] border border-[var(--card-border)] bg-[var(--surface)] p-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-orange-500">Featured ally</p>
          <h2 className="text-3xl font-bold text-[var(--text-primary)]">Humari Pahchan NGO</h2>
          <p className="text-[var(--text-secondary)]">
            Based in Delhi, Humari Pahchan empowers under-resourced communities through education, skill development,
            menstrual hygiene access, and food security. Their initiatives—Drishti, Sukhad, and more—have helped
            thousands build dignified, self-reliant identities.
          </p>
          <ul className="space-y-3 text-[var(--text-secondary)]">
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
              <span>Integrating TGC sessions inside their community centers.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
              <span>Co-designing Sukhad awareness circles that pair digital literacy with health education.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
              <span>Connecting retired educators from their volunteer base to mentor young facilitators.</span>
            </li>
          </ul>
          <a
            href="https://hamaripahchan.org/contact/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] underline"
          >
            Learn more about Humari Pahchan
          </a>
        </div>
        <div className="flex items-center justify-center rounded-3xl border border-[var(--card-border)] bg-[var(--surface-strong)] p-6">
          <Image
            src="/hp-logo.png"
            alt="Humari Pahchan NGO logo"
            width={420}
            height={260}
            className="h-auto w-[320px] object-contain"
            priority
          />
        </div>
      </section>

      <section className="space-y-6 rounded-[32px] border border-[var(--card-border)] bg-[var(--surface)] p-8">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-orange-500">Testimonial reels</p>
          <h2 className="text-3xl font-bold text-[var(--text-primary)]">Stories from the field</h2>
          <p className="text-[var(--text-secondary)]">
            Humari Pahchan captured families, facilitators, and elders speaking about our joint work.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonialVideos.map((video) => (
            <a
              key={video.link}
              href={video.link}
              target="_blank"
              rel="noreferrer"
              className="flex h-40 flex-col justify-between rounded-2xl border border-[var(--card-border)] bg-[var(--surface-strong)] p-4 transition hover:border-[var(--accent)]"
            >
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] font-bold text-orange-500">Video testimonial</p>
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">{video.title}</h3>
              </div>
              <span className="text-sm font-medium text-[var(--accent)]">Watch video ↗</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}


import Image from "next/image";

const timeline = [
  {
    title: "Day 01 · Longing",
    detail:
      "From the States, I hear my grandmother ask for help placing a call—gentle, persistent, and a little nervous.",
  },
  {
    title: "Day 02 · First Attempt",
    detail:
      "She watches the steps, repeats them softly, and with each button press you can feel both curiosity and fear.",
  },
  {
    title: "Day 03 · Breakthrough",
    detail:
      "She dials every digit on her own. When the overseas ring tone plays, her smile says, “I did it.”",
  },
];

const observations = [
  {
    label: "What elders want",
    text: "Not shortcuts—just patient partners who trust they can learn.",
  },
  {
    label: "What youth rediscover",
    text: "That speed is optional; compassion is non-negotiable.",
  },
  {
    label: "What families gain",
    text: "Shared rituals that keep wisdom and new tools in the same room.",
  },
];

export function BackgroundStory() {
  return (
    <div className="space-y-16">
      <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] font-bold text-orange-500">
            Background
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            The Grand Connect was born from longing, love, and a phone call.
          </h1>
          <p className="text-lg text-[var(--text-secondary)]">
            During a fifteen-day trip to the United States, distance had never felt
            heavier. My grandmother wanted to hear my voice. She asked my family
            multiple times to help her place an international call. Each attempt
            felt complicated, but her determination never faded. By the third try,
            she proudly did it herself. That small victory changed how I see
            technology, aging, and patience forever.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-[var(--card-border)] bg-[var(--surface-strong)] shadow-[var(--shadow-soft)]">
          <Image
            src="/img-1.jpeg"
            alt="Grandparents enjoying a Grand Connect session"
            width={1200}
            height={900}
            className="h-[28rem] w-full object-cover"
            priority
          />
        </div>
      </section>

      <section className="space-y-4">
        <div className="space-y-2 text-center">
          <p className="text-sm uppercase tracking-[0.35em] font-bold text-orange-500">
            Grand Connect in the community
          </p>
          <h2 className="text-3xl font-semibold text-[var(--text-primary)]">
            Smiles from our intergenerational circles
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Each cohort ends with stories, hugs, and proud photo-ops. This capture from our latest circle reminds us why
            we do the work: elders beaming with confidence while the youth beam with gratitude.
          </p>
        </div>
        <Image
          src="/img-3.png"
          alt="Elders smiling during a Grand Connect session"
          width={1800}
          height={1200}
          className="w-full rounded-[40px] object-cover"
          priority
        />
      </section>

      <section className="grid gap-6 rounded-3xl border border-[var(--card-border)] bg-[var(--surface)] p-8 md:grid-cols-3">
        {observations.map((item) => (
          <article
            key={item.label}
            className="rounded-2xl border border-[var(--card-border)] bg-[var(--surface-strong)] p-6"
          >
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-orange-500">
              {item.label}
            </p>
            <p className="mt-4 text-base text-[var(--text-secondary)]">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold md:text-4xl text-orange-500">The trip journal</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {timeline.map((item) => (
            <article
              key={item.title}
              className="space-y-3 rounded-2xl border border-[var(--card-border)] bg-[var(--surface-strong)] p-6"
            >
              <p className="text-sm font-semibold text-[var(--text-secondary)]">
                {item.title}
              </p>
              <p className="text-[var(--text-secondary)]">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-[32px] border border-[var(--card-border)] bg-[var(--surface)] p-8">
        <h2 className="text-3xl font-bold text-orange-500">What that moment revealed</h2>
        <ul className="space-y-4 text-[var(--text-secondary)]">
          <li className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
            <span>
              Our elders are not resistant to technology—they simply have not been
              invited in with tenderness.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
            <span>
              The youth crave ways to serve beyond screens; mentoring elders is a
              masterclass in empathy.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
            <span>
              Families need shared experiences where values, stories, and tech
              skills meet in the same circle.
            </span>
          </li>
        </ul>
        <p className="text-lg text-[var(--text-secondary)]">
          The Grand Connect is the answer to that revelation—a bridge where
          patient teaching, joyful learning, and intergenerational healing belong
          together.
        </p>
      </section>
    </div>
  );
}


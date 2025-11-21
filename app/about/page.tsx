import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <section className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] font-bold text-orange-500">
            About TGC
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            A community classroom where elders and youth learn to listen again.
          </h1>
          <p className="text-lg text-[var(--text-secondary)]">
            The Grand Connect exists to reopen the dialogue between generations. We
            design interactive experiences where grandparents experiment with digital
            tools while the youth relearn patience, reverence, and gratitude. Teaching
            becomes an act of love; learning becomes an act of courage.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-[var(--card-border)] shadow-[var(--shadow-soft)]">
          <Image
            src="/img-1.jpeg"
            alt="Grandmother learning with younger mentor"
            width={1200}
            height={800}
            className="h-96 w-full object-cover"
            priority
          />
        </div>
      </section>

      <section className="rounded-[32px] border border-[var(--card-border)] bg-[var(--surface)] p-6 space-y-6">
        <h2 className="text-3xl font-bold text-orange-500">Message to families</h2>
        <p className="text-lg text-[var(--text-secondary)]">
          Bring your grandparents. Bring your children. Bring the recipes, poems, lullabies, and folk tales that raised
          you. We will wrap them in technology gently so they travel farther, stay safer, and feel more loved. That is
          the promise of The Grand Connect.
        </p>
        <div className="rounded-2xl border border-[var(--card-border)] bg-white/95 p-4">
          {/* Mobile: Show button to open PDF in new tab */}
          <div className="block md:hidden">
            <a
              href="/card.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-orange-500 bg-orange-500 px-6 py-4 text-lg font-bold text-white transition hover:bg-orange-600 shadow-[var(--shadow-soft)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
              View Program Card
            </a>
          </div>

          {/* Desktop: Show embedded PDF */}
          <div className="hidden md:block">
            <iframe
              src="/card.pdf#toolbar=0&navpanes=0&scrollbar=0"
              title="Grand Connect program card"
              className="h-[720px] w-full rounded-xl border border-[var(--card-border)]"
            />
          </div>

          <p className="mt-4 text-sm text-[var(--text-secondary)]">
            Having trouble viewing?{" "}
            <a href="/card.pdf" target="_blank" rel="noopener noreferrer" className="underline text-[var(--accent)]">
              Download the card
            </a>{" "}
            instead.
          </p>
        </div>
      </section>

    </div>
  );
}


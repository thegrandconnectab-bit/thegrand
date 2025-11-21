export default function FundraiserPage() {
  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] font-bold text-orange-500">
            Support Our Mission
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            Project GRAND-CONNECT Fundraiser
          </h1>
          <p className="text-lg text-[var(--text-secondary)]">
            Help us bridge the digital divide for our senior citizens. Your contribution supports
            essential smartphone training, digital literacy programs, and meaningful innovations
            that empower grandparents to connect with family, access digital tools, and engage
            confidently with the modern world.
          </p>
        </div>
      </section>

      <section className="rounded-[32px] border border-[var(--card-border)] bg-[var(--surface)] p-8 space-y-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-orange-500">Make a Difference</h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Project GRAND-CONNECT is a transformative initiative launched in collaboration with
            Hamari Pahchan NGO. More than just digital literacy, this initiative fosters emotional
            connection, independence, and inclusion for our elders.
          </p>
          <p className="text-lg text-[var(--text-secondary)]">
            Guided by the belief that "where science meets hope, good things are formed," your
            support helps us develop meaningful innovations for senior-friendly technology.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <a
            href="https://milaap.org/fundraisers/arshibansal-1?utm_medium=campaign_page_share&utm_source=copy"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-lg font-bold text-white transition hover:bg-orange-600 shadow-[var(--shadow-soft)]"
          >
            Donate Now
            <span className="text-xl">→</span>
          </a>
          <p className="text-sm text-[var(--text-tertiary)]">
            Your donation will be processed securely through Milaap. 100% of contributions go
            directly to supporting Project GRAND-CONNECT.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <article className="space-y-3 rounded-2xl border border-[var(--card-border)] bg-[var(--surface-strong)] p-6">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-orange-500">
            Impact
          </p>
          <h3 className="text-2xl font-semibold">Empower Elders</h3>
          <p className="text-[var(--text-secondary)]">
            Help grandparents learn essential smartphone skills to stay connected with family and
            access digital services confidently.
          </p>
        </article>
        <article className="space-y-3 rounded-2xl border border-[var(--card-border)] bg-[var(--surface-strong)] p-6">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-orange-500">
            Community
          </p>
          <h3 className="text-2xl font-semibold">Bridge Generations</h3>
          <p className="text-[var(--text-secondary)]">
            Support intergenerational learning where youth teach with patience and elders learn with
            courage.
          </p>
        </article>
        <article className="space-y-3 rounded-2xl border border-[var(--card-border)] bg-[var(--surface-strong)] p-6">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-orange-500">
            Innovation
          </p>
          <h3 className="text-2xl font-semibold">Build the Future</h3>
          <p className="text-[var(--text-secondary)]">
            Contribute to developing senior-friendly technology that makes digital tools accessible
            and intuitive for all ages.
          </p>
        </article>
      </section>
    </div>
  );
}


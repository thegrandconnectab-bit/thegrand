const portraitVideoSources = [
  {
    title: "Session highlight #1",
    description: "Elders learning foundational smartphone gestures with youth mentors.",
    youtubeId: "1le3juP8UAw",
  },
  {
    title: "Session highlight #2",
    description: "Field recap on documenting breakthroughs during rural maker days.",
    youtubeId: "XFxG4yya5MM",
  },
  {
    title: "Session highlight #3",
    description: "Grandparents walking through their first voice-note journaling exercise.",
    youtubeId: "KycminUBWxY",
  },
  {
    title: "Session highlight #4",
    description: "Snapshot of an intergenerational design sprint in action.",
    youtubeId: "GfkqKsAzBf4",
  },
  {
    title: "Session highlight #5",
    description: "Community health volunteers reflecting on digital care logs.",
    youtubeId: "4m4YZzAKnjE",
  },
  {
    title: "Session highlight #6",
    description: "Behind the scenes of our storytelling wall installs.",
    youtubeId: "W96oi_OcQC8",
  },
  {
    title: "Session highlight #7",
    description: "Documenting family commitments after a Grand Connect lab.",
    youtubeId: "1BVOkwzO4ls",
  },
  {
    title: "Watch on YouTube",
    description: "Catch a glimpse of our recent sessions and see the impact The Grand Connect is making.",
    youtubeId: "HHXVxvkbtMI",
  },
  {
    title: "Volunteer Voices",
    description: "Hear from volunteers about the joy of connecting across generations.",
    youtubeId: "cFKebVeJNMQ",
  },
  {
    title: "Moments of Laughter",
    description: "See the smiles and laughter that fill our regular meetups.",
    youtubeId: "teA4CGwMksA",
  },
  {
    title: "Shared Stories",
    description: "Listen to elders and youth swap heartfelt memories in our circles.",
    youtubeId: "teA4CGwMksA",
  },
  {
    title: "Creative Sessions",
    description: "Take a peek at our art and storytelling activities in action.",
    youtubeId: "OM_V8cwPLBg",
  },
  {
    title: "Creative Sessions (alt cut)",
    description: "Alternate highlights from the same vibrant art workshop.",
    youtubeId: "OM_V8cwPLBg",
  },
  {
    title: "Celebrating Connections",
    description: "Highlights from our intergenerational celebrations and cultural events.",
    youtubeId: "RkdZ6KmhylY",
  },
  {
    title: "Celebrations Extended",
    description: "More moments from our festive cultural gatherings.",
    youtubeId: "RkdZ6KmhylY",
  },
  {
    title: "Impact Snapshot",
    description: "Quick look at how our participants feel after each meetup.",
    youtubeId: "VoMt3Ua_wjY",
  },
];

const portraitVideos = Array.from(
  new Map(portraitVideoSources.map((video) => [video.youtubeId, video])).values(),
);

export default function WorkPage() {
  return (
    <div className="space-y-16">
      <section className="space-y-6 rounded-[32px] border border-[var(--card-border)] bg-[var(--surface)] p-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] font-bold text-orange-500">Grand Connect sessions</p>
          <h2 className="text-3xl font-bold text-[var(--text-primary)]">Portrait shorts from the field</h2>
          <p className="text-[var(--text-secondary)]">
            Watch highlights from our recent sessions—elders trying new tools, youth documenting breakthroughs, and
            families sharing what changed at home. Each reel streams directly from YouTube Shorts.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {portraitVideos.map((video, index) => (
            <div
              key={`${video.youtubeId}-${index}`}
              className="space-y-3 rounded-2xl border border-[var(--card-border)] bg-[var(--surface-strong)] p-4"
            >
              <p className="text-xs uppercase tracking-[0.3em] font-bold text-orange-500">Grand Connect session</p>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">{video.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{video.description}</p>
              </div>
              <div className="overflow-hidden rounded-xl border border-[var(--card-border)]">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-[320px] w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-[32px] border border-[var(--card-border)] bg-[var(--surface)] p-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] font-bold text-orange-500">Feedback reels</p>
          <h2 className="text-3xl font-bold text-[var(--text-primary)]">What communities are saying</h2>
          <p className="text-[var(--text-secondary)]">
            Short feedback snippets straight from the ground—mentors, families, and elders capturing how Grand Connect
            labs changed their routines.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { title: "Feedback #1", embed: "https://www.youtube.com/embed/1icP8K8UVfM" },
            { title: "Feedback #2", embed: "https://www.youtube.com/embed/hcjwxoJwimQ" },
          ].map((video) => (
            <div
              key={video.embed}
              className="space-y-3 rounded-2xl border border-[var(--card-border)] bg-[var(--surface-strong)] p-4"
            >
                <p className="text-xs uppercase tracking-[0.3em] font-bold text-orange-500">Community feedback</p>
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">{video.title}</h3>
              <div className="overflow-hidden rounded-xl border border-[var(--card-border)]">
                <iframe
                  src={`${video.embed}?rel=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-[320px] w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}


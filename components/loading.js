export function FullPageLoading({ text = "" }) {
  const label = text.trim() || "LOADING";
  const chars = [...label];
  const caretDelay = `${chars.length * 60 + 250}ms`;

  return (
    <div
      role="status"
      aria-live="polite"
      className="relative flex h-screen w-full select-none flex-col items-center justify-center overflow-hidden bg-[var(--background)] text-[var(--foreground)]"
    >
      <span className="sr-only">
        {text ? `Redirecting to ${label}` : "Loading"}
      </span>

      {/* atmosphere */}
      <div aria-hidden="true" className="fpl-grid fpl-in" />

      {/* viewfinder frame */}
      <div aria-hidden="true" className="fpl-frame fpl-in">
        <span className="absolute left-0 top-0 size-3.5 border-l border-t" />
        <span className="absolute right-0 top-0 size-3.5 border-r border-t" />
        <span className="absolute bottom-0 left-0 size-3.5 border-b border-l" />
        <span className="absolute bottom-0 right-0 size-3.5 border-b border-r" />
      </div>

      {/* microtype */}
      <p aria-hidden="true" className="fpl-micro fpl-in absolute left-11 top-11">
        gsw85.com
      </p>
      <p
        aria-hidden="true"
        className="fpl-micro fpl-in absolute bottom-11 right-11"
      >
        external&nbsp;↗
      </p>

      {/* stage */}
      <p
        aria-hidden="true"
        className="fpl-kicker fpl-in flex items-center gap-2.5"
      >
        <span className="fpl-dot" />
        in transit
      </p>
      <h1 aria-hidden="true" className="fpl-word uppercase">
        {chars.map((ch, i) => (
          <span key={i} className="fpl-ch" style={{ "--i": i }}>
            {ch}
          </span>
        ))}
        <span className="fpl-caret" style={{ "--caret-delay": caretDelay }} />
      </h1>
      <div aria-hidden="true" className="fpl-track fpl-in">
        <span className="fpl-sweep" />
      </div>
    </div>
  );
}
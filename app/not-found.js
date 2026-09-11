import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex h-screen w-full select-none items-center justify-center overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
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
        status 404
      </p>

      <main className="text-left">
        <p
          aria-hidden="true"
          className="fpl-kicker fpl-in flex items-center gap-2.5"
        >
          <span className="nf-dot" />
          lost in transit
        </p>
        <h1 className="nf-code" aria-label="Error 404, page not found">
          <span className="fpl-ch" style={{ "--i": 0 }}>
            4
          </span>
          <span className="fpl-ch nf-zero" style={{ "--i": 1 }}>
            Ø
          </span>
          <span className="fpl-ch" style={{ "--i": 2 }}>
            4
          </span>
          <span className="fpl-caret" style={{ "--caret-delay": "430ms" }} />
        </h1>
        <p className="nf-lede fpl-in fpl-in-late">
          This route doesn&rsquo;t stop here.
        </p>
        <Link href="/" className="nf-btn fpl-in fpl-in-late">
          ← return to HOME
        </Link>
      </main>
    </div>
  );
}

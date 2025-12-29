// src/components/NewsSidebar.tsx
import React, { useEffect, useRef, useState } from "react";

type Item = { id: number; title: string; tag?: string; url?: string };

const INITIAL: Item[] = [
  { id: 1, title: "Uttar Pradesh State Counselling 2026 Session", tag: "NEW" },
  { id: 2, title: "Haryana State Counselling 2026 Session", tag: "NEW" },
  { id: 3, title: "Bihar State Counselling 2026 Session", tag: "NEW" },
  { id: 4, title: "Jharkhand State Counselling 2026 Session", tag: "NEW" },
];

export default function NewsSidebar({
  visibleCount = 3,
  speed = 40, // pixels per second; increase to speed up
}: {
  visibleCount?: number;
  speed?: number;
}) {
  const [items, setItems] = useState<Item[]>(INITIAL);
  const [offset, setOffset] = useState(0); // current pixel offset
  const itemHeight = 80; // px — adjust to match your CSS (padding/border included)
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const hoverRef = useRef(false);

  // start animation
  useEffect(() => {
    lastTimeRef.current = performance.now();
    function loop(time: number) {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const dt = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (!hoverRef.current) {
        setOffset((prevOffset) => {
          let newOffset = prevOffset + (speed * dt) / 1000;
          // when one row scrolled fully
          if (newOffset >= itemHeight) {
            // move first item to end and reduce offset by itemHeight
            setItems((prev) => {
              if (prev.length === 0) return prev;
              const [first, ...rest] = prev;
              return [...rest, first]; // first goes to bottom (so it will enter from bottom)
            });
            newOffset = newOffset - itemHeight;
          }
          return newOffset;
        });
      }

      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTimeRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speed, itemHeight]);

  // manual prev/next (optional)
  const prev = () => {
    // bring last item to front visually: convert items accordingly
    setItems((prev) => {
      if (prev.length <= 1) return prev;
      const last = prev[prev.length - 1];
      const rest = prev.slice(0, prev.length - 1);
      return [last, ...rest];
    });
    // ensure offset remains same so no jump
    setOffset(0);
  };
  const next = () => {
    // simulate immediate single-step scroll (move first to end)
    setItems((prev) => {
      if (prev.length <= 1) return prev;
      const [first, ...rest] = prev;
      return [...rest, first];
    });
    setOffset(0);
  };

  return (
    <aside className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-slate-900 font-semibold">State Counselling</h3>

        <div className="hidden md:flex gap-2">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full border bg-white"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="w-9 h-9 rounded-full border bg-white"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>

      <div
        className="relative overflow-hidden"
        style={{ height: itemHeight * visibleCount }}
        onMouseEnter={() => (hoverRef.current = true)}
        onMouseLeave={() => (hoverRef.current = false)}
      >
        <div
          style={{
            transform: `translateY(-${offset}px)`,
            transition: "transform linear 0s",
          }}
        >
          {items.map((it) => (
            <div
              key={it.id}
              className="flex items-center justify-between gap-4 border-b px-3"
              style={{ height: itemHeight }}
            >
              <div>
                {it.tag && <div className="text-xs text-pink-600 font-semibold mb-1">{it.tag}</div>}
                <a href={it.url ?? "#"} className="text-sm text-blue-700 hover:underline">
                  {it.title}
                </a>
              </div>
              <div>
                <button
                  onClick={() => (window.location.href = "/contact")}
                  className="px-3 py-1 rounded-full border text-sm"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

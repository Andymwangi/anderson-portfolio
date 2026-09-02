/** Minimal shell while a route segment streams in; keeps the canvas colour so no theme flash occurs. */
export default function Loading() {
  return <div className="fixed inset-0 z-40 bg-canvas" aria-hidden />;
}

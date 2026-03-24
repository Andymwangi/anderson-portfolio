/** Minimal shell so Suspense never mounts a second greeting (see PageWrapper + AppLoaderManager). */
export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-40 bg-[#0D0D0D]"
      aria-hidden
    />
  );
}

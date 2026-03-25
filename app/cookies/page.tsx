import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal-page-shell";
import { SITE_METADATA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cookie & storage notice — Anderson Mwangi",
  description:
    "How this portfolio site uses browser storage and cookies: theme preference, visitor counter session entry; no analytics or advertising cookies.",
};

const lastUpdated = "25 March 2026";

export default function CookiesPage() {
  return (
    <LegalPageShell
      sectionLabel="/// Cookies"
      titleLine="Cookie &"
      titleAccent="storage"
      intro="This portfolio keeps things minimal: there are no analytics or ad cookies. Here is what your browser may store when you use the site."
      lastUpdated={lastUpdated}
    >
      <h2>Summary</h2>
      <p>
        This website is a static portfolio with a contact form. It does not load third-party advertising or analytics
        scripts that set tracking cookies. Your browser may store your theme choice and, for the current session only, the
        visitor number shown in the footer — both locally on your device as described below.
      </p>

      <h2>Visitor counter (session storage)</h2>
      <p>
        If the footer shows &quot;You are visitor #…&quot;, your browser stores that number in{" "}
        <strong>sessionStorage</strong> (under a key such as <code>anderson-portfolio-visitor-count</code>) so that
        moving between pages on this site in the same tab or session does not send another increment request every time.
        Session storage is cleared when you close the tab or browser session (behaviour varies slightly by browser).
      </p>
      <p>
        The increment itself is handled by this site&apos;s server, which may use a third-party counting service to hold
        the running total. That is not a marketing cookie on your device; it is an aggregate count. See the{" "}
        <a href="/privacy">privacy policy</a> for what that means in practice.
      </p>

      <h2>Theme preference (local storage)</h2>
      <p>
        The site uses <strong>next-themes</strong> to remember whether you selected light or dark mode. That setting is
        typically stored in <strong>localStorage</strong> under the key <code>theme</code> (and related keys the library
        uses). It is not used to identify you across the web and is not sent to the site owner when you simply browse
        pages.
      </p>
      <p>
        You can clear it anytime through your browser&apos;s settings (clear site data / local storage for this domain).
      </p>

      <h2>HTTP cookies</h2>
      <p>
        Routine operation of the hosting platform or framework may set technical cookies for performance, security, or
        routing. This site does not intentionally set additional cookies for marketing or cross-site tracking. If you
        notice a specific cookie you are concerned about, contact the address below and it can be reviewed against the
        current deployment.
      </p>

      <h2>Contact form</h2>
      <p>
        Submitting the contact form does not rely on advertising cookies. Your message is processed as described in the{" "}
        <a href="/privacy">privacy policy</a>.
      </p>

      <h2>External sites</h2>
      <p>
        If you follow links to GitHub, LinkedIn, X, or other services, those sites may set their own cookies and storage
        according to their policies.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this notice:{" "}
        <a href={`mailto:${SITE_METADATA.email}`}>{SITE_METADATA.email}</a>.
      </p>
    </LegalPageShell>
  );
}

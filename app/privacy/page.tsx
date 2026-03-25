import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal-page-shell";
import { SITE_METADATA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy policy — Anderson Mwangi",
  description:
    "How this portfolio website handles information when you browse, use the contact form, and interact with linked services.",
};

const lastUpdated = "25 March 2026";

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      sectionLabel="/// Privacy"
      titleLine="Privacy"
      titleAccent="policy"
      intro="Plain-language summary of what this portfolio site collects, why, and how you can reach out about your information."
      lastUpdated={lastUpdated}
    >
      <h2>Who this applies to</h2>
      <p>
        This policy describes the personal portfolio website of <strong>Anderson Mwangi</strong> (the &quot;site&quot;),
        operated from <strong>{SITE_METADATA.location}</strong>. It is meant for visitors reviewing work samples, reading
        about experience and certifications, and optionally sending a message through the contact form. There are no user
        accounts, logins, or in-browser applications beyond what you see on these pages.
      </p>

      <h2>Information the contact form collects</h2>
      <p>
        If you use the contact form, you may provide your name, email address, optional phone number, and details about
        your enquiry (service interest, budget range, timeline, and a message). This information is sent to the site
        owner by email so they can respond to you. It is not used for marketing lists, sold, or shared for advertising.
      </p>
      <p>
        Do not submit confidential, regulated, or highly sensitive personal data through the form unless you have agreed
        a secure channel separately.
      </p>

      <h2>How that information is processed</h2>
      <p>
        Submissions are transmitted over HTTPS and delivered using the configured email transport (for example SMTP).
        Messages typically arrive in a private mailbox used only for professional correspondence related to this
        portfolio and client work. Retention follows normal email practice: messages are kept only as long as needed to
        respond and manage ongoing conversations, unless a longer period is required by law.
      </p>

      <h2>Browsing and technical data</h2>
      <p>
        Like most websites, hosting infrastructure may automatically log basic technical data (such as IP address,
        browser type, and request time) for security and reliability. This site does not use first-party analytics or
        advertising trackers. See the <a href="/cookies">cookies</a> page for how theme preferences are stored.
      </p>

      <h2>External links</h2>
      <p>
        The site may link to third-party profiles (for example GitHub, LinkedIn, or X). Those services have their own
        privacy policies; opening them leaves this site and their rules apply.
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>You can browse without using the contact form.</li>
        <li>You may request access to, correction of, or deletion of enquiry data tied to your email by writing to the address below, where applicable law allows.</li>
        <li>You can clear site-related storage from your browser; see the cookies page for the theme preference and visitor counter session entry.</li>
      </ul>

      <h2>Contact</h2>
      <p>
        Questions about this policy or your data:{" "}
        <a href={`mailto:${SITE_METADATA.email}`}>{SITE_METADATA.email}</a>.
      </p>
    </LegalPageShell>
  );
}

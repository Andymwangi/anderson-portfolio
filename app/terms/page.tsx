import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal-page-shell";
import { SITE_METADATA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of use — Anderson Mwangi",
  description:
    "Terms for using this personal portfolio website: acceptable use, intellectual property, disclaimers, and limitations.",
};

const lastUpdated = "25 March 2026";

export default function TermsOfUsePage() {
  return (
    <LegalPageShell
      sectionLabel="/// Terms"
      titleLine="Terms of"
      titleAccent="use"
      intro="Rules and expectations for visiting this portfolio, using its content, and using the contact form. This is a personal site, not a commercial platform."
      lastUpdated={lastUpdated}
    >
      <h2>Agreement</h2>
      <p>
        By using this website you agree to these terms. If you do not agree, please stop using the site. The site is
        operated by <strong>Anderson Mwangi</strong> as a professional portfolio.
      </p>

      <h2>What this site is</h2>
      <p>
        The site presents career information, project highlights, and a way to initiate contact. It does not provide a
        hosted product, subscription, or guaranteed response time. Nothing on the site constitutes an offer to contract
        until you and the site owner explicitly agree (for example by signing an engagement or statement of work).
      </p>

      <h2>Acceptable use</h2>
      <ul>
        <li>Do not attempt to disrupt, overload, or break the site or its infrastructure.</li>
        <li>Do not use automated scraping at a scale that impairs service or bypasses normal browsing.</li>
        <li>Do not submit unlawful, harassing, or malicious content through the contact form.</li>
      </ul>

      <h2>Intellectual property</h2>
      <p>
        Text, layout, branding, and original imagery on this site are owned by Anderson Mwangi unless otherwise noted.
        Project descriptions may reference client or third-party materials; rights in those materials remain with their
        respective owners. You may link to public pages; copying large portions of the site or passing work off as your
        own is not allowed without permission.
      </p>

      <h2>Accuracy and third-party links</h2>
      <p>
        Content reflects experience at the time of writing and may be updated without notice. Links to external sites are
        for convenience; the site owner is not responsible for their content or availability.
      </p>

      <h2>Security and professional topics</h2>
      <p>
        Cybersecurity and engineering topics here are general and educational in context. They are not tailored security
        or legal advice for your organisation. Engagements involving security, compliance, or production systems should
        follow a formal scope and agreement.
      </p>

      <h2>Disclaimer of warranties</h2>
      <p>
        The site is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, to the extent
        permitted by law. There is no guarantee of uninterrupted access or error-free content.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by applicable law, Anderson Mwangi is not liable for any indirect, incidental,
        special, or consequential damages arising from your use of the site or reliance on its content. Total liability
        for any claim related to the site is limited to the greater of zero or any amounts you paid specifically for
        access to this site (which is currently none for public browsing).
      </p>

      <h2>Changes</h2>
      <p>
        These terms may be updated from time to time. The &quot;Last updated&quot; date at the top of this page reflects
        the latest revision. Continued use after changes means you accept the updated terms.
      </p>

      <h2>Contact</h2>
      <p>
        For questions about these terms:{" "}
        <a href={`mailto:${SITE_METADATA.email}`}>{SITE_METADATA.email}</a>.
      </p>
    </LegalPageShell>
  );
}

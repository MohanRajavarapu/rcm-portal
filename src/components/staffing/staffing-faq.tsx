import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { staffingFaqs } from "@/content/staffing";

export function StaffingFaq() {
  return (
    <section className="section-alt border-t border-[var(--border-subtle)]">
      <div className="page-section grid gap-8 py-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow-label">Staffing questions</p>
          <h2 className="mt-2 text-3xl">Who employs whom, and who can see data.</h2>
          <p className="mt-3 leading-[1.6] text-fg-muted">
            These answers are for workforce buyers. RCM operating FAQs live on the provider side of
            the site.
          </p>
          <Link href="/staffing/compliance" className="link-quiet mt-4 inline-flex text-sm underline-offset-4 hover:underline">
            Compliance & risk details
          </Link>
        </div>
        <Accordion>
          {staffingFaqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="text-base text-fg">{faq.question}</AccordionTrigger>
              <AccordionContent className="leading-[1.6] text-fg-muted">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

import Link from "next/link";

export function WhoWeAreLeadership() {
  return (
    <section className="section-alt border-t border-slate-200" aria-label="Who we are and leadership">
      <div className="page-section py-8 md:py-12">
        <p className="eyebrow-label text-center">Who we are &amp; leadership</p>
        <h2 className="mt-2 text-center text-3xl text-[#0F172A] sm:text-4xl">
          Built on Precision, Led by Healthcare Veterans
        </h2>
        <ul className="mt-8 grid items-stretch gap-4 sm:grid-cols-3">
          {[
            {
              title: "Mission",
              body: "To maximize clean-claim yields and accelerate cash flow for US healthcare organizations through cutting-edge AI and expert operational execution.",
            },
            {
              title: "Vision",
              body: "To be the premiere end-to-end partner for healthcare revenue cycle management and specialized operational staffing.",
            },
            {
              title: "Core Values",
              body: "Uncompromising HIPAA Compliance, 98%+ Accuracy Precision, and Transparent Client Partnership.",
            },
          ].map((item) => (
            <li
              key={item.title}
              className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <h3 className="text-xl text-[#0F172A]">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-[#475569]">{item.body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-8 text-center">
          <p className="eyebrow-label">Executive leadership</p>
          <p className="mx-auto mt-3 max-w-[65ch] text-base leading-7 text-[#475569]">
            Driven by RCM operators and healthcare staffing specialists with decades of combined
            experience managing billing cycles, first-pass resolutions, and provider growth.
          </p>
          <Link href="/about/leadership" className="btn-secondary mt-6 inline-flex h-11 px-6 text-sm">
            Meet Our Leadership Team →
          </Link>
        </div>
      </div>
    </section>
  );
}

function EpicLogo() {
  return (
    <svg viewBox="0 0 120 32" className="h-8 w-auto" aria-label="Epic">
      <rect width="120" height="32" rx="6" fill="#181A20" stroke="rgba(255,255,255,0.08)" />
      <text x="60" y="21" textAnchor="middle" fill="#E0E0E0" fontSize="13" fontWeight="700" fontFamily="system-ui,sans-serif">
        EPIC
      </text>
    </svg>
  );
}

function AthenaLogo() {
  return (
    <svg viewBox="0 0 160 32" className="h-8 w-auto" aria-label="Athenahealth">
      <rect width="160" height="32" rx="6" fill="#181A20" stroke="rgba(255,255,255,0.08)" />
      <text x="80" y="21" textAnchor="middle" fill="#00E5FF" fontSize="11" fontWeight="600" fontFamily="system-ui,sans-serif">
        athenahealth
      </text>
    </svg>
  );
}

function CernerLogo() {
  return (
    <svg viewBox="0 0 120 32" className="h-8 w-auto" aria-label="Cerner">
      <rect width="120" height="32" rx="6" fill="#181A20" stroke="rgba(255,255,255,0.08)" />
      <text x="60" y="21" textAnchor="middle" fill="#E0E0E0" fontSize="12" fontWeight="700" fontFamily="system-ui,sans-serif">
        CERNER
      </text>
    </svg>
  );
}

function EclinicalworksLogo() {
  return (
    <svg viewBox="0 0 180 32" className="h-8 w-auto" aria-label="eClinicalWorks">
      <rect width="180" height="32" rx="6" fill="#181A20" stroke="rgba(255,255,255,0.08)" />
      <text x="90" y="21" textAnchor="middle" fill="#00E599" fontSize="10" fontWeight="600" fontFamily="system-ui,sans-serif">
        eClinicalWorks
      </text>
    </svg>
  );
}

function NextGenLogo() {
  return (
    <svg viewBox="0 0 130 32" className="h-8 w-auto" aria-label="NextGen">
      <rect width="130" height="32" rx="6" fill="#181A20" stroke="rgba(255,255,255,0.08)" />
      <text x="65" y="21" textAnchor="middle" fill="#E0E0E0" fontSize="11" fontWeight="700" fontFamily="system-ui,sans-serif">
        NextGen
      </text>
    </svg>
  );
}

function KareoLogo() {
  return (
    <svg viewBox="0 0 100 32" className="h-8 w-auto" aria-label="Kareo">
      <rect width="100" height="32" rx="6" fill="#181A20" stroke="rgba(255,255,255,0.08)" />
      <text x="50" y="21" textAnchor="middle" fill="#00E5FF" fontSize="12" fontWeight="700" fontFamily="system-ui,sans-serif">
        Kareo
      </text>
    </svg>
  );
}

const logos = [EpicLogo, AthenaLogo, CernerLogo, EclinicalworksLogo, NextGenLogo, KareoLogo];

export function EhrBanner() {
  return (
    <section className="border-b border-white/8 bg-[#121212]" aria-label="Compatible EHR systems">
      <div className="page-section py-8">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-mint uppercase">EHR integration</p>
        <p className="mt-2 text-center text-sm text-[#d1d5db]">
          We operate inside the practice-management stack you already run.
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {logos.map((Logo, index) => (
            <li key={index}>
              <Logo />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

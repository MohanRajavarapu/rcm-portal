export function containsRestrictedCandidateText(value: string) {
  return /\b(ssn|social security|date of birth|dob|mrn|patient|phi|icd-10|claim number|member id|disability|diagnosis|medical history|health condition)\b/i.test(
    value,
  );
}

export const noPhiCopy =
  "Do not include patient information, SSN, date of birth, or personal health details.";

export const noPhiFieldHint = "Do not include patient information or personal health details.";

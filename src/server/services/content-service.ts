import { company } from "@/content/company";
import { faqs, processSteps } from "@/content/faqs";
import { jobs } from "@/content/jobs";
import { services } from "@/content/services";
import { specialties } from "@/content/specialties";

export function getPublicContent() {
  return {
    company,
    services: services.map(({ slug, name, cycle, summary }) => ({
      slug,
      name,
      cycle,
      summary,
    })),
    specialties: specialties.map(({ slug, name, summary, category }) => ({
      slug,
      name,
      summary,
      category,
    })),
    jobs: jobs.map(({ id, title, team, location, type, summary }) => ({
      id,
      title,
      team,
      location,
      type,
      summary,
    })),
    process: processSteps,
    faqs,
  };
}

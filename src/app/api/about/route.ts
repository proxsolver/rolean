import { NextResponse } from "next/server";
import { PERSON, KEY_METRICS, PROJECTS, EXPLORATIONS, INTERESTS, TIMELINE } from "@/domains/profile/data";

export async function GET() {
  const profile = {
    schema: "https://rolean.org/api/about",
    version: "1.0.0",
    generatedAt: new Date().toISOString(),

    person: {
      name: PERSON.name,
      nameEn: PERSON.nameEn,
      knownAs: PERSON.knownAs,
      title: PERSON.title,
      titleKo: PERSON.titleKo,
      tagline: PERSON.tagline,
      organization: PERSON.org,
      organizationType: PERSON.orgType,
      location: PERSON.location,
      experience: PERSON.experience,
      email: PERSON.email,
      website: PERSON.website,

      domains: PERSON.domains,
      certifications: PERSON.certifications,

      keyMetrics: KEY_METRICS.map((m) => ({
        metric: m.labelEn,
        metricKo: m.label,
        value: m.value,
        context: m.context,
      })),
    },

    expertise: INTERESTS.map((i) => ({
      title: i.titleEn,
      titleKo: i.title,
      description: i.descEn,
      descriptionKo: i.desc,
      keywords: i.keywords,
    })),

    liveProjects: PROJECTS.map((p) => ({
      name: p.title,
      url: p.url,
      description: p.descriptionEn,
      descriptionKo: p.description,
      status: p.status,
      techStack: p.tags,
      impact: p.impact || null,
    })),

    explorations2026: EXPLORATIONS.map((e) => ({
      title: e.title,
      domain: e.domain,
      description: e.descriptionEn,
      descriptionKo: e.description,
      techStack: e.techStack,
      status: e.status,
      url: e.url || null,
      learnedInsight: e.learnedInsight,
    })),

    career: TIMELINE.map((t) => ({
      period: t.period,
      role: t.roleEn,
      roleKo: t.role,
      organization: t.company,
      organizationType: t.companyType,
      description: t.descriptionEn,
      descriptionKo: t.description,
      achievements: t.achievements,
    })),

    links: {
      portfolio: "https://rolean.org",
      blog: "https://news.rolean.org",
      tasks: "https://gtasks.rolean.org",
      books: "https://book.rolean.org",
      meetings: "https://meet.rolean.org",
      notes: "https://note.rolean.org",
    },
  };

  return NextResponse.json(profile, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

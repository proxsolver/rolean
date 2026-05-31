import { NextResponse } from "next/server";
import { PERSON, KEY_METRICS, PROJECTS, EXPLORATIONS, INTERESTS, TIMELINE } from "@/domains/profile/data";

export async function GET() {
  const profile = {
    schema: "https://rolean.org/api/about",
    version: "2.0.0",
    generatedAt: new Date().toISOString(),

    person: {
      name: PERSON.name,
      nameEn: PERSON.nameEn,
      knownAs: PERSON.knownAs,
      title: PERSON.title,
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
        metric: m.label,
        value: m.value,
        context: m.context,
      })),
    },

    expertise: INTERESTS.map((i) => ({
      title: i.titleEn,
      titleKo: i.title,
      description: i.desc,
      keywords: i.keywords,
    })),

    liveProjects: PROJECTS.map((p) => ({
      name: p.title,
      url: p.url,
      description: p.description,
      status: p.status,
      techStack: p.tags,
      impact: p.impact || null,
    })),

    explorations2026: EXPLORATIONS.map((e) => ({
      title: e.title,
      domain: e.domain,
      description: e.description,
      techStack: e.techStack,
      status: e.status,
      learnedInsight: e.learnedInsight,
    })),

    career: TIMELINE.map((t) => ({
      period: t.period,
      role: t.role,
      organization: t.company,
      organizationType: t.companyType,
      description: t.description,
      achievements: t.achievements,
    })),
  };

  return NextResponse.json(profile, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
    },
  });
}

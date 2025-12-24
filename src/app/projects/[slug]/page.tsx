import { projects } from "@/lib/projects";
import ProjectPageTemplate from "@/components/ProjectPageTemplate";

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProjectPageTemplate slug={slug} lang="hu" />;
}

import PageLayout from "@/components/PageLayout";
import ArticleHeader from "@/components/ArticleHeader";
import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";

interface ProjectPageTemplateProps {
  slug: string;
  lang: "hu" | "en";
}

export default function ProjectPageTemplate({ slug, lang }: ProjectPageTemplateProps) {
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  const content = project[lang];

  return (
    <PageLayout>
      <ArticleHeader 
        title={content.title}
        date={content.date}
        readTime={content.readTime}
        category={content.category}
        tags={content.tags}
        coverImage={project.coverImage}
      />
      
      <div className="prose prose-invert max-w-none">
        {content.content}
      </div>
    </PageLayout>
  );
}

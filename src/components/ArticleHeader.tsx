import Image from "next/image";

interface ArticleHeaderProps {
  title: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  coverImage?: string;
}

export default function ArticleHeader({ title, date, readTime, category, tags, coverImage }: ArticleHeaderProps) {
  return (
    <header className="mb-12">
      <h1 className="font-inter font-bold text-3xl md:text-5xl text-highlight mb-4 text-left leading-tight">
        {title}
      </h1>
      
      <div className="font-mono text-muted text-sm md:text-base flex flex-wrap items-center gap-2 mb-6">
        <span>{date}</span>
        <span className="text-secondary">•</span>
        <span>{readTime}</span>
        <span className="text-secondary">•</span>
        <span className="uppercase tracking-wider">{category}</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="px-3 py-1 rounded-full text-xs md:text-sm bg-secondary/10 text-secondary border border-secondary/20"
          >
            {tag}
          </span>
        ))}
      </div>

      {coverImage && (
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <Image 
            src={coverImage} 
            alt={title} 
            fill 
            className="object-cover"
            priority
          />
        </div>
      )}
    </header>
  );
}

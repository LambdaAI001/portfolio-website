interface SectionHeadingProps {
  id: string;
  title: string;
  description?: string;
}

export function SectionHeading({ id, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8 space-y-1.5">
      <h2
        id={id}
        className="text-2xl font-bold tracking-tight text-foreground md:text-3xl"
      >
        {title}
      </h2>
      {description && (
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
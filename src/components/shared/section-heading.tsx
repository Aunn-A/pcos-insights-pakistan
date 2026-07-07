import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-3 font-sans text-xs font-semibold tracking-[0.14em] text-primary uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-serif font-medium tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

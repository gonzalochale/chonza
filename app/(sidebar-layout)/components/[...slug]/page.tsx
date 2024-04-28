import { components } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import { ScrollArea } from "@/components/ui/scroll-area";
import { notFound } from "next/navigation";

interface ComponentPageProps {
  params: { slug: string[] };
}

async function getComponentFromParams(params: ComponentPageProps["params"]) {
  const slug = params?.slug.join("/");
  const component = components.find(
    (component) => component.slugAsParams === slug
  );

  return component;
}

export async function generateStaticParams(): Promise<
  ComponentPageProps["params"][]
> {
  return components.map((component) => ({
    slug: component.slugAsParams.split("/"),
  }));
}

export default async function ComponentPage({ params }: ComponentPageProps) {
  const component = await getComponentFromParams(params);

  if (!component || !component.published) {
    return notFound();
  }

  return (
    <ScrollArea>
      <article className="flex flex-col justify-start items-start gap-5 h-96 py-10">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl">
          {component.title}
        </h1>
        <p className="leading-7 text-muted-foreground text-balance">
          {component.description}
        </p>
        <div className="prose dark:prose-invert">
          <MDXContent code={component.body} />
        </div>
      </article>
    </ScrollArea>
  );
}

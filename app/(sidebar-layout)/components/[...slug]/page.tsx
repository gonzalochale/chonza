import { components } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
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
    <article className="prose dark:prose-invert justify-start items-start h-20 py-10 min-w-0 max-w-3xl mdx">
      <MDXContent code={component.body} />
    </article>
  );
}

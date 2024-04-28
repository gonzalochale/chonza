import { Sidebar } from "@/components/sidebar";
import "@/app/mdx.css";

export default function SidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex h-dvh flex-col bg-background">
      <main className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <Sidebar />
        {children}
      </main>
    </div>
  );
}

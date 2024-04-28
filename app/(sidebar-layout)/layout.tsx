import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

export default function SidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex h-dvh flex-col bg-background">
      <Header />
      <main className="flex flex-1 max-sm:px-4 sm:container">
        <div className="grid md:grid-cols-[280px_1fr] w-full h-full">
          <Sidebar />
          {children}
        </div>
      </main>
    </div>
  );
}

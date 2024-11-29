import Content from "@/components/Content";
import SettingsSidebar from "@/components/SettingsSidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function Home() {
  return (
    <SidebarProvider>
      <div className="flex items-center w-full min-h-screen max-w-[1500px] px-6">
        <SettingsSidebar />
        <main className="w-full _mt-20">
          <Content />
        </main>
      </div>
    </SidebarProvider>
  );
}

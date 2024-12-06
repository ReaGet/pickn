import Content from "@/components/Content";
import SettingsSidebar from "@/components/SettingsSidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
export default function Home() {
  return (<>
    <div className='w-full'>
      <header className="w-full p-1 mb-1">
        <div className='flex items-center p-2 bg-white border rounded-lg'>
          <div className='flex items-center'>
            <SidebarTrigger />
            <Separator orientation="vertical" className="ml-2 mr-4 h-4" />
            <h1 className='font-medium'>App</h1>
          </div>
        </div>
      </header>
      <main className="flex flex-col gap-2 w-full px-1">
        <Content />
      </main>
    </div>
    <SettingsSidebar />
  </>);
}

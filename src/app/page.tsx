import Content from "@/components/Content";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
export default function Home() {
  return (<>
    <header className="flex items-center w-full px-2 py-3">
      <SidebarTrigger />
      <Separator orientation="vertical" className="ml-2 mr-4 h-4" />
      <h1 className='font-medium'>App</h1>
    </header>
    <main className="w-full px-4">
      <Content />
    </main>    
  </>);
}

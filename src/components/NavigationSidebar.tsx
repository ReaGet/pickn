import React from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from './ui/sidebar'
import { Shell } from 'lucide-react'
import Link from 'next/link'
import { NavUser } from './NavUser'
import Navigation from './Navigation'

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://ui.shadcn.com/avatars/shadcn.jpg",
  }
}

const NavigationSidebar = () => {
  return (
    <Sidebar
      className='p-1 group-data-[side=left]:border-0 group-data-[state=collapsed]:border-r group-data-[state=collapsed]:p-0'
      variant='sidebar'
      collapsible='icon'
    >
      <div className='flex flex-col h-full w-full border rounded-lg overflow-hidden group-data-[state=collapsed]:rounded-none group-data-[state=collapsed]:border-none'>
        <SidebarHeader className='bg-white'>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                size="lg"
                asChild
              >
                <Link href="/">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <Shell className="size-4" />
                  </div>
                  <span className='text-lg'>pickn</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent className="justify-center bg-white">
          <Navigation />
        </SidebarContent>

        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
      </div>
    </Sidebar>
  )
}

export default NavigationSidebar
import React from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from './ui/sidebar'
import { Palette } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'

const NavigationSidebar = () => {
  return (
    <Sidebar
      className="bg-white"
      variant='sidebar'
      collapsible='icon'
    >
      <SidebarHeader></SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild variant="outline" tooltip={"Palette"}>
                <Link href="/palette">
                  <Palette size={20} />
                  <span>Palette</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter></SidebarFooter>
    </Sidebar>
  )
}

export default NavigationSidebar
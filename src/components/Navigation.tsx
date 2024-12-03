"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from './ui/sidebar'
import Link from 'next/link'
import { Image, Palette } from 'lucide-react'

const isActive = (pathname: string) => {
  return pathname === usePathname()
}


const Navigation = () => {
  return (
    <SidebarGroup>
      <SidebarMenu>
      <SidebarMenuItem>
          <SidebarMenuButton
            asChild
            tooltip="App"
            variant={isActive("/") ? "outline" : "default"}
          >
            <Link href="/">
              <Image className='size-5' />
              <span>App</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton
            asChild
            tooltip="Palettes"
            variant={isActive("/palette") ? "outline" : "default"}
          >
            <Link href="/palette">
              <Palette size={20} />
              <span>Palettes</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}

export default Navigation
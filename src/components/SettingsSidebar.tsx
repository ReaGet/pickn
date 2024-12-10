'use client'
import React, { useState } from "react"
import { Sidebar } from "@/components/ui/sidebar"
import PreSettings from "./PreSettings"
import PostSettings from "./PostSettings"

const SettingsSidebar = () => {

  return (
    <Sidebar
      className='p-1 group-data-[side=right]:border-0 group-data-[state=collapsed]:border-l group-data-[state=collapsed]:p-0'
      side="right"
    >
      <div className='flex flex-col h-full w-full border rounded-lg overflow-hidden group-data-[state=collapsed]:rounded-none group-data-[state=collapsed]:border-none'>
        {/* <PreSettings /> */}
        <PostSettings />
      </div>
    </Sidebar>
  )
}

export default SettingsSidebar
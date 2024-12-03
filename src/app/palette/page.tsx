import { SidebarTrigger } from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'
import React from 'react'

const Page = () => {
  return (<>
    <header className="flex items-center w-full px-2 py-3">
      <SidebarTrigger />
      <Separator orientation="vertical" className="ml-2 mr-4 h-4" />
      <h1 className='font-medium'>Palettes</h1>
    </header>
    <main className="w-full px-4">
      asdfasdfa
    </main>
  </>)
}

export default Page
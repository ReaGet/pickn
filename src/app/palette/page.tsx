import React from 'react'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Plus, PlusIcon } from 'lucide-react'
import { getDynamicContrastColor } from '@/lib/utils'

const PALETTES = [
  { id: 1, name: "Sunset", colors: ["#FF7B89", "#FFB26B", "#FFE66D", "#6BCBFF", "#123BFF", "#cda5c3", "#987cda", "#12dd5a", "#d5a352", "#d87c64", "#fffff"] },
  { id: 2, name: "Forest", colors: ["#2D6A4F", "#40916C", "#52B788", "#74C69D"] },
  { id: 3, name: "Berry", colors: ["#6B2737", "#A3445D", "#D67BA8", "#F6BDD1"] },
]

const PaletteCard = ({ name, colors }: { name: string, colors: string[] }) => {
  return (
    <article className='p-4 border rounded-lg bg-white'>
      <h2 className='mb-4 font-bold'>{ name }</h2>
      <div className='flex flex-wrap gap-1 w-auto'>
        { colors.map((color, index) => {
          const contrastColor = getDynamicContrastColor(color)
          return (
            <div
              key={color}
              style={{ backgroundColor: color, color: contrastColor }}
              className='h-32 w-20 p-3 hover:scale-105 hover:rounded-lg hover:shadow-md transition-all text-sm rounded-lg font-bold shadow-sm'
            >
              {index}
            </div>
          )
        })}
        <Button className='flex items-center justify-center h-32 w-20 rounded-lg bg-[#fefefe]' variant='outline'>
          <PlusIcon size={18} />
        </Button>
      </div>
    </article>
  )
}

const Page = () => {
  return (<>
    <div className='w-full'>
      <header className="w-full p-1 mb-4">
        <div className='flex items-center p-2 bg-white border rounded-lg'>
          <div className='flex items-center'>
            <SidebarTrigger />
            <Separator orientation="vertical" className="ml-2 mr-4 h-4" />
            <h1 className='font-medium'>Palettes</h1>
          </div>
          <Button className='ml-auto' variant='ghost' size='sm'>
            <Plus /> Palette
          </Button>
        </div>
      </header>
      <main className="flex flex-col gap-2 w-full px-1">
        { PALETTES.map((palette) => <PaletteCard {...palette} key={palette.id} />) }
      </main>
    </div>
  </>)
}

export default Page
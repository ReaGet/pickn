"use client"

import React, { useState } from 'react'
import { Button } from "./ui/button"
import {
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import ColorPaletteSelector from "./ColorPaletteSelector"

const PreSettings = () => {
  const [enableResize, setEnableResize] = useState(false)
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [numColors, setNumColors] = useState('')

  const handleGenerate = () => {
    console.log('Generate button clicked')
    console.log('Enable Resize:', enableResize)
    console.log('Width:', width)
    console.log('Height:', height)
    console.log('Number of Colors:', numColors)
  }

  return (<>
    <SidebarContent className="space-y-7 p-4 bg-white">
      <div className="space-y-4">
        <div className="font-bold text-black">Palette Settings</div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="number" className="text-sm font-bold text-[#647d8c]">Number of colors</Label>
          <Input type="number" id="number" placeholder="Number of colors" className="bg-white" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="text-scale" className="text-sm font-bold text-[#647d8c]">Palettes</Label>
          <ColorPaletteSelector />
        </div>
      </div>
    </SidebarContent>
    <SidebarFooter className="p-4 bg-white">
      <Button className="w-full" onClick={handleGenerate}>
        Generate
      </Button>
    </SidebarFooter>
    
  </>)
}

export default PreSettings
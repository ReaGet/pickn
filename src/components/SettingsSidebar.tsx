'use client'
import React, { useState } from "react"
import { Button } from "./ui/button"
import { DogIcon, ShellIcon, Sliders } from "lucide-react"
import { HexColorPicker } from "react-colorful"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Checkbox } from "./ui/checkbox"
import { Slider } from "./ui/slider"
import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import ColorPaletteSelector from "./ColorPaletteSelector"

const SettingsSidebar = () => {
  const [enableResize, setEnableResize] = useState(false)
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [numColors, setNumColors] = useState('')
  const [color, setColor] = useState("#000000")
  const [textScale, setTextScale] = useState(1)
  const [colorOpen, setColorOpen] = useState(false)

  const handleGenerate = () => {
    console.log('Generate button clicked')
    console.log('Enable Resize:', enableResize)
    console.log('Width:', width)
    console.log('Height:', height)
    console.log('Number of Colors:', numColors)
  }

  return (
    <Sidebar className="bg-white">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 mt-4 mx-auto text-xl">
          <ShellIcon size={24} />
          pickn
        </div>
      </SidebarHeader>
      <SidebarContent className="space-y-7 p-4">
        <div className="space-y-4">
          <div className="font-bold text-black">Palette</div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="number" className="text-sm font-bold text-[#647d8c]">Number of colors</Label>
            <Input type="number" id="number" placeholder="Number of colors" className="bg-white" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="text-scale" className="text-sm font-bold text-[#647d8c]">Palettes</Label>
            <ColorPaletteSelector />
          </div>
        </div>
        <div className="space-y-4">
          <div className="font-bold text-black">Labels</div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="text-scale" className="text-sm font-bold text-[#647d8c]">Scale: {textScale}</Label>
            <Slider
              id="text-size"
              min={0.1}
              max={10}
              step={0.1}
              value={[textScale]}
              onValueChange={(value) => setTextScale(value[0])}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="text-sm font-bold text-[#647d8c]">Color</Label>
            <Popover open={colorOpen} onOpenChange={setColorOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full h-10 p-0 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-between px-3">
                    <span>Select Color</span>
                    <div 
                      className="w-6 h-6 rounded border"
                      style={{ backgroundColor: color }}
                    />
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <HexColorPicker color={color} onChange={setColor} />
                <Button className="mt-2 w-full" onClick={() => setColorOpen(false)}>
                  Apply Color
                </Button>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <Button className="w-full" onClick={handleGenerate}>
          Generate
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}

export default SettingsSidebar
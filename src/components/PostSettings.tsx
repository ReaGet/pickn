"use client"

import React, { useState } from 'react'
import { Button } from "./ui/button"
import { HexColorPicker } from "react-colorful"
import {
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { Label } from "./ui/label"
import { Slider } from "./ui/slider"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { ArrowBigLeft, ArrowLeft } from 'lucide-react'

const PostSettings = () => {
  const [color, setColor] = useState("#000000")
  const [textScale, setTextScale] = useState(1)
  const [colorOpen, setColorOpen] = useState(false)  

  return (<>
    <SidebarContent className="space-y-7 p-4 bg-white">
      <div className="space-y-4">
        <div className="flex items-center gap-1 -ml-2 -mt-2 font-bold text-black">
          <Button variant='ghost' size='sm' className='px-2'>
            <ArrowLeft />
          </Button>
          Export Settings
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
                  <span>{color ? color : 'Select Color'}</span>
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
    <SidebarFooter className="p-4 bg-white">
      <Button className="w-full">
        Export
      </Button>
    </SidebarFooter>
    
  </>)
}

export default PostSettings
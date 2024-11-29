"use client"

import React, { useState, useReducer } from "react"
import { HexColorPicker } from "react-colorful"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDownIcon, ChevronUpIcon, PlusIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

type Palette = {
  name: string
  colors: string[]
}

const colorPalettes: Palette[] = [
  { name: "Sunset", colors: ["#FF7B89", "#FFB26B", "#FFE66D", "#6BCBFF"] },
  { name: "Forest", colors: ["#2D6A4F", "#40916C", "#52B788", "#74C69D"] },
  { name: "Berry", colors: ["#6B2737", "#A3445D", "#D67BA8", "#F6BDD1"] },
]

const PaletteItem = (palette: Palette) => {
  return (
    <div className="relative flex items-center justify-between w-full rounded-md text-sm text-violet11 font-medium focus:bg-violet9 focus:text-violet1 cursor-default">
      <span>{palette.name}</span>
      <div className="flex -space-x-1">
        {palette.colors.map((color, index) => (
          <div
            key={index}
            className="w-4 h-4 rounded-lg border border-white"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  )
}

const ColorPaletteSelector = () => {
  const [selectedPalette, setSelectedPalette] = useState<Palette>(colorPalettes[0])
  const [newColor, setNewColor] = useState("#ffffff")
  const [newColors, setNewColors] = useState<string[]>([])
  const [changeColorOpen, setChangeColorOpen] = useState(false)
  const [addColorOpen, setAddColorOpen] = useState(false)

  const handlePaletteChange = (paletteName: string) => {
    const palette = colorPalettes.find(p => p.name === paletteName)
    if (palette) {
      setSelectedPalette(palette)
    }
  }

  const handleAddColor = () => {
    setAddColorOpen(false)
    if (newColor && !selectedPalette.colors.includes(newColor)) {
      setSelectedPalette(prev => {
        if (prev) return ({
          ...prev,
          colors: [...prev.colors, newColor]
        })
        return prev
      })
    }
  }

  const handleChangeColor = () => {
    setChangeColorOpen(false)
    setSelectedPalette(prev => ({ ...prev, colors: newColors }));
  }

  return (
    <div className="w-full">
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full" asChild>
          <Button type="button" variant="outline" className="w-full">
            {
              selectedPalette ? (
                <PaletteItem {...selectedPalette} />
              ) : (
                <div className="w-full text-left">Choose palette</div>
              )
            }
            <ChevronDownIcon size={12} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Palettes</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {colorPalettes.map((palette) => (
              <DropdownMenuItem
                key={palette.name}
                className="relative w-full"
                onClick={() => handlePaletteChange(palette.name)}
              >
                <PaletteItem {...palette} />
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="mt-4 flex flex-wrap gap-2">
        {selectedPalette.colors.map((color: string, index: number) => (
          // FIXME: открыть смену цвета по клику
          <Popover key={`${color}_${index}`} open={changeColorOpen} onOpenChange={setChangeColorOpen}>
            <PopoverTrigger>
              <div
                className="w-8 h-8 rounded-lg cursor-pointer border border-gray-200"
                style={{ backgroundColor: color }}
              />
            </PopoverTrigger>
            <PopoverContent>
              <HexColorPicker className="!w-full" color={color} onChange={(newColor) => {
                const _newColors = [...selectedPalette.colors];
                _newColors[index] = newColor;
                setNewColors(_newColors)
              }} />
              <Button className="mt-2 w-full" onClick={() => handleChangeColor()}>
                Apply Color
              </Button>
            </PopoverContent>
          </Popover>
        ))}

        <Popover open={addColorOpen} onOpenChange={setAddColorOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon" className="w-8 h-8 rounded-lg">
              <PlusIcon className="h-3 w-3" />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <HexColorPicker className="!w-full" color={newColor} onChange={setNewColor}/>
            <Button className="mt-2 w-full" onClick={handleAddColor}>
              Add Color
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}

export default ColorPaletteSelector


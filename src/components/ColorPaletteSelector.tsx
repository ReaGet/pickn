"use client"

import React, { useState, useReducer } from "react"
import { HexColorPicker } from "react-colorful"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
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

const paletteReducer = (state: "SELECT_PALETTE" | "ADD_COLOR", action: { type: string, payload: Palette }) => {
  switch (action.type) {
    case "SELECT_PALETTE":
      return { ...action.payload, isCustom: false }
    case "ADD_COLOR":
      return { ...state, colors: [...state.colors, action.payload], isCustom: true }
    default:
      return state
  }
}

const PaletteItem = (palette: Palette) => {
  return (
    <div className="relative flex items-center justify-between w-full rounded-md text-sm text-violet11 font-medium focus:bg-violet9 focus:text-violet1 cursor-default">
      <span>{palette.name}</span>
      <div className="flex -space-x-1">
        {palette.colors.map((color, index) => (
          <div
            key={index}
            className="w-4 h-4 rounded-full border border-white"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  )
}

const ColorPaletteSelector = () => {
  const [selectedPalette, dispatch] = useReducer(paletteReducer, colorPalettes[0])
  const [newColor, setNewColor] = useState("#ffffff")

  const handlePaletteChange = (paletteName: string) => {
    const palette = colorPalettes.find(p => p.name === paletteName)
    if (palette) {
      dispatch({ type: "SELECT_PALETTE", payload: palette })
    }
  }

  const handleAddColor = () => {
    if (newColor && !selectedPalette.colors.includes(newColor)) {
      dispatch({ type: "ADD_COLOR", payload: newColor });
    }
  };

  return (
    <div className="w-full">
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full" asChild>
          <Button type="button" variant="outline" className="w-full">
            <PaletteItem {...selectedPalette} />
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
                // value={palette.name}
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
          <Popover key={index}>
            <PopoverTrigger>
              <div
                className="w-8 h-8 rounded-lg cursor-pointer border border-gray-200"
                style={{ backgroundColor: color }}
              />
            </PopoverTrigger>
            <PopoverContent>
              <HexColorPicker color={color} onChange={(newColor) => {
                const newColors = [...selectedPalette.colors];
                newColors[index] = newColor;
                dispatch({ type: "SELECT_PALETTE", payload: { ...selectedPalette, colors: newColors } });
              }} />
            </PopoverContent>
          </Popover>
        ))}
        <Popover>
          <PopoverTrigger>
            <Button variant="outline" size="icon" className="w-8 h-8 rounded-lg">
              <PlusIcon className="h-3 w-3" />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <HexColorPicker color={newColor} onChange={setNewColor} className="!w-full"/>
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


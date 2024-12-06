"use client"
import React from "react"
import { ImagePicker } from "@/components/ImagePicker"

const Content = () => {
  const handleImagesSelected = (files: File[]) => {
    console.log('Selected files:', files)
    // Here you can handle the selected files, e.g., upload them to a server
  }

  return (
    <div className="p-2 border rounded-lg bg-white">
      <div className="flex items-center justify-center w-full min-h-[500px]">
        <ImagePicker onImagesSelected={handleImagesSelected} />
      </div>
    </div>
  )
}

export default Content
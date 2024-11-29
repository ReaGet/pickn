"use client"
import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ImagePicker } from "@/components/ImagePicker"

const Content = () => {
  const handleImagesSelected = (files: File[]) => {
    console.log('Selected files:', files)
    // Here you can handle the selected files, e.g., upload them to a server
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-center w-full min-h-[500px]">
          <ImagePicker onImagesSelected={handleImagesSelected} />
        </div>
      </CardContent>
    </Card>
  )
}

export default Content
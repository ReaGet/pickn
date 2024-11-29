'use client'

import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ImagePickerProps {
  onImagesSelected: (files: File[]) => void
  multiple?: boolean
}

export function ImagePicker({ onImagesSelected, multiple = false }: ImagePickerProps) {
  const [previews, setPreviews] = useState<string[]>([])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    onImagesSelected(acceptedFiles)
    setPreviews(acceptedFiles.map(file => URL.createObjectURL(file)))
  }, [onImagesSelected])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif']
    },
  })

  const removeImage = (index: number) => {
    setPreviews(prev => prev.filter((_, i) => i !== index))
    onImagesSelected(previews.filter((_, i) => i !== index).map(url => new File([], url)))
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div
        {...getRootProps()}
        className={cn(
          "p-8 border border-dashed rounded-lg text-center text-primary cursor-pointer transition-colors border-gray-200 hover:border-primary",
          {
            "border-primary bg-primary/10": isDragActive,
          }
        )}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-primary">Drop the images here ...</p>
        ) : (
          <p>Drop some images here, or click to select images</p>
        )}
      </div>
      {previews.length > 0 && (
        <div
          className={cn(
            "mt-4",
            {
              "grid grid-cols-3 gap-4": multiple
            }
          )}
        >
          {previews.map((preview, index) => (
            <div key={preview} className="relative group">
              <img
                src={preview}
                alt={`Preview ${index + 1}`}
                className={cn(
                  "w-full h-auto object-cover rounded-md",
                  {
                    "h-24": multiple
                  }
                )}
              />
              <button
                onClick={() => removeImage(index)}
                className="absolute top-1 right-1 bg-black bg-opacity-50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label={`Remove image ${index + 1}`}
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
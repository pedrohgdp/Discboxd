"use client"

import { useState } from 'react'
import Cropper, { type Area, type Point } from 'react-easy-crop'

type ImageProps = {
    imageUrl: string
}

export default function Demo({ imageUrl } : ImageProps) {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)

  function onCropComplete(croppedArea: Area, croppedAreaPixels : Point) {
    console.log(croppedArea, croppedAreaPixels)
  }

  return (
    <div style={{ position: 'relative', width: 400, height: 300 }}>
      <Cropper
        image={imageUrl}
        crop={crop}
        zoom={zoom}
        aspect={4 / 3}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />
    </div>
  )
}
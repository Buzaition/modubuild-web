# ModuBuild Real 3D Models Pack

This pack contains starter `.glb` files and poster images for the ModuBuild website.

## Folder structure

Copy these folders into your React/Vite project:

```
modubuild-web/public/models/
modubuild-web/public/model-posters/
```

## Included models

- `modern-villa.glb`
- `luxury-living-room.glb`
- `kitchen-design.glb`
- `modular-studio.glb`

## Included posters

- `modern-villa-poster.webp`
- `luxury-living-room-poster.webp`
- `kitchen-design-poster.webp`
- `modular-studio-poster.webp`

## Important

These are lightweight starter 3D models generated for website integration and testing. They are suitable for interactive proof-of-concept use with `<model-viewer>`. For final client-grade presentation, replace them later with professionally modeled/optimized GLB assets exported from Blender, SketchUp, 3ds Max, or downloaded from a licensed 3D marketplace.

## Recommended component usage

```jsx
<model-viewer
  src="/models/modern-villa.glb"
  poster="/model-posters/modern-villa-poster.webp"
  camera-controls
  auto-rotate
  shadow-intensity="1"
  exposure="1"
  loading="lazy"
></model-viewer>
```


# 3D Models Placeholder

In a production environment, this directory would contain 3D model files (.glb or .gltf) for different vehicle types:

- sedan.glb - A 3D model of a sedan
- suv.glb - A 3D model of an SUV
- truck.glb - A 3D model of a truck

For the demo, the application falls back to a publicly available model.

To add real models:
1. Export vehicles as .glb files from a 3D modeling program
2. Ensure the models are optimized for web (reduced polygon count)
3. Place them in this directory
4. Update the references in the VehicleCustomizer component

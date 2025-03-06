
import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, ContactShadows } from '@react-three/drei';
import { Mesh, MeshStandardMaterial } from 'three';
import { Button } from '@/components/ui/button';
import { RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';

interface Vehicle3DModelProps {
  position?: [number, number, number];
  scale?: number;
  color: string;
  modelPath: string;
}

function Vehicle3DModel({ position = [0, 0, 0], scale = 1, color, modelPath }: Vehicle3DModelProps) {
  const groupRef = useRef<Mesh>(null);
  const { scene } = useGLTF(modelPath);
  
  useFrame(() => {
    if (groupRef.current) {
      // Optional subtle animation
      groupRef.current.rotation.y += 0.001;
    }
  });

  // Clone the model to avoid modifying the cached original
  const model = scene.clone();

  // Apply the color to all materials
  model.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      if (mesh.material) {
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach(mat => {
            // Cast to MeshStandardMaterial to access color property
            if ((mat as MeshStandardMaterial).color) {
              (mat as MeshStandardMaterial).color.set(color);
            }
          });
        } else {
          // Cast to MeshStandardMaterial to access color property
          if ((mesh.material as MeshStandardMaterial).color) {
            (mesh.material as MeshStandardMaterial).color.set(color);
          }
        }
      }
    }
  });

  return (
    <mesh ref={groupRef} position={position} scale={[scale, scale, scale]}>
      <primitive object={model} />
    </mesh>
  );
}

interface VehicleCustomizerProps {
  selectedColor: string;
}

const VehicleCustomizer: React.FC<VehicleCustomizerProps> = ({ selectedColor }) => {
  // Default to a standard color if no selection
  const color = selectedColor || '#FFFFFF';
  const [zoom, setZoom] = useState(1);
  const [activeModel, setActiveModel] = useState('sedan');
  
  // Preload models paths - in a real app these would be actual 3D model files
  const modelPaths = {
    sedan: '/models/sedan.glb',
    suv: '/models/suv.glb',
    truck: '/models/truck.glb',
    // Fallbacks for demo
    fallback: 'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/tesla-model-3/model.gltf'
  };

  // This is a fallback until you have actual models
  const modelPath = modelPaths.fallback;

  // Handle zoom controls
  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 2));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));
  const handleReset = () => setZoom(1);

  // Different vehicle types
  const handleModelChange = (model: string) => {
    setActiveModel(model);
  };

  return (
    <div className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden transition-all hover:shadow-lg p-4 mb-6">
      <h3 className="text-xl font-serif font-semibold mb-4 text-wrap-blue">3D Vehicle Customizer</h3>
      <p className="text-wrap-grey mb-4">Preview your wrap color on different vehicle types.</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <Button 
          variant={activeModel === 'sedan' ? "default" : "outline"}
          onClick={() => handleModelChange('sedan')}
          className={activeModel === 'sedan' ? "bg-wrap-blue" : ""}
        >
          Sedan
        </Button>
        <Button 
          variant={activeModel === 'suv' ? "default" : "outline"}
          onClick={() => handleModelChange('suv')}
          className={activeModel === 'suv' ? "bg-wrap-blue" : ""}
        >
          SUV
        </Button>
        <Button 
          variant={activeModel === 'truck' ? "default" : "outline"}
          onClick={() => handleModelChange('truck')}
          className={activeModel === 'truck' ? "bg-wrap-blue" : ""}
        >
          Truck
        </Button>
      </div>
      
      <div className="h-[400px] w-full relative border border-gray-200 rounded-lg overflow-hidden mb-4">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          
          <Suspense fallback={null}>
            <Vehicle3DModel 
              modelPath={modelPath} 
              color={color} 
              scale={zoom} 
              position={[0, -1, 0]} 
            />
            <Environment preset="city" />
            <ContactShadows 
              position={[0, -1.5, 0]} 
              opacity={0.4} 
              scale={10} 
              blur={1} 
              far={10} 
              resolution={256} 
            />
          </Suspense>
          
          <OrbitControls 
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
          />
        </Canvas>
        
        <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-sm">
          <div className="flex flex-col gap-2">
            <Button variant="outline" size="icon" onClick={handleZoomIn} title="Zoom In">
              <ZoomIn size={16} />
            </Button>
            <Button variant="outline" size="icon" onClick={handleZoomOut} title="Zoom Out">
              <ZoomOut size={16} />
            </Button>
            <Button variant="outline" size="icon" onClick={handleReset} title="Reset View">
              <RotateCcw size={16} />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div 
            className="h-8 w-8 rounded-full border border-gray-300" 
            style={{ backgroundColor: color }}
          />
          <span className="text-sm text-wrap-grey">Selected Color</span>
        </div>
        <p className="text-xs text-wrap-grey">Drag to rotate • Scroll to zoom</p>
      </div>
    </div>
  );
};

export default VehicleCustomizer;

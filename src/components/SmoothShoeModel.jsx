import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment } from '@react-three/drei'
import * as THREE from 'three'

function ShoeModel() {
  const shoeRef = useRef()
  const { scene } = useGLTF('/models/nike-shoe.glb')
  const [isMouseActive, setIsMouseActive] = useState(false)
  const mouseTimeoutRef = useRef()
  
  useFrame((state) => {
    if (shoeRef.current) {
      const mouse = state.mouse

      // Check if mouse has moved significantly
      const mouseMovement = Math.abs(mouse.x) > 0.01 || Math.abs(mouse.y) > 0.01
      
      if (mouseMovement) {
        // Reset timeout when mouse is active
        clearTimeout(mouseTimeoutRef.current)
        setIsMouseActive(true)
        
        // Much slower, more elegant movement
        const targetY = (mouse.x * Math.PI * 1.5) + Math.PI // Reduced rotation range
        const targetX = mouse.y * Math.PI * 0.25 // Much more subtle tilt

        shoeRef.current.rotation.y = THREE.MathUtils.lerp(
          shoeRef.current.rotation.y,
          targetY,
          0.03 // Much slower - reduced from 0.06 to 0.03
        )
        shoeRef.current.rotation.x = THREE.MathUtils.lerp(
          shoeRef.current.rotation.x,
          targetX,
          0.03 // Much slower - reduced from 0.06 to 0.03
        )
        
        // Longer timeout for less sensitive return
        mouseTimeoutRef.current = setTimeout(() => {
          setIsMouseActive(false)
        }, 1200) // Increased to 1.2 seconds
        
      } else if (!isMouseActive) {
        // Very slow return to starting position
        shoeRef.current.rotation.x = THREE.MathUtils.lerp(
          shoeRef.current.rotation.x,
          0, // Flat position
          0.015 // Much slower return (reduced from 0.02)
        )
        shoeRef.current.rotation.y = THREE.MathUtils.lerp(
          shoeRef.current.rotation.y,
          Math.PI, // Toe points toward text
          0.015 // Much slower return (reduced from 0.02)
        )
      }

      // Very subtle floating effect
      shoeRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05 // Much slower and smaller
    }
  })

  useEffect(() => {
    return () => {
      if (mouseTimeoutRef.current) {
        clearTimeout(mouseTimeoutRef.current)
      }
    }
  }, [])

  return (
    <primitive 
      ref={shoeRef} 
      object={scene} 
 scale={[1.8, 1.45, 1.8]} // Adjusted scale for better fit
      position={[0.2, -0.2, 0]} // Better positioning - slightly down and right
      rotation={[0, Math.PI, 0]} // Initial rotation so toe faces text
    />
  )
}

function SmoothShoeCanvas() {
  return (
    <div className="w-full h-96 md:h-[500px] flex items-center justify-center">
      <Canvas
      camera={{ position: [0, 0, 6.4], fov: 45 }}// Adjusted camera for better framing
        dpr={[1, 2]}
      >
        {/* Improved lighting setup */}
        <ambientLight intensity={0.7} />
        <spotLight position={[8, 8, 8]} angle={0.2} penumbra={1} intensity={1.2} />
        <directionalLight position={[-4, 4, 4]} intensity={0.6} />
        <pointLight position={[-8, -8, -8]} intensity={0.4} />
        
        {/* Environment for realistic reflections */}
        <Environment preset="studio" />
        
        {/* Your Nike shoe with improved settings */}
        <ShoeModel />
        
        {/* Enhanced user interaction controls */}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          maxDistance={7}
          minDistance={3}
          autoRotate={false}
          enableDamping={true}
          dampingFactor={0.12} // More damping for ultra-smooth feel
          enableRotate={false}
        />
      </Canvas>
    </div>
  )
}

export default SmoothShoeCanvas

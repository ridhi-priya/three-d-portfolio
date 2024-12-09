import { useEffect, useRef } from 'react';
import birdScene from '../../public/assets/3d/bird.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Bird = () => {
  // Loading the 3D model and animations
  const { scene, animations } = useGLTF(birdScene);
  const birdRef = useRef();

  // Accessing the animations from the model
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    if (actions['Take 001']) {
      actions['Take 001'].play();
    }
  }, [actions]); // The effect depends on 'actions'

  useFrame((state) => {
    // Ensure birdRef.current is defined before accessing its properties
    if (birdRef.current) {
      // Simulate the bird flying in a sine wave (y-position)
      birdRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2 + 2;

      // Logic for rotating the bird based on its x position relative to the camera
      if (birdRef.current.position.x > state.camera.position.x + 10) {
        // change direction to backward and rotate the bird 180 deg oon the y axis
        birdRef.current.rotation.y = Math.PI; // Rotate to face left
      } else if (birdRef.current.position.x < state.camera.position.x - 10) {
        birdRef.current.rotation.y = 0; // Rotate to face right
      }

      // Smooth movement of the bird along the x and z axes
      if (birdRef.current.rotation.y === 0) {
        // moving forward
        birdRef.current.position.x += 0.01;
        birdRef.current.position.z -= 0.01;
      } else {
        // moving backward
        birdRef.current.position.x -= 0.01;
        birdRef.current.position.z += 0.01;
      }
    }
  });

  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;

"use client";

import { useState, useEffect, useRef } from 'react';
import Globe, { GlobeMethods } from 'react-globe.gl';

export default function World() {
  const globeEl = useRef<GlobeMethods | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [globeReady, setGlobeReady] = useState(false);

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      if (entry) {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (globeEl.current && globeReady) {
      const globe = globeEl.current;
      const controls = globe.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.4;
      controls.enableZoom = false;

      globe.pointOfView({ lat: -1.2921, lng: 36.8219, altitude: 2.5 });
    }
  }, [globeReady]);

  const markers = [
    {
      id: 'nairobi',
      lat: -1.2921,
      lng: 36.8219,
      size: 3,
      color: 'rgba(255, 100, 100, 0.7)',
    },
  ];

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
      <Globe
        ref={globeEl}
        onGlobeReady={() => setGlobeReady(true)}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        pointsData={markers}
        pointAltitude={0.02}
        pointRadius="size"
        pointColor="color"
        backgroundColor="rgba(0,0,0,0)"
        atmosphereColor="rgba(184, 115, 51, 0.2)"
        atmosphereAltitude={0.35}
        width={dimensions.width}
        height={dimensions.height}
      />
    </div>
  );
}

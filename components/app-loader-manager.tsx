"use client";

import { useState, useEffect } from 'react';
import { SpaceRocketLoader } from './space-rocket-loader';

export function AppLoaderManager({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide the loader after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SpaceRocketLoader />;
  }

  return <>{children}</>;
}

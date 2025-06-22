'use client';

import { useEffect } from 'react';

export default function ReloadAlert() {
  useEffect(() => {
    if (performance?.navigation?.type === 1) {
      alert('このページではリロードしないでください。');
    }
  }, []);

  return null;
}

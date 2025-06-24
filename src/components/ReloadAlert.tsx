'use client';

import { useEffect } from 'react';

export default function ReloadAlert() {
  useEffect(() => {
    const navEntries = performance.getEntriesByType('navigation');
    const isReload =
      navEntries.length > 0 &&
      (navEntries[0] as PerformanceNavigationTiming).type === 'reload';

    if (isReload) {
      alert('このページではリロードしないでください。リロードすると、ページが正常に表示されない可能性があります。');
    }
  }, []);

  return null;
}

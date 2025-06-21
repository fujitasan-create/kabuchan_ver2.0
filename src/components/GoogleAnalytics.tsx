"use client"; 

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";


import * as gtag from "@/lib/gtag";

export default function GoogleAnalytics() {
  const pathname = usePathname(); 
  const searchParams = useSearchParams(); 

  
  useEffect(() => {
    
    const url = new URL(pathname, window.location.origin);
    url.search = searchParams.toString();
    
    
    gtag.pageview(url);

  }, [pathname, searchParams]);

  return null;
}
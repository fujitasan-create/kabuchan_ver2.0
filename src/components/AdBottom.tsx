'use client'

import './AdBottom.css';

export default function AdBottom() {
  return (
    <div
      className="ad-bottom"
      dangerouslySetInnerHTML={{
        __html: `
          <!-- admax -->
          <script type="text/javascript" src="https://adm.shinobi.jp/s/221a311f496b3bd9937ebfe2cbb7644b"></script>
          <!-- admax -->
        `,
      }}
    />
  )
}


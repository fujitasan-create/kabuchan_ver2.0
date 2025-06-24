'use client';

import './AdRight.css';

export default function AdRight() {
  return (
    <div
      className="ad-right"
      dangerouslySetInnerHTML={{
        __html: `
          <!-- admax -->
          <script type="text/javascript" src="https://adm.shinobi.jp/s/c382675c3edd20e0aa347c647a535b6f"></script>
          <!-- admax -->
        `,
      }}
    />
  );
}
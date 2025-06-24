'use client';

import './AdLeft.css';

export default function AdLeft() {
  return (
    <div
      className="ad-left"
      dangerouslySetInnerHTML={{
        __html: `
          <!-- admax -->
          <script type="text/javascript" src="https://adm.shinobi.jp/s/aafd32d31a687f7f53aeee36b9b3c9f1"></script>
          <!-- admax -->
        `,
      }}
    />
  );
}
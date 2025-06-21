
declare global {
  interface Window {
    gtag: (
      command: string,
      trackingIdOrEventName: string,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      config?: { [key: string]: any }
    ) => void;
  }
}


export const GA_TRACKING_ID = "G-QXNP3WRN48";

/**
 * pageviewイベントをGAに送信します。
 * @param url 送信するページのURLパス
 */
export const pageview = (url: URL) => {
  
  if (!GA_TRACKING_ID) return;

  window.gtag("config", GA_TRACKING_ID, {
    page_path: url.pathname, 
  });
};
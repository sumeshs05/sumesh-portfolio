"use client";

import { track } from "@vercel/analytics";
import { trackResumeDownloadAction } from "@/app/actions";

/**
 * A plain <a download> only works when the file is on the same origin.
 * Once the résumé is uploaded to Vercel Blob (a different domain), browsers
 * silently ignore `download` and just open the file instead. This fetches
 * the file as a blob first, then downloads that — which works regardless
 * of where the file actually lives.
 */
export default function DownloadLink({
  href,
  filename = "Sumesh-S-Resume.pdf",
  className,
  children,
}: {
  href: string;
  filename?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    track("Resume Downloaded");
    trackResumeDownloadAction();
    try {
      const res = await fetch(href);
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch {
      // If fetching as a blob fails for any reason, fall back to just
      // opening it — better than the click silently doing nothing.
      window.open(href, "_blank");
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

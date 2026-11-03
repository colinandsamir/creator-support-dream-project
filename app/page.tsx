import WinnerCanvas from "@/components/WinnerCanvas";

/**
 * The winner announcement, live on the homepage.
 *
 * components/Canvas.tsx — the apply-for-the-fund homepage this replaces — is
 * kept as-is rather than deleted: the page itself says applications are
 * reopening, so it comes back. lib/applications.ts and NAV.viewNav/applyNav
 * are parked with it for the same reason.
 */
export default function Page() {
  return <WinnerCanvas />;
}

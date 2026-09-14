import { act, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import CookieBanner from "@/components/CookieBanner";
import { CONSENT_KEY, OPEN_BANNER_EVENT } from "@/lib/clarity";
import { __resetLandingView, initializeLandingTracking } from "@/lib/tracking";

describe("CookieBanner consent integration", () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem(CONSENT_KEY, "denied");
    (window as unknown as { dataLayer: unknown[] }).dataLayer = [];
    __resetLandingView();
  });

  afterEach(() => {
    delete (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    __resetLandingView();
  });

  it("the real accept button persists granted and calls the global gtag consent update", async () => {
    const pageGtag = vi.fn();
    (window as unknown as { gtag: typeof pageGtag }).gtag = pageGtag;
    initializeLandingTracking();

    render(
      <MemoryRouter>
        <CookieBanner />
      </MemoryRouter>,
    );

    act(() => {
      window.dispatchEvent(new CustomEvent(OPEN_BANNER_EVENT));
    });
    pageGtag.mockClear();
    fireEvent.click(await screen.findByRole("button", { name: "Accepter les cookies" }));

    expect(localStorage.getItem(CONSENT_KEY)).toBe("granted");
    expect(localStorage.getItem(ADS_CONSENT_KEY)).toBe("granted");
    expect(pageGtag.mock.calls).toEqual([
      ["consent", "update", {
      analytics_storage: "granted",
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      }],
      ["event", "page_view", {
        page_location: window.location.href,
        page_title: document.title,
        send_to: "G-C7X99HEE6W",
      }],
      ["event", "landing_view", {
        page_location: window.location.href,
        page_title: document.title,
        send_to: "G-C7X99HEE6W",
      }],
    ]);
    expect(screen.queryByRole("dialog", { name: "Consentement aux cookies" })).not.toBeInTheDocument();
  });
});
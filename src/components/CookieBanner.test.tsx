import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import CookieBanner from "@/components/CookieBanner";
import { CONSENT_KEY, OPEN_BANNER_EVENT } from "@/lib/clarity";

describe("CookieBanner consent integration", () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem(CONSENT_KEY, "denied");
    (window as unknown as { dataLayer: unknown[] }).dataLayer = [];
  });

  it("the real accept button persists granted and calls the global gtag consent update", () => {
    const pageGtag = vi.fn();
    (window as unknown as { gtag: typeof pageGtag }).gtag = pageGtag;

    render(
      <MemoryRouter>
        <CookieBanner />
      </MemoryRouter>,
    );

    window.dispatchEvent(new CustomEvent(OPEN_BANNER_EVENT));
    fireEvent.click(screen.getByRole("button", { name: "Accepter les cookies" }));

    expect(localStorage.getItem(CONSENT_KEY)).toBe("granted");
    expect(pageGtag).toHaveBeenLastCalledWith("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    expect(screen.queryByRole("dialog", { name: "Consentement aux cookies" })).not.toBeInTheDocument();

    delete (window as unknown as { gtag?: typeof pageGtag }).gtag;
  });
});
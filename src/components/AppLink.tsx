import { forwardRef, useCallback } from "react";
import { decorateAppUrl } from "@/lib/tracking";

type AppLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/**
 * Anchor to app.lunae-app.fr that carries the current attribution parameters.
 * The URL is decorated at click time so the latest consent state applies.
 */
const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>(
  ({ href, onClick, ...props }, ref) => {
    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLAnchorElement>) => {
        const decorated = decorateAppUrl(href);
        if (decorated !== href) e.currentTarget.setAttribute("href", decorated);
        onClick?.(e);
      },
      [href, onClick],
    );

    return <a ref={ref} href={href} onClick={handleClick} {...props} />;
  },
);
AppLink.displayName = "AppLink";

export default AppLink;

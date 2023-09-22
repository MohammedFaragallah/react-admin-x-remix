/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { AdminClient } from "./components/admin.client";
import { ClientOnly } from "./components/client-only";

console.log(window.location.pathname);
if (window.location.pathname === "/admin") {
  hydrateRoot(
    document.body,
    <StrictMode>
      <ClientOnly fallback={<div>Admin is loading</div>}>
        {() => <AdminClient />}
      </ClientOnly>
    </StrictMode>
  );
} else {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <RemixBrowser />
      </StrictMode>
    );
  });
}
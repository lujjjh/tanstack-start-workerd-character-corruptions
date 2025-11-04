import { createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  shellComponent: RootDocument,
});

function RootDocument() {
  return "😊 ".repeat(6000);
}

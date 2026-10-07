import { createFileRoute } from "@tanstack/react-router";
import { FolgaCleb } from "@/pages/folgacleb";

export const Route = createFileRoute("/folgacleb")({
  component: RouteComponent,
});

function RouteComponent() {
  return <FolgaCleb />;
}

// src/app/auth/verify/page.tsx
export const dynamic = "force-dynamic";

import React from "react";
import VerifyClient from "./VerifyClient";

export default function VerifyPage() {
  // Komponen server‐side yang hanya bail‐out ke client
  return <VerifyClient />;
}

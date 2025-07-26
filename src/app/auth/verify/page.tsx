// src/app/auth/verify/page.tsx
export const dynamic = "force-dynamic"

import React from "react"
import VerifyClient from "./VerifyClient"

export default function VerifyPage() {
  // komponen ini *server* side, hanya mereturn client bail‐out
  return <VerifyClient />
}

"use client";

import { useEffect } from "react";
import { getSession } from "@/utils/sessions";

export default function MonComptePage() {
  useEffect(() => {
    const logSession = async () => {
      const session = await getSession();
      console.log(session);
    };
    logSession();
  }, []);

  return (
    <div>
      <h1>Mon Compte</h1>
      <p>Bienvenue sur votre page de compte.</p>
    </div>
  );
}
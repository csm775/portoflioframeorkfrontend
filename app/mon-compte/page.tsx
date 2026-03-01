"use client";

import { useEffect } from "react";
import { getSession } from "@/utils/sessions";
 
  const logSession = async () => {
    const session = await getSession();
    console.log(session);
  };
 
  useEffect(() => {
    logSession();
  }, []);
 
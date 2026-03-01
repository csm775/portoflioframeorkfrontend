import { getSession } from "@/utils/sessions";
import { useEffect } from "react";
 
  const logSession = async () => {
    const session = await getSession();
    console.log(session);
  };
 
  useEffect(() => {
    logSession();
  }, []);
 
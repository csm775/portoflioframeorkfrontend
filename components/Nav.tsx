import { useRouter } from "next/navigation";
import { logout } from "@/utils/sessions";

  const router = useRouter();
 
  const Logout = () => {
    logout(); // Destroy the cookie
    return router.push("/login"); // redirect to login page
  };

  <button onClick={Logout}>Logout</button>
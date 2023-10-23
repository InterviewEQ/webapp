import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth } from "@/utils/firebase";

const useAuth = () => {
  const router = useRouter();
  
  // Use Firebase's getAuth to get the current user
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);
};

export default useAuth;

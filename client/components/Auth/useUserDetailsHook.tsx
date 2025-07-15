import { useUser } from "@clerk/nextjs";

export const useUserDetails = () => {
  const { user, isSignedIn, isLoaded } = useUser();

  const userDetails = {
    name: user?.fullName || "",
    image: user?.imageUrl || "",
    isSignedIn,
    isLoaded,
  };

  return userDetails;
};

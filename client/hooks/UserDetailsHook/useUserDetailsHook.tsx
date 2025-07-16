import { useUser } from "@clerk/nextjs";

export const useUserDetails = () => {
  const { user, isSignedIn, isLoaded } = useUser();

  const userDetails = {
    id: user?.id || "",
    name:
      user?.fullName ||
      user?.username ||
      user?.firstName ||
      user?.lastName ||
      "",
    email: user?.emailAddresses?.[0]?.emailAddress || "",
    image: user?.imageUrl || "",
    isSignedIn,
    isLoaded,
  };

  return userDetails;
};

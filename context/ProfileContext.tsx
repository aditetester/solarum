import React, { createContext, useContext, useState } from "react";

export type Profile = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

const INITIAL_PROFILE: Profile = {
  name: "Khyati Jikadra",
  email: "khyati123@gmail.com",
  phone: "0123-456-789",
  address: "123, Shanti Heights, Bhavnagar-364001, Gujarat, India",
};

type ProfileContextType = {
  profile: Profile;
  updateProfile: (data: Profile) => void;
};

const ProfileContext = createContext<ProfileContextType | null>(null);

export const ProfileProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [profile, setProfile] = useState(INITIAL_PROFILE);

  const updateProfile = (data: Profile) => {
    setProfile(data);
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within ProfileProvider");
  }
  return context;
};

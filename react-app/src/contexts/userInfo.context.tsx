import { createContext, ReactNode, useContext, useState } from "react";

interface IUserInfoContext {
  name: string;
  setName: (name: string) => void;
}

const UserInfoContext = createContext<IUserInfoContext | undefined>(undefined);

type UserInfoProviderProps = {
  children: ReactNode;
};

export const UserInfoProvider: React.FC<UserInfoProviderProps> = ({
  children,
}) => {
  const [name, setName] = useState<string>("");

  return (
    <UserInfoContext.Provider value={{ name, setName }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfoContext = () => {
  const context = useContext(UserInfoContext);
  if (!context) {
    throw new Error(
      "useUserInfoContext must be used within a UserInfoProvider"
    );
  }
  return context;
};

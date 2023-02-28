import { createContext, useContext, useMemo, useState } from "react"
import { api } from "../../services/axios"
import { IAuthentication, ILogin, IUser } from "./types"

export const AuthContext = createContext<IAuthentication>({} as IAuthentication)

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null)

  async function login(userdata: ILogin) {
    try {
      const responseUser = await api.post<IUser, IUser, ILogin>("/login", userdata)
      setUser(responseUser)
    } catch (error) {
      setUser(null)
    }
  }

  function logout() {
    setUser(null)
  }

  const value: IAuthentication = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  )

  return (
    <AuthContext.Provider
      value={value}
      children={children}
    />
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider

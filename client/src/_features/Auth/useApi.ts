import { AxiosResponse } from "axios"
import { api } from "../../services/axios"
import { tokenSchema } from "./schemas"
import { ILogin, IUser, TToken } from "./types"

export const useApi = {
  validateToken: async (token: TToken): Promise<boolean> => {
    const parsedToken = tokenSchema.parse(token)
    const { data: response } = await api.post<boolean>("/validate", parsedToken)
    return response
  },
  login: async (userdata: ILogin): Promise<IUser> => {
    const { data: response } = await api.post<IUser, AxiosResponse<IUser>, ILogin>("/login", userdata)
    return response
  },
  logout: async (): Promise<any> => {
    const { data: response } = await api.post("/logout")
    return response
  },
}

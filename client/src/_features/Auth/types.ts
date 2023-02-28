import { z } from "zod"
import { loginSchema, tokenSchema, userSchema } from "./schemas"

export type IUser = z.infer<typeof userSchema>
export type ILogin = z.infer<typeof loginSchema>
export type TToken = z.infer<typeof tokenSchema>

export interface IAuthentication {
  user: IUser | null
  login: (userdata: ILogin) => void
  logout: () => void
}

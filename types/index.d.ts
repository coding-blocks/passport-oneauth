import {Strategy as OAuth2Strategy, VerifyCallback} from 'passport-oauth2'
import {Request} from 'express'

declare module 'passport-oauth2' {
  interface _StrategyOptionsBase {
    include?: string[]
  }
}

interface OneauthStrategyOptions {
  include?: string[]
}

declare class OneauthStrategy extends OAuth2Strategy {}
export interface OneauthProfile {
  id: string,
  name: string,
  email: string,
  role: string,
  photo: string,
  facebook?: {},
  github?: {},
  twitter?: {},
  lms?: {}
}
export type Strategy = OneauthStrategy;
export const Strategy: typeof OneauthStrategy

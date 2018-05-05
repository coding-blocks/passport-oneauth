declare module 'passport-oneauth' {
  import {Strategy as Oauth2Strategy} from 'passport-oauth2'
  class OneauthStrategy extends Oauth2Strategy {

  }
  export type Strategy = OneauthStrategy;
  export const Strategy: typeof OneauthStrategy;
}
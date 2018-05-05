import {OneauthStrategyOptions} from 'passport-oneauth'

declare module 'passport-oneauth' {
  import {
    Strategy as OAuth2Strategy,
    StrategyOptions,
    StrategyOptionsWithRequest,
    VerifyFunction,
    VerifyFunctionWithRequest
  } from 'passport-oauth2'

  interface OneauthStrategyOptions {
    include?: string[]
  }

  class OneauthStrategy extends OAuth2Strategy {
    constructor(options: StrategyOptions & OneauthStrategyOptions, verify: VerifyFunction);
    constructor(options: StrategyOptionsWithRequest & OneauthStrategyOptions, verify: VerifyFunctionWithRequest);

  }

  export type Strategy = OneauthStrategy;
  export const Strategy: typeof OneauthStrategy
}
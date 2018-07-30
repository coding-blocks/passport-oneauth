import {Strategy as OAuth2Strategy} from 'passport-oauth2'

declare module 'passport-oauth2' {
  interface _StrategyOptionsBase {
    include?: string[]
  }
}

interface OneauthStrategyOptions {
  include?: string[]
}

declare class OneauthStrategy extends OAuth2Strategy {}

declare namespace OneauthStrategy {
  export type Strategy = OneauthStrategy;
  export const Strategy: typeof OneauthStrategy

  /*
  =============================
  Module related definitions end here
  Helper definitions follow
  =============================
   */



  export interface Course {
    id: number;
    code: string;
    name: string;
    batch_id: number;
    due_date: number;
    center_id: number;
    batch_code: string;
    batch_name: string;
    identifier: string;
    center_name: string;
  }

  /**
   * Type of profile object returned
   */
  export interface OneauthProfile {
    id: string,
    name: string,
    username: string;
    email: string,
    role: string,
    photo: string,
    verifiedemail?: string,
    facebook?: {},
    github?: {},
    twitter?: {},
    lms?: {
      id: string,
      roll_number: string,
      course_identifier?: string,
      courses?: Course[]
    }
  }
}

export = OneauthStrategy

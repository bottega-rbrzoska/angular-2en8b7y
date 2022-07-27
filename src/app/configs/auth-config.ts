import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://ezusrvpl-dev10.go360iq.com/qa/dtiq360identityserver',
  redirectUri: window.location.origin,
  clientId: '360iQWebClient',
  responseType: 'code',
  showDebugInformation: true,
  scope: 'openid profile offline_access 360iQWebAPI'
}

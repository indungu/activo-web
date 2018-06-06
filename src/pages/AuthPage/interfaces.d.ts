/**
 * @interface AuthProps
 */
export interface AuthProps {
  ANDELA_AUTH_HOST: string;
  AUTH_REDIRECT_URL: string;
  location: {
    search: string
  };
}

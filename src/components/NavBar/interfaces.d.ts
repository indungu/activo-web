/**
 * @interface NavBarProps
 */
export interface NavBarProps {
  userDetails: {
    UserInfo: {
      name: string;
      picture: string;
    }
  };
  location: {
    pathname: string;
  };
}

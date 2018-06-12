/**
 * @interface NavBarProps
 */
export interface NavBarProps {
  userDetails: {
    name: string;
    picture: string;
  };
  location: {
    pathname: string;
  };
}

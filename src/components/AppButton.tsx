import { Button } from "./ui/button";
export const AppButton = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

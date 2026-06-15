import { MouseEventHandler } from "react";

export interface CustomeButtonProps {
  title: string;
  containerStyels?: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

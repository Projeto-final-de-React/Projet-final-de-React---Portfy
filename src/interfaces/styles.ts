import { SelectHTMLAttributes } from "react";

export interface IStyledButton {
  color?: string;
  bg?: string;
  disColor?: string;
  hover?: string;
}

export interface IStyledInput extends SelectHTMLAttributes<HTMLSelectElement> {
  border: () => string;
}

export interface IPhoneBG {
  aSettings: string;
}

export interface IButtonIconProp {
  display?: string
}

export interface IPhoneBox {
  display?: string;
  animation?: string;
}
import { ButtonHTMLAttributes, FormHTMLAttributes, HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { ISelectOptions } from "../components/Input/options";

export interface IGeneralProps {
  children: ReactNode;
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: "primary" | "secondary";
  children?: ReactNode;
  color?: string;
  bg?: string;
  disColor?: string;
  hover?: string;
}

export interface IFormulary extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export interface IInputProps2 extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: UseFormRegister<FieldValues>;
  error?: string;
  select?: boolean;
  options?: ISelectOptions[];
}

export interface IPhoneFrameProps extends HTMLAttributes<HTMLDivElement> {
  slide: "top" | "bottom";
  delay: number;
  frame?: string[];
  children?: ReactNode;
}

export interface IInputProps extends React.HTMLProps<HTMLImageElement> {
  type: string;
  placeholder: string;
}

export interface IPostContent {
  src: string;
  h2: string;
  p: string;
}
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
  }

  export interface HomeProps {
    searchParams: FilterProps;
  }

  export interface FilterProps {
    water_quantity?: number;
    year?: number;
    name?: string;
    limit?: number;
    revoked?: boolean;
    active?: boolean;
  }
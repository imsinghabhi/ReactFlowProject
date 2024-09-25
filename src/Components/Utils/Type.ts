import { ButtonProps, SelectChangeEvent, SxProps, Theme, TypographyProps } from "@mui/material";
import { ChangeEvent } from "react";

export interface CommonButtonProps extends ButtonProps {
    onClick?: () => void;
  }


export interface CommonSelectProps  {
    label: string; 
    options: { value: string; label: string }[]; 
    value: string | undefined;  
    onChange:((event: SelectChangeEvent<string>) => void) | undefined; 
    sx?: SxProps<Theme>; 
  }
  
  export interface CommonTextareaProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    textareaStyle: React.CSSProperties;
  }
  
  export interface CommonTextFieldProps {
    label: string; 
    value: string; 
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    variant?: 'outlined' | 'filled' | 'standard'; 
    sx?:SxProps<Theme>; 
}


export interface CommonTypographyProps extends TypographyProps {
    text: string;
  }

  export interface CommonInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    inputStyle: React.CSSProperties;
  }

  export interface ErrorProps {
    children: React.ReactNode;
  }
  
  export interface State {
    hasError: boolean;
  }
  
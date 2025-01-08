import { FIELD_VALIDATION } from "../../../types";

export interface IProps {
  fieldName: string;
  fieldValue: string;
  label: string;
  isValid: boolean;
  errorText: string;
  onBlur: (e: any, value: string) => void;
  onChange?: (value: string) => void;
  options: Array<{ value: string; label: string }>;
  isLoading?: boolean;
  translateOptions?: boolean;
  disabled?: boolean;
  variant?: "standard" | "outlined" | "filled";
  required?: FIELD_VALIDATION;
}

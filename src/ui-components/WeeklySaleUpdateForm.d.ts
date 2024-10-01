/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WeeklySaleUpdateFormInputValues = {
    date?: string;
    total?: number;
};
export declare type WeeklySaleUpdateFormValidationValues = {
    date?: ValidationFunction<string>;
    total?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WeeklySaleUpdateFormOverridesProps = {
    WeeklySaleUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    total?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WeeklySaleUpdateFormProps = React.PropsWithChildren<{
    overrides?: WeeklySaleUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    weeklySale?: any;
    onSubmit?: (fields: WeeklySaleUpdateFormInputValues) => WeeklySaleUpdateFormInputValues;
    onSuccess?: (fields: WeeklySaleUpdateFormInputValues) => void;
    onError?: (fields: WeeklySaleUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WeeklySaleUpdateFormInputValues) => WeeklySaleUpdateFormInputValues;
    onValidate?: WeeklySaleUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WeeklySaleUpdateForm(props: WeeklySaleUpdateFormProps): React.ReactElement;

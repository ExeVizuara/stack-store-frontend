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
export declare type WeeklySaleCreateFormInputValues = {
    date?: string;
    total?: number;
};
export declare type WeeklySaleCreateFormValidationValues = {
    date?: ValidationFunction<string>;
    total?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WeeklySaleCreateFormOverridesProps = {
    WeeklySaleCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    total?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WeeklySaleCreateFormProps = React.PropsWithChildren<{
    overrides?: WeeklySaleCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WeeklySaleCreateFormInputValues) => WeeklySaleCreateFormInputValues;
    onSuccess?: (fields: WeeklySaleCreateFormInputValues) => void;
    onError?: (fields: WeeklySaleCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WeeklySaleCreateFormInputValues) => WeeklySaleCreateFormInputValues;
    onValidate?: WeeklySaleCreateFormValidationValues;
} & React.CSSProperties>;
export default function WeeklySaleCreateForm(props: WeeklySaleCreateFormProps): React.ReactElement;

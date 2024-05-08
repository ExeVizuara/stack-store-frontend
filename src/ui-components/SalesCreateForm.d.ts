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
export declare type SalesCreateFormInputValues = {
    product_name?: string;
    product_category?: string;
    product_date?: string;
    price?: number;
};
export declare type SalesCreateFormValidationValues = {
    product_name?: ValidationFunction<string>;
    product_category?: ValidationFunction<string>;
    product_date?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SalesCreateFormOverridesProps = {
    SalesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    product_name?: PrimitiveOverrideProps<TextFieldProps>;
    product_category?: PrimitiveOverrideProps<TextFieldProps>;
    product_date?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SalesCreateFormProps = React.PropsWithChildren<{
    overrides?: SalesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SalesCreateFormInputValues) => SalesCreateFormInputValues;
    onSuccess?: (fields: SalesCreateFormInputValues) => void;
    onError?: (fields: SalesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SalesCreateFormInputValues) => SalesCreateFormInputValues;
    onValidate?: SalesCreateFormValidationValues;
} & React.CSSProperties>;
export default function SalesCreateForm(props: SalesCreateFormProps): React.ReactElement;

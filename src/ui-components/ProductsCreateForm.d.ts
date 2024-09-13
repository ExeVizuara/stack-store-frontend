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
export declare type ProductsCreateFormInputValues = {
    name?: string;
    category?: string;
    code?: string;
    expiration?: string;
    stock?: number;
    cost?: number;
    discount?: string;
    price?: number;
};
export declare type ProductsCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    code?: ValidationFunction<string>;
    expiration?: ValidationFunction<string>;
    stock?: ValidationFunction<number>;
    cost?: ValidationFunction<number>;
    discount?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductsCreateFormOverridesProps = {
    ProductsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    code?: PrimitiveOverrideProps<TextFieldProps>;
    expiration?: PrimitiveOverrideProps<TextFieldProps>;
    stock?: PrimitiveOverrideProps<TextFieldProps>;
    cost?: PrimitiveOverrideProps<TextFieldProps>;
    discount?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductsCreateFormProps = React.PropsWithChildren<{
    overrides?: ProductsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProductsCreateFormInputValues) => ProductsCreateFormInputValues;
    onSuccess?: (fields: ProductsCreateFormInputValues) => void;
    onError?: (fields: ProductsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProductsCreateFormInputValues) => ProductsCreateFormInputValues;
    onValidate?: ProductsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProductsCreateForm(props: ProductsCreateFormProps): React.ReactElement;

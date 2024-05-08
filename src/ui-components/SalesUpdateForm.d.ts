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
export declare type SalesUpdateFormInputValues = {
    product_name?: string;
    product_category?: string;
    product_date?: string;
    price?: number;
};
export declare type SalesUpdateFormValidationValues = {
    product_name?: ValidationFunction<string>;
    product_category?: ValidationFunction<string>;
    product_date?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SalesUpdateFormOverridesProps = {
    SalesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    product_name?: PrimitiveOverrideProps<TextFieldProps>;
    product_category?: PrimitiveOverrideProps<TextFieldProps>;
    product_date?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SalesUpdateFormProps = React.PropsWithChildren<{
    overrides?: SalesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sales?: any;
    onSubmit?: (fields: SalesUpdateFormInputValues) => SalesUpdateFormInputValues;
    onSuccess?: (fields: SalesUpdateFormInputValues) => void;
    onError?: (fields: SalesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SalesUpdateFormInputValues) => SalesUpdateFormInputValues;
    onValidate?: SalesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SalesUpdateForm(props: SalesUpdateFormProps): React.ReactElement;

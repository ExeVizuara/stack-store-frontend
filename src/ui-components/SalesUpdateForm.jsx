/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getSales } from "../graphql/queries";
import { updateSales } from "../graphql/mutations";
const client = generateClient();
export default function SalesUpdateForm(props) {
  const {
    id: idProp,
    sales: salesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    product_name: "",
    product_category: "",
    product_date: "",
    product_quantity: "",
    price: "",
  };
  const [product_name, setProduct_name] = React.useState(
    initialValues.product_name
  );
  const [product_category, setProduct_category] = React.useState(
    initialValues.product_category
  );
  const [product_date, setProduct_date] = React.useState(
    initialValues.product_date
  );
  const [product_quantity, setProduct_quantity] = React.useState(
    initialValues.product_quantity
  );
  const [price, setPrice] = React.useState(initialValues.price);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = salesRecord
      ? { ...initialValues, ...salesRecord }
      : initialValues;
    setProduct_name(cleanValues.product_name);
    setProduct_category(cleanValues.product_category);
    setProduct_date(cleanValues.product_date);
    setProduct_quantity(cleanValues.product_quantity);
    setPrice(cleanValues.price);
    setErrors({});
  };
  const [salesRecord, setSalesRecord] = React.useState(salesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getSales.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getSales
        : salesModelProp;
      setSalesRecord(record);
    };
    queryData();
  }, [idProp, salesModelProp]);
  React.useEffect(resetStateValues, [salesRecord]);
  const validations = {
    product_name: [{ type: "Required" }],
    product_category: [{ type: "Required" }],
    product_date: [{ type: "Required" }],
    product_quantity: [{ type: "Required" }],
    price: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          product_name,
          product_category,
          product_date,
          product_quantity,
          price,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateSales.replaceAll("__typename", ""),
            variables: {
              input: {
                id: salesRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "SalesUpdateForm")}
      {...rest}
    >
      <TextField
        label="Product name"
        isRequired={true}
        isReadOnly={false}
        value={product_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              product_name: value,
              product_category,
              product_date,
              product_quantity,
              price,
            };
            const result = onChange(modelFields);
            value = result?.product_name ?? value;
          }
          if (errors.product_name?.hasError) {
            runValidationTasks("product_name", value);
          }
          setProduct_name(value);
        }}
        onBlur={() => runValidationTasks("product_name", product_name)}
        errorMessage={errors.product_name?.errorMessage}
        hasError={errors.product_name?.hasError}
        {...getOverrideProps(overrides, "product_name")}
      ></TextField>
      <TextField
        label="Product category"
        isRequired={true}
        isReadOnly={false}
        value={product_category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              product_name,
              product_category: value,
              product_date,
              product_quantity,
              price,
            };
            const result = onChange(modelFields);
            value = result?.product_category ?? value;
          }
          if (errors.product_category?.hasError) {
            runValidationTasks("product_category", value);
          }
          setProduct_category(value);
        }}
        onBlur={() => runValidationTasks("product_category", product_category)}
        errorMessage={errors.product_category?.errorMessage}
        hasError={errors.product_category?.hasError}
        {...getOverrideProps(overrides, "product_category")}
      ></TextField>
      <TextField
        label="Product date"
        isRequired={true}
        isReadOnly={false}
        value={product_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              product_name,
              product_category,
              product_date: value,
              product_quantity,
              price,
            };
            const result = onChange(modelFields);
            value = result?.product_date ?? value;
          }
          if (errors.product_date?.hasError) {
            runValidationTasks("product_date", value);
          }
          setProduct_date(value);
        }}
        onBlur={() => runValidationTasks("product_date", product_date)}
        errorMessage={errors.product_date?.errorMessage}
        hasError={errors.product_date?.hasError}
        {...getOverrideProps(overrides, "product_date")}
      ></TextField>
      <TextField
        label="Product quantity"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={product_quantity}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              product_name,
              product_category,
              product_date,
              product_quantity: value,
              price,
            };
            const result = onChange(modelFields);
            value = result?.product_quantity ?? value;
          }
          if (errors.product_quantity?.hasError) {
            runValidationTasks("product_quantity", value);
          }
          setProduct_quantity(value);
        }}
        onBlur={() => runValidationTasks("product_quantity", product_quantity)}
        errorMessage={errors.product_quantity?.errorMessage}
        hasError={errors.product_quantity?.hasError}
        {...getOverrideProps(overrides, "product_quantity")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              product_name,
              product_category,
              product_date,
              product_quantity,
              price: value,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || salesModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || salesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

import * as Yup from "yup"

export const Schema = Yup.object().shape({
  title: Yup.string()
    .min(5, "Todo title must be 5 chars")
    .max(20, "Todo title max 20 char long")
    .required("Todo title is required"),

  

});
import * as yup from "yup";
const vatNrRegex = RegExp(/^(SE)?[0-9]{12}$/);

export const createCustomerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required.")
    .trim()
    .min(1, "Name must be at least 1 character.")
    .max(50, `Name can't be more than 50 character.`),
  organisationNr: yup
    .string()
    .trim()
    .length(
      10,
      `The organisation number must be 10 digits without spaces in between.`
    ),
  paymentTerm: yup
    .number()
    .typeError("Payment Term is required.")
    .integer("Payment Term must be un integer")
    .min(0, "Payment Term must be a positive number, at least 0.")
    .required("Payment Term is required."),
  email: yup.string().email(),
  vatNr: yup
    .string()
    .matches(vatNrRegex, "VAT Nr must follow this fotmat: SE999999999901"),
  /* website: yup.string().url(), */
});

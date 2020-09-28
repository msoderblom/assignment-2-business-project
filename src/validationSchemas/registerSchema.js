import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required.")
    .trim()
    .min(1, "First name must be at least 1 character.")
    .max(30, `First name can't be more than 30 character.`),
  lastName: yup
    .string()
    .required("Last name is required.")
    .trim()
    .min(1, "Last name must be at least 1 character.")
    .max(30, `Last name can't be more than 30 characters.`),
  email: yup.string().email().required(),
  password: yup
    .string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters.")
    .matches(
      RegExp(/(?!^\d+$)^.+$/),
      "The password must not only consist of numbers."
    ),
  organisationName: yup.string().required("Organisation name is required."),
  organisationKind: yup
    .string()
    .required("Organisation kind is required.")
    .trim()
    .length(1, "Organisation kind must be exactly one character (0, 1 or 2).")
    .matches(RegExp(/[012]/), "Organisation kind must be 0, 1 or 2."),
});

// 1234567u: This password is too common
// 1234683u: Godkänt
// email: Un objet user avec ce champ adresse électronique existe déjà. ??

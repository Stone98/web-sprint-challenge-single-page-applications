import * as yup from "yup";

export default yup.object().shape({
    name: yup
        .string()
        .required("Name is required")
        .min(3, "Name must be 3 chars long"),
    size: yup
        .string()
        .required("Required."),
    sauce: yup
        .string()
        .required("Required."),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    canadianBacon: yup.boolean(),
    spicyItalianSausage: yup.boolean(),
    grilledChicken: yup.boolean(),
    onions: yup.boolean(),
    greenPepper: yup.boolean(),
    dicedTomatos: yup.boolean(),
    blackOlives: yup.boolean(),
    roastedGarlic: yup.boolean(),
    artichokeHearts: yup.boolean(),
    threeCheese: yup.boolean(),
    pineapple: yup.boolean(),
    extraCheese: yup.boolean(),
    substitute: yup
        .boolean(),
    specialInstructions: yup
        .string(),
    quantity: yup
        .number()
        .min(1, "Minimum order is 1.")
        .max(10, "Maximum order is 10."),
});
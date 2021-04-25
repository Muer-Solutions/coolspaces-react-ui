export default function validate(inputs) {
    let errors = {}

    if (!inputs.email) {
        errors.email = "Email is Required"
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
        errors.email = "Invalid email address"
    }

    console.log(errors)

    return errors

   
}
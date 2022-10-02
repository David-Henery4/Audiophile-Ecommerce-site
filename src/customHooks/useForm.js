import { useState } from 'react'

const useForm = (callBackSubmit) => {
  // Form values
  const [values, setValues] = useState({})
  // form errors
  const [errors, setErrors] = useState({})
  
  // Validate input values
  const validate =(e, value, name) => {
    switch (name) {
      case "name":
        if (value.length <= 2) {
          //set error state
          setErrors({
            ...errors,
            name: "Name needs at least 3 letters",
          });
        } else {
          const newObj = errors;
          delete newObj.name;
          setErrors(newObj);
        }
        break;
      //
      case "email":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: "Wrong format",
          });
        } else {
          const newObj = errors;
          delete newObj.email;
          setErrors(newObj);
        }
        break;
      //
      case "phone":
        if (value.length < 11 || value.length > 11) {
          setErrors({
            ...errors,
            phone: "Must be 11 numbers",
          });
        } else {
          const newObj = errors;
          delete newObj.phone;
          setErrors(newObj);
        }
        break;
      //
      case "address":
        if (value === String) {
          setErrors({
            ...errors,
            address: "Must be valid address",
          });
        } else {
          const newObj = errors;
          delete newObj.address;
          setErrors(newObj);
        }
        break;
      //
      case "zipCode":
        if (value.length <= 4 || value.length > 5) {
          setErrors({
            ...errors,
            zipCode: "ZIP Code must be 5 numbers",
          });
        } else {
          const newObj = errors;
          delete newObj.zipCode;
          setErrors(newObj);
        }
        break;
      //
      case "city":
        if (value.length <= 2) {
          setErrors({
            ...errors,
            city: "Must at least 3 characters",
          });
        } else {
          const newObj = errors;
          delete newObj.city;
          setErrors(newObj);
        }
        break;
      //
      case "country":
        if (value.length <= 2) {
          setErrors({
            ...errors,
            country: "Must at least 3 characters",
          });
        } else {
          const newObj = errors;
          delete newObj.country;
          setErrors(newObj);
        }
        break;
      //
      case "eMoneyNumber":
        if (value.length <= 8 || value.length >= 10) {
          setErrors({
            ...errors,
            eMoneyNumber: "Must be 9 Numbers",
          });
        } else {
          const newObj = errors;
          delete newObj.eMoneyNumber;
          setErrors(newObj);
        }
        break;
      //
      case "eMoneyPin":
        if (value.length <= 3 || value.length >= 5) {
          setErrors({
            ...errors,
            eMoneyPin: "Must be 4 Numbers",
          });
        } else {
          const newObj = errors;
          delete newObj.eMoneyPin;
          setErrors(newObj);
        }
        break;
      //
      default:
        break;
    }
  }
  //
  const handleSubmit = (e) => {
    if(e) e.preventDefault()
    if (Object.keys(errors).length <= 0 && Object.keys(values).length >= 1){
      callBackSubmit()
    }
  }
  // handle form inputs
  const handleChange = (e) => {
    e.preventDefault()
    let name = e.target.name;
    let value = e.target.value;
    validate(e,value,name)
    // set state values
    setValues({
      ...values,
      [name]: value
    })
  }
  
  return (
    {
      values,
      errors,
      handleChange,
      handleSubmit
    }
  )
}

export default useForm
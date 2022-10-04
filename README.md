# Frontend Mentor - Audiophile e-commerce website solution

This is a solution to the [Audiophile e-commerce website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add/Remove products from the cart
- Edit product quantities in the cart
- Fill in all fields in the checkout
- Receive form validations if fields are missed or incorrect during checkout
- See correct checkout totals depending on the products in the cart
  - Shipping always adds $50 to the order
  - VAT is calculated as 20% of the product total, excluding shipping
- See an order confirmation modal after checking out with an order summary
- **Bonus**: Keep track of what's in the cart, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)

### Screenshot

![home-screenshot](./readme-img/desktop-screenshot-home.png)


### Links

**(Links to be added!)**
- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Media Queries
- SASS/SCSS
- SASS Variables & Mixins
- Mobile-first workflow
- [React](https://reactjs.org) - JS library
- [React-Redux-Toolkit](https://redux-toolkit.js.org) - State management library
- [Redux-Persist](https://github.com/rt2zz/redux-persist) - Tool to persist state
- [React-Router-6](https://reactrouter.com/en/main) - For Internal Navigation


### What I learned

One of the main things I learned from this project was more about form validation as a whole and how to implement it in JavaSript & React. 
I had build form validation before but only on a small scale with one or two imputs and not a entire form like on this project.

When researching form validation, I found it to be quite a deep and interesting subject, for instance, learning about client side validation & server side validation and how it's safer to use server overall but client side is used for helping the user to complete the form properly and in the correct format.

When implementing client side validation there are also so many different ways of doing it, like using the HTML properties like isValid, isChecked, required and so many more. We can also do this type of validation using JavaScript and taking the forms input values and performing a custom validation check against them and after they have passed we can submit them, we can also use JavaScript to then handle the submit.

I also researched about how to implement form validation in react and found a lot of different ways of going about this, like creating an array of default values to check against a array of input values and then if one of them comes up invalid we though the invalid message to the user and don't submit the form.

Although I implemented it different to this method, as I felt it was a bit messy and cumbersome. So, after a bit more research, I found a blog post on Dev.to by a user called CodeBucks. In the post we explains how & why its beneficial to use a **custom hook** in order to implement form validation. So I decided to take inspiration from this and use a custom hook for form validation in this project. The reason I choose this way was because in using a custom hook the process is a lot more readable & stream lined and above all it is re-usable. This hook is easy customizable and can be used in future projects.

The custom hook works by taking an object of the input values on the change event and then place them in the hook. We then check each one against a validation check in a validate function, then if some fail it programmatically creates a error object with the properties of the name of the inputs that are invalid. We then can create error messages from this to display in the form. We also use the custom hook to control the submit action for the form. 

Here is a copy of it here, the validation checks and the error objects are set in the case section of the validation form:

```js
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
```

### Continued development

In the future I will definitely be researching more about form validation, as it is such a deep subject and I would like to know more about it the next time I need to implement it in a project. 


### Useful resources

- [Blog Post](https://dev.to/codebucks/form-validation-in-reactjs-by-building-reusable-custom-hook-1bg7) - This is the dev.to blog post by CodeBucks, which helped me understand the idea and benefits of implementing form validation with a custom hook.

- [Blog Post](https://felixgerschau.com/react-hooks-form-validation-typescript/#conclusion) -
Here is another blog post about custom hooks that you might find helpfull.

## Author

- Website - [David Henery](https://www.djhwebdevelopment.com)
- Frontend Mentor - [@David-Henery4](https://www.frontendmentor.io/profile/David-Henery4)
- LinkedIn - [David Henery](https://www.linkedin.com/in/david-henery-725458241)


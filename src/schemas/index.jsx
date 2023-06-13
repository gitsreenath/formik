// import * as Yup from 'yup'


// export const signupschema=Yup.object({
//     name:Yup.string().min(2).max(25).required("Please enter your name"),
//     email:Yup.string().email().required("enter a valid email"),
//     password:Yup.string().min(6).required("Enter a strong password"),
//     confpassword:Yup.string.required().oneOf([Yup.ref("password"),null],"Password must be same")
// })


import * as Yup from 'yup'



export  const signupschema =Yup.object({

    name:Yup.string().min(2).max(25).required("please enter your name"),
    email:Yup.string().email().required("Email required"),
    password:Yup.string().min(6).required("password required"),
    confpassword:Yup.string().required("confirm password required").oneOf([Yup.ref("password"),null],"password must match")
      
})  
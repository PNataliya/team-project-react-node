import * as yup from 'yup';

export const emailRegexp =
  /^[^-._]{1}[A-Za-z0-9._-]{1,}@[^-._]{1}[A-Za-z0-9.-]{0,}\.[A-Za-z]{2,4}$/;
export const passwordRegexp = /^[^ ]{7,32}$/;
export const nameRegexp = /^[a-zA-zа-яіїєА-ЯІЇЄ ]+$/;
export const locationRegexp = /^[a-zA-Z]+[,][ ][a-zA-Z]+$/;
export const phoneRegexp = /^[+]{1}[0-9]{12}$/;

export const validationSchema1 = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .matches(emailRegexp, 'Email must contain @ Example: yourmail@mail.com')
    .email(),
  password: yup
    .string()
    .matches(passwordRegexp, 'Any  symbols, min 7 characters max 32')
    .max(32, 'Must be 15 characters or less')
    .min(7, 'Must be at least 7 characters')
    .required('Password is required'),

  confirm_password: yup.string().when('password', {
    is: val => (val && val.length > 0 ? true : false),
    then: yup
      .string()
      .oneOf([yup.ref('password')], ' Please, сonfirm  Password'),
  }),
});

export const validationSchema2 = yup.object().shape({
  name: yup
    .string()
    .matches(
      nameRegexp,
      "Name may contain any letters. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Name is required'),

  location: yup
    .string()
    .matches(
      locationRegexp,
      'The location must consist of two words separated by a comma, for example: Kyiv, Kyiv'
    )
    .required('Location is required'),

  phone: yup
    .string()
    .matches(
      phoneRegexp,
      'The phone number must be in the format +380123456789'
    )
    .required('Phone number is required'),
});

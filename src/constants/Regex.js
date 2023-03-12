/* eslint-disable prettier/prettier */
export const passRegx = /^(?!.*[\s])(?=.*?[a-zA-Z0-9])(?=.*?[#?!@$%^&*\-_]).{8,}$/;
export const numRergx = /^[0-9]*$/;
// export const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const mailformat = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
export const spaceRegex = /\s/;
export const caps = /[A-Z]/;
export const specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
export const numRegex = /[0-9]/;
export const nameRegex = /^[-a-zA-Z]+(\s+[-a-zA-Z)]+)*$/;
export const cardNumberRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
// This regex matches Visa, MasterCard, American Express, Diners Club, Discover, and JCB cards
export const cvvRegex = /^[0-9]{3,4}$/;
export const expiryRegex =  /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
export const zipcodeRegex = /^\d{5}(?:[-\s]\d{4})?$/;
export const phoneNumberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
export const ssnumberRegex = /^\d{9}$/;
export const memberIdRegex = /^\d{10}$/;
export const USERNAME_REGEX = /^[a-z0-9_@./#&+-ñáéíóúü]*$/g;

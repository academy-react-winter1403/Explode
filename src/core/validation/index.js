import * as Yup from 'yup';

export const step1Schema = Yup.object({
  phoneNumber: Yup.string()
    .required('شماره همراه الزامی است')
    .matches(/^09[0-9]{9}$/, 'شماره همراه معتبر نیست'),
});

export const step2Schema = Yup.object({
  verifyCode: Yup.string()
    .required('کد تایید الزامی است')
    .min(3, 'کد تایید کوتاه است'),
});

export const step3Schema = Yup.object({
  gmail: Yup.string().email('ایمیل معتبر نیست').required('ایمیل الزامی است'),
  password: Yup.string()
    .min(6, 'رمز عبور باید حداقل ۶ کاراکتر باشد')
    .required('رمز عبور الزامی است'),
});

export const emailOrPhoneSchema = Yup.object({
  phoneOrGmail: Yup.string()
    .required('وارد کردن ایمیل یا شماره همراه الزامی است')
    .test(
      'is-email-or-phone',
      'لطفاً ایمیل معتبر یا شماره همراه وارد کنید',
      (value) => {
        const isEmail = Yup.string().email().isValidSync(value);

        const isPhone = /^09[0-9]{9}$/.test(value);

        return isEmail || isPhone;
      },
    ),
  password: Yup.string()
    .min(6, 'رمز عبور باید حداقل ۶ کاراکتر باشد')
    .required('رمز عبور الزامی است'),
});

export const emailSchema = Yup.object({
  email: Yup.string().email('ایمیل معتبر نیست').required('ایمیل الزامی است'),
});

export const NewPasswordSetSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required('رمز عبور جدید الزامی است')
    .min(8, 'رمز عبور باید حداقل ۸ کاراکتر باشد'),
  newPasswordConfirm: Yup.string()
    .required('تأیید رمز عبور الزامی است')
    .oneOf(
      [Yup.ref('newPassword'), null],
      'رمزهای عبور وارد شده باید یکسان باشند',
    ),
});

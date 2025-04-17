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
export const ProfileSchema = Yup.object().shape({
  name: Yup.string()
    .required('نام الزامی است')
    .min(3, ' نام باید حداقل 3 کاراکتر باشد'),
  lastname: Yup.string()
    .required('نام خانوادگی الزامی است')
    .min(3, ' نام خانوادگی باید حداقل 3 کاراکتر باشد'),
  aboutme: Yup.string()
    .required('درباره من الزامی است')
    .min(20, ' درباره من باید حداقل 20 کاراکتر باشد'),
  phoneNumber: Yup.string()
    .required('شماره همراه الزامی است')
    .matches(/^09[0-9]{9}$/, 'شماره همراه معتبر نیست'),
  nationalcode: Yup.string()
    .required(' کد ملی الزامی است')
    .matches(10, 'کد ملی باید حداقل 10 کاراکتر باشد'),
  birthday: Yup.string().required('تاریخ تولد الزامی است'),
  email: Yup.string().email('ایمیل معتبر نیست').required('ایمیل الزامی است'),
  address: Yup.string()
    .required('آدرس الزامی است')
    .min(10, 'آدرس باید حداقل 10 کاراکتر باشد'),
});

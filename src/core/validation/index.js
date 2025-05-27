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
export const step2loginSchema = Yup.object({
  VrifyCode: Yup.string()
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
  FName: Yup.string()
    .required('نام الزامی است')
    .min(3, ' نام باید حداقل 3 کاراکتر باشد'),
  LName: Yup.string()
    .required('نام خانوادگی الزامی است')
    .min(3, ' نام خانوادگی باید حداقل 3 کاراکتر باشد'),
  UserAbout: Yup.string()
    .required('درباره من الزامی است')
    .min(20, ' درباره من باید حداقل 20 کاراکتر باشد'),
  phoneNumber: Yup.string()
    .required('شماره همراه الزامی است')
    .matches(/^09[0-9]{9}$/, 'شماره همراه معتبر نیست'),
  NationalCode: Yup.string()
    .required('کد ملی الزامی است')
    .length(10, 'کد ملی باید دقیقاً ۱۰ رقم باشد')
    .matches(/^\d+$/, 'کد ملی باید فقط عدد باشد'),
  BirthDay: Yup.string().required('تاریخ تولد الزامی است'),
  gender: Yup.string().required('جنسیت خود را وارد کنید'),
  email: Yup.string().email('ایمیل معتبر نیست').required('ایمیل الزامی است'),
  HomeAdderess: Yup.string()
    .required('آدرس الزامی است')
    .min(10, 'آدرس باید حداقل 10 کاراکتر باشد'),
});
export const LinksShema = Yup.object().shape({
  TelegramLink: Yup.string()
    .required(' لینک تلگرام جدید الزامی است')
    .min(3, ' لینک تلگرام باید حداقل 3 کاراکتر باشد'),
  LinkdinProfile: Yup.string()
    .required('لینک لینکدین ضروری است')
    .min(3, ' لینک لینکدین باید حداقل 3 کاراکتر باشد'),
});

export const fileSchema = Yup.object().shape({
  file: Yup.mixed()
    .required('لطفاً یک فایل انتخاب کنید')
    .test(
      'fileType',
      'فقط فایل‌های تصویری مجاز هستند',
      (value) => value && value.type.match('image.*'),
    )
    .test(
      'fileSize',
      'حجم فایل نباید بیشتر از ۵ مگابایت باشد',
      (value) => value && value.size <= 5 * 1024 * 1024,
    ),
});
export const commentValidation = Yup.object({
  Title: Yup.string().required('عنوان نظر الزامی است'),
  Describe: Yup.string().required('متن نظر الزامی است'),
});
// Validation schema using Yup based on provided error messages

export const paymentvalidationSchema = Yup.object({
  paid: Yup.number()
    .typeError('مبلغ پرداختی باید یک عدد باشد')
    .required('مبلغ پرداختی الزامی است'),
  courseId: Yup.string().required('شناسه دوره الزامی است'),
  paymentDate: Yup.date()
    .typeError('تاریخ پرداخت باید یک تاریخ معتبر باشد')
    .required('تاریخ پرداخت الزامی است'),
  paymentInvoiceNumber: Yup.number()
    .typeError('شماره فاکتور باید یک عدد باشد')
    .integer('شماره فاکتور باید یک عدد صحیح باشد')
    .required('شماره فاکتور الزامی است'),
});

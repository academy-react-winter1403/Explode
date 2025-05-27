import { Form, Formik } from 'formik';
import CustomInputField from '../../../../../components/shared/CustomInputField';
import toast from 'react-hot-toast';
import { editUserProfileInfo } from '../../../../../core/services/UserProfileInfo';
import { LinksShema } from '../../../../../core/validation';
import Button from '../../../../../components/shared/Button';
import { useSelector } from 'react-redux';
const Links = () => {
  const { userProfile } = useSelector((state) => state.userProfile);
  const onSubmit = async (values) => {
    const formData = new FormData();

    // 1. اضافه کردن مقادیر جدید از values
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    // 2. اضافه کردن تمام داده‌های userProfile
    Object.keys(userProfile).forEach((key) => {
      // از اضافه کردن مجدد فیلدهایی که در values وجود دارند جلوگیری می‌کنیم

      formData.append(key, userProfile[key]);
    });

    const res = await editUserProfileInfo(formData);
    if (res.success) {
      toast.success('اطلاعات کاربری شما با موفقیت ثبت شد');
    }
  };

  return (
    <>
      {' '}
      <Formik
        initialValues={{
          TelegramLink: userProfile.telegramLink || '',
          LinkdinProfile: userProfile.linkdinProfile || '',
        }}
        onSubmit={onSubmit}
        validationSchema={LinksShema}
      >
        {({ isValid }) => (
          <Form>
            <div className="flex h-[100%] max-w-[600px] flex-col gap-8">
              <div className="flex flex-col gap-[16px]">
                <CustomInputField
                  name="TelegramLink"
                  label="تلگرام"
                  type="text"
                  placeholder="لینک تلگرام خود را وارد کنید"
                  className="flex"
                />
                <CustomInputField
                  name="LinkdinProfile"
                  label="لینکدین"
                  type="text"
                  placeholder="لینک لینکدین خود را وارد کنید"
                  className="flex w-[100%]"
                />
              </div>
              <Button
                className={'mt-3 w-fit'}
                type="submit"
                disabled={!isValid}
                isLoading={false}
              >
                اعمال تغییرات
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default Links;

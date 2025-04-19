import { Form, Formik } from 'formik';
import CustomInputField from '../../../../../components/shared/CustomInputField';
import toast from 'react-hot-toast';
import { editUserProfileInfo } from '../../../../../core/services/UserProfileInfo';
import { LinksShema } from '../../../../../core/validation';
import Button from '../../../../../components/shared/Button';
const Links = () => {
  const onSubmit = async (values) => {
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });
    console.log(formData);
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
          TelegramLink: '',
          LinkdinProfile: '',
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

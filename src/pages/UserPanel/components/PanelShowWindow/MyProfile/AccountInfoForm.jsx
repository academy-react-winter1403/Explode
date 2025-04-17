import { ProfileSchema } from '../../../../../core/validation';
import CustomInputField from '../../../../../components/shared/CustomInputField';
import GenderField from './GenderField';
import Button from '../../../../../components/shared/Button';
import { Form, Formik } from 'formik';
const AccountInfoForm = () => {
  return (
    <Formik
      initialValues={{
        phoneOrGmail: '',
        password: '',
        rememberMe: false,
      }}
      validationSchema={ProfileSchema}
    >
      {({ isValid }) => (
        <Form>
          <div className="flex h-[100%] max-w-[600px] flex-col gap-8">
            <div className="flex flex-col gap-[4px]">
              <div className="flex w-full gap-12">
                {' '}
                <CustomInputField
                  name="name"
                  label="نام"
                  type="text"
                  placeholder="نام خود را وارد کنید"
                  className="flex w-[50%]"
                />
                <CustomInputField
                  name="lastname"
                  label="نام خانوادگی"
                  type="text"
                  placeholder="نام خانوادگی خود را وارد کنید"
                  className="flex w-[50%]"
                />
              </div>

              <CustomInputField
                name="aboutme"
                label="درباره من"
                type="textarea"
                placeholder="متن درباره خود را وارد کنید"
              />
              <div className="flex w-full gap-12">
                {' '}
                <CustomInputField
                  name="phoneNumber"
                  label="شماره همراه"
                  type="text"
                  placeholder="شماره همراه خود را وارد کنید"
                  className="flex w-[50%]"
                />
                <CustomInputField
                  name="nationalcode"
                  label="کد ملی"
                  type="text"
                  placeholder="کد ملی خود را وارد کنید"
                  className="flex w-[50%]"
                />
              </div>
              <div className="flex w-full gap-4">
                {' '}
                <CustomInputField
                  name="birthday"
                  label="تاریخ تولد"
                  type="date"
                  placeholder="تاریخ تولد خود را وارد کنید"
                  className="flex w-[50%]"
                />
                <span></span>
                <GenderField
                  name="gender"
                  label="جنسیت"
                  className="my-custom-class"
                />
              </div>
              <CustomInputField
                name="email"
                label="ایمیل"
                type="textarea"
                placeholder="متن درباره خود را وارد کنید"
              />
              <CustomInputField
                name="address"
                label="محل سکونت"
                type="textarea"
                placeholder="متن درباره خود را وارد کنید"
              />
              <Button
                className={'mt-3 w-fit'}
                type="submit"
                disabled={!isValid}
                isLoading={false}
              >
                اعمال تغییرات
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default AccountInfoForm;

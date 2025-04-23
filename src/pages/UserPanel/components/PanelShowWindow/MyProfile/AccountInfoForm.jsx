import { ProfileSchema } from '../../../../../core/validation';
import CustomInputField from '../../../../../components/shared/CustomInputField';
import GenderField from './GenderField';
import Button from '../../../../../components/shared/Button';
import { Form, Formik } from 'formik';
import {
  editUserProfileInfo,
  getUserProfileInfo,
} from '../../../../../core/services/UserProfileInfo';
import toast from 'react-hot-toast';
import { setPanelState } from '../../../../../redux/userPanelSlice';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

const AccountInfoForm = () => {
  const dispatch = useDispatch();
  const [initialFormValues, setInitialFormValues] = useState({
    FName: '',
    LName: '',
    UserAbout: '',
    NationalCode: '',
    BirthDay: '',
    Gender: '',
    HomeAdderess: '',
    phoneNumber: '',
    email: '',
  });

  const fetchUserData = async () => {
    try {
      const res = await getUserProfileInfo();
      if (res) {
        setInitialFormValues({
          FName: res.fName || '',
          LName: res.lName || '',
          UserAbout: res.userAbout || '',
          NationalCode: res.nationalCode || '',
          BirthDay: res.birthDay || '',
          Gender: res.gender || '',
          HomeAdderess: res.homeAdderess || '',
          phoneNumber: res.phoneNumber || '',
          email: res.email || '',
        });
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const onSubmit = async (values) => {
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });
    const res = await editUserProfileInfo(formData);
    if (res.success) {
      toast.success('اطلاعات کاربری شما با موفقیت ثبت شد');
      dispatch(setPanelState('dashboard'));
    }
  };

  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={onSubmit}
      validationSchema={ProfileSchema}
      enableReinitialize={true} // این پراپرتی اجازه می‌دهد initialValues پس از دریافت داده‌ها آپدیت شود
    >
      {({ isValid, isSubmitting, dirty }) => (
        <Form>
          <div className="flex h-[100%] max-w-[600px] flex-col gap-8">
            <div className="flex flex-col gap-[4px]">
              <div className="flex w-full gap-12">
                <CustomInputField
                  name="FName"
                  label="نام"
                  type="text"
                  placeholder="نام خود را وارد کنید"
                  className="flex w-[50%]"
                />
                <CustomInputField
                  name="LName"
                  label="نام خانوادگی"
                  type="text"
                  placeholder="نام خانوادگی خود را وارد کنید"
                  className="flex w-[50%]"
                />
              </div>

              <CustomInputField
                name="UserAbout"
                label="درباره من"
                type="textarea"
                placeholder="متن درباره خود را وارد کنید"
              />

              <div className="flex w-full gap-12">
                <CustomInputField
                  name="phoneNumber"
                  label="شماره همراه"
                  type="text"
                  placeholder="شماره همراه خود را وارد کنید"
                  className="flex w-[50%]"
                />
                <CustomInputField
                  name="NationalCode"
                  label="کد ملی"
                  type="text"
                  placeholder="کد ملی خود را وارد کنید"
                  className="flex w-[50%]"
                />
              </div>

              <div className="flex w-full gap-4">
                <CustomInputField
                  name="BirthDay"
                  label="تاریخ تولد"
                  type="date"
                  placeholder="تاریخ تولد خود را وارد کنید"
                  className="flex w-[50%]"
                />
                <GenderField
                  name="Gender"
                  label="جنسیت"
                  className="my-custom-class"
                />
              </div>

              <CustomInputField
                name="email"
                label="ایمیل"
                type="email"
                placeholder="ایمیل خود را وارد کنید"
              />

              <CustomInputField
                name="HomeAdderess"
                label="محل سکونت"
                type="textarea"
                placeholder="آدرس محل سکونت خود را وارد کنید"
              />

              <Button
                className="mt-3 w-fit"
                type="submit"
                disabled={!isValid || isSubmitting || !dirty}
                isLoading={isSubmitting}
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

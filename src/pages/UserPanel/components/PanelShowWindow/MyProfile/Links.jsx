import { Form, Formik } from 'formik';
import CustomInputField from '../../../../../components/shared/CustomInputField';

const Links = () => {
  return (
    <>
      {' '}
      <Formik
        initialValues={{
          phoneOrGmail: '',
          password: '',
          rememberMe: false,
        }}
      >
        {() => (
          <Form>
            <div className="flex h-[100%] max-w-[600px] flex-col gap-8">
              <div className="flex flex-col gap-[16px]">
                <CustomInputField
                  name="telegram"
                  label="تلگرام"
                  type="text"
                  placeholder="لینک تلگرام خود را وارد کنید"
                  className="flex"
                />
                <CustomInputField
                  name="linkdin"
                  label="لینکدین"
                  type="text"
                  placeholder="لینک لینکدین خود را وارد کنید"
                  className="flex w-[100%]"
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default Links;

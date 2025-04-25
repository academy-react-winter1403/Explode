import clsx from 'clsx';
import { Field, ErrorMessage, useFormikContext } from 'formik';

const GenderField = ({ name = 'gender', label = 'جنسیت', className }) => {
  const { values, setFieldValue } = useFormikContext();
  console.log(values[name] === false);
  return (
    <div className={clsx('flex flex-col items-center gap-4', className)}>
      <span className="w-full font-semibold text-[#2F2F2F]">{label}</span>
      <div className="flex w-full flex-row gap-8">
        <div className="flex w-[41px] items-center gap-2">
          <Field
            type="radio"
            id="male"
            name={name}
            value="true"
            checked={values[name] === true}
            onChange={() => setFieldValue(name, true)}
            className="text-primary focus:ring-primary h-4 w-4"
          />
          <label htmlFor="male" className="text-sm font-medium text-gray-700">
            مرد
          </label>
        </div>
        <div className="flex w-[41px] items-center gap-2">
          <Field
            type="radio"
            id="female" // اصلاح: id باید با htmlFor لیبل مطابقت داشته باشد
            name={name}
            value="false"
            checked={values[name] === false} // بررسی مقدار فعلی
            onChange={() => setFieldValue(name, false)} // تغییر مقدار
            className="text-primary focus:ring-primary h-4 w-4"
          />
          <label htmlFor="female" className="text-sm font-medium text-gray-700">
            زن
          </label>
        </div>
        <span className="text-primary leading flex w-[100px] items-center text-center text-[14px] font-[500]">
          انتخاب کنید
        </span>
        <ErrorMessage
          name={name}
          component="div"
          className="text-sm text-red-500"
        />
      </div>
    </div>
  );
};

export default GenderField;

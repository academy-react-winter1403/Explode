import { Link } from 'react-router';
const LoggedIn = () => {
  return (
    <Link
      to={'/login'}
      className="bg-primary rounded-[40px] p-[8px_16px] text-[16px] font-[600] text-[#FCFCFC]"
    >
      ثبت نام یا ورود
    </Link>
  );
};
export default LoggedIn;

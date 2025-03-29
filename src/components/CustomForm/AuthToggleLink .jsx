import { Link } from 'react-router-dom';

const AuthToggleLink = ({ showLoginLink, hideLoginOrRegisterLink }) => {
  if (hideLoginOrRegisterLink) return null;

  return (
    <div className="flex justify-center gap-1">
      <span className="font-semibold">
        {showLoginLink ? 'حساب کاربری دارید؟' : 'حساب کاربری ندارید؟'}
      </span>
      <Link
        className="text-primary cursor-pointer font-semibold underline"
        to={showLoginLink ? '/login' : '/register'}
      >
        {showLoginLink ? 'ورود به حساب کاربری' : 'ایجاد حساب کاربری'}
      </Link>
    </div>
  );
};

export default AuthToggleLink;

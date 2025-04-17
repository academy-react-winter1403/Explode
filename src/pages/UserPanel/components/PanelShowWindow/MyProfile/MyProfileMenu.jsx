import clsx from 'clsx';
import { MyProfileSideBarMenuData } from './MyProfileSideBarMenuData';

const MyProfileMenu = ({ activeTab, setActiveTab }) => {
  const changeTab = (value) => {
    setActiveTab(value);
  };
  return (
    <div className="h-full border-l-2 border-[#DCDCDC] pl-2">
      <ul className="flex cursor-pointer flex-col flex-wrap items-center gap-8 pt-6 pr-2 max-[600px]:px-[30px] max-[600px]:py-5">
        {MyProfileSideBarMenuData.map((item) => (
          <li
            className={clsx(
              'ml-auto px-[16px] py-[11px] pl-12 text-[18px] font-[600] whitespace-nowrap text-[#707070]',
              {
                'text-primary rounded-[48px] bg-[#F1F1F1]':
                  activeTab === item.value,
                'text-[#707070]': activeTab !== item.value,
              },
            )}
            key={item.id}
            onClick={() => changeTab(item.value)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MyProfileMenu;

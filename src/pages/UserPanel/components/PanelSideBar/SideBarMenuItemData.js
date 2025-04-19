import dashicon from '../../../../assets/icons/dashboardIcon.png';
import mycourseicon from '../../../../assets/icons/course.png';
import bookicon from '../../../../assets/icons/bok.png';
import favbookicon from '../../../../assets/icons/favbook.png';
import favblogsicon from '../../../../assets/icons/library.png';
import profileicon from '../../../../assets/icons/user-square.png';
import payicon from '../../../../assets/icons/money-send-02-stroke-rounded 1.png';

export const SideBarMenuItemData = [
  { id: 1, label: 'داشبرد', iconAddress: dashicon, value: 'dashboard' },
  { id: 2, label: 'دوره من', iconAddress: mycourseicon, value: 'myCourse' },
  { id: 3, label: 'رزرو من', iconAddress: bookicon, value: 'myReserve' },
  {
    id: 4,
    label: 'دوره های مورد علاقه',
    iconAddress: favbookicon,
    value: 'myFavCourses',
  },
  {
    id: 5,
    label: 'بلاک های مورد علاقه',
    iconAddress: favblogsicon,
    value: 'myFavBlogs',
  },
  { id: 6, label: 'پروفایل', iconAddress: profileicon, value: 'myprofile' },
  { id: 7, label: 'پرداخت ها', iconAddress: payicon, value: 'payments' },
];

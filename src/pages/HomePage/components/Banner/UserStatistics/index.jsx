import { useEffect, useState, useCallback } from 'react';
import UserGroupDisplay from './UserGroupDisplay';
import {
  getTeacherCountReports,
  getUserCountReports,
} from '../../../../../core/services/userStatisticsReport';

const UserActivity = () => {
  const [landingReports, setLandingReports] = useState({});
  const [teachersList, setTeachersList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUserStatisticsReport = useCallback(async () => {
    setLoading(true);
    const [userReports, teachers] = await Promise.all([
      getUserCountReports(),
      getTeacherCountReports(),
    ]);

    setLandingReports(userReports);
    setTeachersList(teachers.slice(0, 3));
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUserStatisticsReport();
  }, [fetchUserStatisticsReport]);

  return (
    <div className="w-[295px] max-[662px]:order-1 max-[662px]:flex max-[662px]:w-full max-[662px]:flex-col max-[662px]:items-center">
      <UserGroupDisplay
        loading={loading}
        count={landingReports.studentCount}
        type="students"
        label="دانشجوی فعال در دوره"
      />
      <UserGroupDisplay
        loading={loading}
        count={landingReports.teacherCount}
        items={teachersList}
        type="teachers"
        label="اساتید برتر جهان"
      />
    </div>
  );
};

export default UserActivity;

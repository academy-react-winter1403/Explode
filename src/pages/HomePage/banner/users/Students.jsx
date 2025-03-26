import { Fragment } from 'react'
import IconSet from '../../../../components/shared/IconSet'
import { TitleSkeleton } from '../../../skeleton/landing-reports'

const Students = ({ loading, studentCount }) => {
  return (
    <div className="flex items-center ">
      <div className="flex items-center">
        <IconSet imageAddress={'/src/assets/img/user.png'} firstSize={32} secondSize={32} className={"rounded-[50%] border-[2px] border-[#FCFCFC] block"} />
        <IconSet imageAddress={'/src/assets/img/user2.png'} firstSize={32} secondSize={32} className={"rounded-[50%] border-[2px] border-[#FCFCFC] block relative right-[-10px]"} />
        <IconSet imageAddress={'/src/assets/img/user3.png'} firstSize={32} secondSize={32} className={"rounded-[50%] border-[2px] border-[#FCFCFC] block relative right-[-20px]"} />
      </div>
      <div className="flex items-center  gap-[5px] text-[14px] font-[500] relative right-[-20px]">
        {loading ? <TitleSkeleton width={130}/> : (<Fragment><span>+{studentCount}</span> <span>دانشجوی فعال در دوره</span></Fragment>)}
      </div>
    </div>
  )
}
export default Students
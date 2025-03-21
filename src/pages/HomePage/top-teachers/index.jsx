import Description from "./description";
import TeachersList from './teachers-list';

const TopTeachers = () => {

    return (
        <section className="mb-[80px]  bg-thirdly rounded-[32px] m-[0_auto] p-[40px_16px]">
            <div className="max-w-[1360px] max-[1170px]:flex-wrap max-[1170px]:justify-center m-[0_auto] flex gap-[20px] items-center justify-between text-[#FCFCFC]">
                <Description />
                <TeachersList />
            </div>
        </section>
    )
}
export default TopTeachers
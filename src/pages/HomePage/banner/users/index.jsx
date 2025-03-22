import { useEffect, useState } from 'react'
import { getLandingReports } from '../../../../core/services/api/landing-reports'
import { getAllTeachers } from './../../../../core/services/api/teachers/index';
import Teachers from './Teachers';
import Students from './Students';
const Users = () => {
    const [landingReports, setLandingReports] = useState({})
    const { teacherCount, studentCount } = landingReports
    const [loading, setLoading] = useState(false)
    const [teachersList, setTeachersList] = useState([])

    const getReports = async () => {
        try {
            setLoading(true)
            const result = await getLandingReports()
            setLandingReports(result)
            setLoading(false)
        }
        catch {
            setLoading(false)
        }
    }

    const getTeachers = async () => {
        try {
            setLoading(true)
            const teachers = await getAllTeachers()
            setTeachersList(teachers.slice(0, 3))
            setLoading(false)
        }
        catch {
            setLoading(false)
        }
    }

    useEffect(() => {
        getReports()
        getTeachers()
    }, [])

    return (
        <div className="w-[295px] max-[662px]:order-1 max-[662px]:w-[100%] max-[662px]:flex max-[662px]:flex-col max-[662px]:items-center">
            <Students loading={loading} studentCount={studentCount} />
            <Teachers loading={loading} teacherCount={teacherCount} teachersList={teachersList} />
        </div >
    )
}
export default Users
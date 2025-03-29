import React from 'react'
import DropDownList from '../../../../../components/shared/drop-down-list'


const CourseLevel = ({ setLevelId, courseLevels, setCurrentPage }) => {
    const handleLevels = (data) => {
        setLevelId(data)
        setCurrentPage(1)
    }
    return (
        <DropDownList
            imageSrc={'/src/assets/icons/course-level.svg'}
            titleText={'سطح آموزشی'}
            handleFunction={handleLevels}
            defaultOptionText={'سطح مورد نظر را انتخاب کنید'}
        >
            {

                courseLevels.map((item, index) => (
                    <option key={index} value={item.id}>{item.levelName}</option>
                ))
            }
        </DropDownList>
    )
}

export default CourseLevel
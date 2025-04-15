import React from 'react'
import DropDownList from '../../../../components/shared/drop-down-list'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlogs, setCategory, setCurrentPage } from '../../../../core/redux/blogSlice'

const Category = () => {
    const dispatch = useDispatch()
    const handleCategory = (data) => {
        dispatch(setCategory(data))
        dispatch(setCurrentPage(1))
        dispatch(fetchBlogs())
    }
    const categories = useSelector((state) => state.blogs.categories)
    return (
        <DropDownList
            imageSrc={'/src/assets/icons/category.svg'}
            titleText={'دسته بندی'}
            handleFunction={handleCategory}
            defaultOptionText={'دسته مورد نظر را انتخاب کنید'}
        >
            {categories.map((item, index) => (
                <option key={index} value={item.id}>
                    {item.categoryName}
                </option>
            ))}
        </DropDownList>
    )
}

export default Category
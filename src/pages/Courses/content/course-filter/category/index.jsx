import DropDownList from "../../../../../components/shared/drop-down-list"


const Category = ({ categories, setCategory, setCurrentPage }) => {
    const handleCategory = (data) => {
        setCategory(data)
        setCurrentPage(1)
    }
    return (
        <DropDownList
            imageSrc={'/src/assets/icons/category.svg'}
            titleText={'دسته بندی'}
            handleFunction={handleCategory}
            defaultOptionText={'دسته مورد نظر را انتخاب کنید'}
        >
            {

                categories.map((item, index) => (
                    <option key={index} value={item.id}>{item.techName}</option>
                ))
            }
        </DropDownList>
    )
}
export default Category
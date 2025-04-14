import Title from '../../../../components/shared/filter-sections-title'

const Calender = () => {
    const handleStartDate = (data) => {

    }
    const handleEndtDate = (data) => {

    }
    return (
        <div className="mb-[20px]">
            <Title
                imageSrc={'/src/assets/icons/calender.svg'}
                titleText={'تاریخ برگزاری - اتمام'}
            />
            <div className="flex h-[48px] items-center gap-[10px] rounded-[16px] bg-[#F1F1F1] p-[0_16px] text-[11px] font-[500] text-[#707070]">
                <input
                    onChange={(event) => handleStartDate(event.target.value)}
                    type="date"
                    className="w-[50%] outline-hidden"
                />{' '}
                -{' '}
                <input
                    onChange={(event) => handleEndtDate(event.target.value)}
                    className="w-[50%] outline-hidden"
                    type="date"
                    name=""
                    id=""
                />
            </div>
        </div>
    )
}

export default Calender
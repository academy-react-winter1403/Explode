import clsx from 'clsx';

const SearchInput = ({ SearchHandler, placeholder, className }) => {
  return (
    <div className="relative">
      <input
        type="text"
        onChange={(event) => SearchHandler(event.target.value)}
        placeholder={placeholder}
        className={clsx(
          'rounded-[16px] bg-[#F1F1F1] p-[0_15px] text-[12px] font-[500] text-[#707070] outline-hidden',
          className,
        )}
      />
      <div className="bg-primary absolute top-0 left-0 flex h-[48px] w-[48px] items-center justify-center rounded-[16px]">
        <span
          className="h-[24px] w-[24px] bg-contain bg-center"
          style={{
            backgroundImage: `url(/src/assets/icons/light-search.svg)`,
          }}
        ></span>
      </div>
    </div>
  );
};
export default SearchInput;

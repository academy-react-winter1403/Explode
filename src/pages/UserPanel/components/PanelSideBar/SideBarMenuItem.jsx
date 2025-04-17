const SideBarMenuItem = ({ item, handlerFunction }) => {
  return (
    <div
      onClick={handlerFunction}
      className="text-secondry text-[18px] font-[500]"
    >
      {item.label}
    </div>
  );
};
export default SideBarMenuItem;

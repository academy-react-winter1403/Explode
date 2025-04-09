import GenericCard from './GenericCardItem';

const GenericCardList = ({ data, cardType = 'service', ...restProps }) => {
  //card for oursevice and our goals
  return (
    <>
      {data.map((item, index) => (
        <GenericCard
          key={index}
          item={item}
          layout={cardType === 'service' ? 'row' : 'column'}
          hasIcon={cardType === 'service'}
          hasImage={cardType === 'goal'}
          {...restProps}
        />
      ))}
    </>
  );
};

export default GenericCardList;

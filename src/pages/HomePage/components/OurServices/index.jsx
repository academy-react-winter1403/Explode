import GenericCardList from '../../../../components/GenericCardList';
import PageTitle from '../../../../components/PageTitle';
import { OurServicesCardData } from './OurServicesCardData';

const OurServices = () => {
  return (
    <section className="mb-[80px]">
      <PageTitle
        title="خدماتی که ما در طی دوره‌ها به شما ارائه میدهیم"
        className="mb-[25px] w-[400px]"
      />
      <div className="m-[0_auto] flex max-w-[1360px] flex-wrap justify-between gap-[20px] max-[1460px]:p-[0_16px]">
        <GenericCardList
          data={OurServicesCardData}
          cardType="service"
          cardClasses="min-h-[144px] w-[664px] bg-[#F6F6F6]"
        />
      </div>
    </section>
  );
};

export default OurServices;

import GenericCardList from '../../../../components/GenericCardList';
import PageTitle from '../../../../components/PageTitle';
import IconSet from '../../../../components/shared/IconSet/index';
import { AcademyGoalsCardData } from './AcademyGoalsCardData';

const AcademyGoals = () => {
  return (
    <section className="m-[80px_0]" id="academy-goal">
      <PageTitle title="اهداف ما در آکادمی" size={32} />
      <div className="m-[0_auto] max-w-[1461px] bg-[url(/src/assets/img/goals-bg.svg)] bg-contain bg-center bg-no-repeat max-[1460px]:bg-[url('')]">
        <div className="m-[0_auto] flex max-w-[1361px] flex-wrap items-center justify-between max-[1460px]:gap-[10px] max-[1460px]:p-[0_16px] max-[1360px]:justify-center max-[700px]:justify-center">
          <GenericCardList
            data={AcademyGoalsCardData}
            cardType="goal"
            cardClasses="h-[443px] max-w-[321px] max-[700px]:max-w-[100%]"
            titleClasses="max-[700px]:w-[100%] max-[700px]:text-right"
            descriptionClasses="max-[700px]:w-[100%] max-[700px]:text-right"
          />
        </div>
      </div>
    </section>
  );
};

export default AcademyGoals;

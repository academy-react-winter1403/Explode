import { clsx } from 'clsx';

const FormStepNavigation = ({ steps, currentStep }) => {
  const stepStyles = {
    active: 'bg-primary',
    completed: 'bg-primary text-[#707070] opacity-[0.6]',
    upcoming: 'bg-secondry text-[#707070]',
  };

  return (
    <div className="mx-3 flex flex-col-reverse items-center gap-4 py-5 text-center text-sm font-semibold sm:mx-0 sm:flex-row-reverse sm:justify-between sm:text-right">
      {steps.map((step) => (
        <div
          key={step.id}
          className={clsx('flex w-full cursor-pointer flex-col', {
            'text-[#707070]': currentStep !== step.id,
          })}
        >
          <span
            className={clsx('mb-1 h-2 w-full rounded-lg', {
              [stepStyles.active]: currentStep === step.id,
              [stepStyles.completed]: currentStep > step.id,
              [stepStyles.upcoming]: currentStep < step.id,
            })}
          />
          <span className="text-xs whitespace-nowrap sm:text-sm md:text-base">
            {step.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FormStepNavigation;

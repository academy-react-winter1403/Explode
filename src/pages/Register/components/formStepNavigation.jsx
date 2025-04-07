import { clsx } from 'clsx';

const FormStepNavigation = ({ steps, currentStep }) => {
  const stepStyles = {
    active: 'bg-primary',
    completed: 'bg-primary text-[#707070] opacity-[0.6]',
    upcoming: 'bg-secondary text-[#707070]',
  };
  return (
    <div className="flex flex-row-reverse gap-2 py-[20px] text-center text-sm font-semibold">
      {steps.map((step) => (
        <div
          key={step.id}
          className={clsx('flex cursor-pointer flex-col', {
            'text-[#707070]': currentStep != step.id,
          })}
        >
          <span
            className={clsx('mb-1 h-[8px] w-[156px] rounded-[9px]', {
              [stepStyles.active]: currentStep == step.id,
              [stepStyles.completed]: currentStep > step.id,
              [stepStyles.upcoming]: currentStep < step.id,
            })}
          ></span>
          {step.label}
        </div>
      ))}
    </div>
  );
};
export default FormStepNavigation;

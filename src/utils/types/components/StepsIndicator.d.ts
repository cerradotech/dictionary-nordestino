declare type StepActionProps = {
  label?: string;
  type?: 'button' | 'submit' | 'reset';
  callback?(): void;
  preventAction?: boolean;
  loading?: boolean;
};

declare type StepProps = {
  stepLabel: string;
  stepContent: Aggregates.ReactNode;
  onPrevAction?: StepActionProps;
  onNextAction?: StepActionProps;
};

declare type StepComponentProps = {
  steps: StepProps[];
  activeSectionId?: number;
};

declare type StyledStepActionProps = {
  active: number;
};

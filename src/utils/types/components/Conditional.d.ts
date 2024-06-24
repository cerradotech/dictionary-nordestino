declare type ConditionalComponentProps = Aggregates.PropsWithChildren<{
  condition: boolean;
  hasElse?: Aggregates.ReactNode;
}>;

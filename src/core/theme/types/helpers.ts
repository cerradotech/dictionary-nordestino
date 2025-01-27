export declare type Prev = [
  never,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  ...0[],
];

export declare type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never;

export declare type Flatten<T, D extends number = 5> = [D] extends [never]
  ? never
  : T extends object
    ? { [K in keyof T]-?: Join<K, Flatten<T[K], Prev[D]>> }[keyof T]
    : '';

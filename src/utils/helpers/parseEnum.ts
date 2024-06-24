export const parseEnumToPt = <Enum, EnumPt>(
  enumKey: Enum,
  enumPtObj: EnumPt,
) => {
  return enumPtObj[enumKey as keyof EnumPt];
};

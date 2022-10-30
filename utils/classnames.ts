export const applyConditionalClass = (
  condition: boolean,
  className: string
): string => (condition ? className : "");

export const concatClassNames = (...args: string[]): string => args.join(" ");

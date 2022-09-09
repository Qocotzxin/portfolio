import { useHygraphContext } from "@contexts/hygraphContext";
import { AriaLabel } from "@models/hygraph";
import filter from "lodash/filter";

/**
 *  Returns an AriaLabel when it finds a coincidence based on the conditions provided. Else it returns null.
 */
export function useAriaLabel(conditions: Partial<AriaLabel>): AriaLabel | null {
  const { ariaLabels } = useHygraphContext();
  const results = filter(ariaLabels, conditions);

  return results.length ? results[0] : null;
}

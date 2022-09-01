import { HygraphData } from "@model/hygraph";
import { createContext, FC, PropsWithChildren, useContext } from "react";

const HygraphContext = createContext<Partial<HygraphData> | undefined>(
  undefined
);

const HygraphProvider: FC<
  PropsWithChildren & { hygraphData: Partial<HygraphData> }
> = ({ children, hygraphData }) => {
  return (
    <HygraphContext.Provider value={hygraphData}>
      {children}
    </HygraphContext.Provider>
  );
};

function useHygraphContext() {
  const context = useContext(HygraphContext);

  if (context === undefined) {
    throw new Error("useHygraphContext must be used within a HygraphProvider");
  }

  return context;
}

export { HygraphProvider, useHygraphContext };

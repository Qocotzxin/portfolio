import { HygraphData, HygraphModel } from "@models/hygraph";
import { createContext, FC, PropsWithChildren, useContext } from "react";

const HygraphContext = createContext<Partial<HygraphData> | undefined>(
  undefined
);

const HygraphProvider: FC<PropsWithChildren & HygraphModel> = ({
  children,
  hygraphData,
}) => {
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

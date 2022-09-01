import { ChakraProvider } from "@chakra-ui/react";
import { render, RenderOptions } from "@testing-library/react";
import { FC, PropsWithChildren, ReactElement } from "react";
import theme from "@theme";
import { HygraphProvider } from "@context/hygraphContext";

const AllTheProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <HygraphProvider hygraphData={{}}>{children}</HygraphProvider>
    </ChakraProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };

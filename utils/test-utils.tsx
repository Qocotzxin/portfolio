import { ChakraProvider } from "@chakra-ui/react";
import { render, RenderOptions } from "@testing-library/react";
import { FC, PropsWithChildren, ReactElement } from "react";
import theme from "@theme";
import { HygraphProvider } from "contexts/hygraphContext";
import { Components, HygraphData } from "@models/hygraph";

export const hygraphMockData: Partial<HygraphData> = {
  skipLinks: [
    {
      text: "Skip to content",
    },
  ],
  ariaLabels: [
    {
      id: "1",
      metadata: "dark",
      component: Components.ColorModeSwitcher,
      content: "Switch to light mode",
    },
    {
      id: "2",
      metadata: "light",
      component: Components.ColorModeSwitcher,
      content: "Switch to dark mode",
    },
  ],
  navLinks: [
    {
      url: "test",
      order: 1,
      text: "Test",
    },
  ],
  languages: [
    { code: "en", displayName: "english", isActive: true },
    { code: "es", displayName: "spanish", isActive: true },
    { code: "nl", displayName: "dutch", isActive: false },
  ],
  footerLinks: [
    {
      url: "https://github.com",
      isActive: true,
      icon: "github",
      ariaLabel: "Visit Github",
    },
    {
      url: "https://test.com",
      isActive: false,
      icon: "github",
      ariaLabel: "Visit test",
    },
  ],
};

interface AllTheProvidersProps {
  hygraphData?: Partial<HygraphData>;
}

export const AllTheProviders: FC<PropsWithChildren & AllTheProvidersProps> = ({
  children,
  hygraphData = hygraphMockData,
}) => {
  return (
    <ChakraProvider theme={theme}>
      <HygraphProvider hygraphData={hygraphData}>{children}</HygraphProvider>
    </ChakraProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
  wrapperProps?: AllTheProvidersProps
) =>
  render(ui, {
    wrapper: ({ children }) => (
      <AllTheProviders {...wrapperProps}>{children}</AllTheProviders>
    ),
    ...options,
  });

export * from "@testing-library/react";
export { customRender as render };

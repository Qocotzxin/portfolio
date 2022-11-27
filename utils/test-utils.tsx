import { ThemeProvider } from "@contexts/themeContext";
import { Components, HygraphData } from "@models/hygraph";
import { render, RenderOptions } from "@testing-library/react";
import { HygraphProvider } from "contexts/hygraphContext";
import { FC, PropsWithChildren, ReactElement } from "react";

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
  heroes: [
    {
      title: "Hero title",
      subtitle: "Hero subtitle",
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
    <ThemeProvider>
      <HygraphProvider hygraphData={hygraphData}>{children}</HygraphProvider>
    </ThemeProvider>
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

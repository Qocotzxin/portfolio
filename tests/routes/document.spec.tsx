import Document from "@pages/_document";
import { render, screen } from "@testing-library/react";
import { PropsWithChildren } from "react";

jest.mock("next/document", () => ({
  Html: ({ children }: PropsWithChildren) => (
    <div>
      <span>Html</span>
      {children}
    </div>
  ),
  Head: () => <div>Head</div>,
  Main: () => <div>Main</div>,
  NextScript: () => <div>NextScript</div>,
}));

jest.mock("@chakra-ui/react", () => {
  const actual = jest.requireActual("@chakra-ui/react");

  return {
    ...actual,
    ColorModeScript: ({ children }: PropsWithChildren) => (
      <div>
        <span>ColorModeScript</span>
        {children}
      </div>
    ),
  };
});

describe("_document", () => {
  it("Should match snapshot.", () => {
    const { container } = render(<Document />);
    expect(container).toMatchSnapshot();
  });

  it("Should render next/document sections, the body and color mode script.", () => {
    render(<Document />);
    expect(screen.getByText(/Html/)).toBeInTheDocument();
    expect(screen.getByText(/Head/)).toBeInTheDocument();
    expect(screen.getByText(/Main/)).toBeInTheDocument();
    expect(screen.getByText(/NextScript/)).toBeInTheDocument();
    expect(screen.getByText(/ColorModeScript/)).toBeInTheDocument();
  });
});

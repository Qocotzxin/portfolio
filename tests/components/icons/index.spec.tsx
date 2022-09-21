import {
  Languages,
  Clouds,
  Stars,
  Hamburger,
  Github,
  LinkedIn,
  Flickr,
  DailyMotion,
} from "@icons";
import { render } from "@testing-library/react";

describe("Icons.", () => {
  it("Should match snapshot.", () => {
    const { container } = render(
      <>
        <Languages /> <Clouds /> <Stars /> <Hamburger /> <Github /> <LinkedIn />{" "}
        <Flickr /> <DailyMotion />
      </>
    );
    expect(container).toMatchSnapshot();
  });
});

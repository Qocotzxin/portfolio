import { useOutsideClick } from "@hooks/useOutsideClick";
import { fireEvent, renderHook } from "@testing-library/react";

describe("useOutsideClick", () => {
  it("Should call the handler passed when clicking outside of the element passed.", () => {
    const mockHandler = jest.fn();
    const clickableDiv = document.createElement("div");
    clickableDiv.setAttribute("style", "width: 200px; height: 200px;");
    document.body.appendChild(clickableDiv);

    const nonClickableDiv = document.createElement("div");
    clickableDiv.setAttribute("style", "width: 200px; height: 200px;");
    document.body.appendChild(nonClickableDiv);

    renderHook(() => useOutsideClick({ current: clickableDiv }, mockHandler));

    fireEvent.mouseDown(nonClickableDiv);

    expect(mockHandler).toHaveBeenCalled();
  });

  it("Should NOT call the handler passed when clicking the element passed.", () => {
    const mockHandler = jest.fn();
    const clickableDiv = document.createElement("div");
    clickableDiv.setAttribute("style", "width: 200px; height: 200px;");
    document.body.appendChild(clickableDiv);

    const nonClickableDiv = document.createElement("div");
    clickableDiv.setAttribute("style", "width: 200px; height: 200px;");
    document.body.appendChild(nonClickableDiv);

    renderHook(() => useOutsideClick({ current: clickableDiv }, mockHandler));

    fireEvent.mouseDown(clickableDiv);

    expect(mockHandler).not.toHaveBeenCalled();
  });

  it("Should NOT call the handler passed there is no element.", () => {
    const mockHandler = jest.fn();
    const clickableDiv = document.createElement("div");
    clickableDiv.setAttribute("style", "width: 200px; height: 200px;");
    document.body.appendChild(clickableDiv);

    renderHook(() => useOutsideClick({ current: null }, mockHandler));

    fireEvent.mouseDown(clickableDiv);

    expect(mockHandler).not.toHaveBeenCalled();
  });

  it("Should attach listeners to mousedown and touchstart when calling the hook.", () => {
    document.addEventListener = jest.fn();
    renderHook(() => useOutsideClick({ current: null }, jest.fn()));

    expect(document.addEventListener).toHaveBeenCalledTimes(2);
    expect(document.addEventListener).toHaveBeenNthCalledWith(
      1,
      "mousedown",
      expect.any(Function)
    );
    expect(document.addEventListener).toHaveBeenNthCalledWith(
      2,
      "touchstart",
      expect.any(Function)
    );
  });

  it("Should remove listeners from mousedown and touchstart when re-rendering.", () => {
    document.removeEventListener = jest.fn();
    const { rerender } = renderHook(() =>
      useOutsideClick({ current: null }, jest.fn())
    );

    rerender();

    expect(document.removeEventListener).toHaveBeenCalledTimes(2);
    expect(document.addEventListener).toHaveBeenNthCalledWith(
      1,
      "mousedown",
      expect.any(Function)
    );
    expect(document.addEventListener).toHaveBeenNthCalledWith(
      2,
      "touchstart",
      expect.any(Function)
    );
  });
});

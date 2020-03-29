import React from "react";
import { render } from "@testing-library/react";
import StyledFormLabel from "components/forms/StyledFormLabel";

describe("custom-styled MUI input label", () => {
  describe("when input is required", () => {
    it("does not show an asterisk", () => {
      const { getByText } = render(
        <StyledFormLabel required>Test</StyledFormLabel>
      );
      const asterisk = getByText("*");
      const style = window.getComputedStyle(asterisk);
      expect(style.display).toBe("none");
    });
    it("does not show '(Optional)'", () => {
      const { getByText, queryByText } = render(
        <StyledFormLabel required>Test</StyledFormLabel>
      );
      const asterisk = getByText("*");
      const style = window.getComputedStyle(asterisk);
      expect(style.display).toBe("none");
      expect(queryByText(/Optional/)).not.toBeInTheDocument();
    });
  });

  describe("when input is not required", () => {
    it("does not show an asterisk", () => {
      const { queryByText } = render(<StyledFormLabel>Test</StyledFormLabel>);
      expect(queryByText("*")).not.toBeInTheDocument();
    });
    it("shows '(Optional)'", () => {
      const { debug, queryByText } = render(
        <StyledFormLabel>Test</StyledFormLabel>
      );
      expect(queryByText(/Optional/)).toBeInTheDocument();
    });
  });
});

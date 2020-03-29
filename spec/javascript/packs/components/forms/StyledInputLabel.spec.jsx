import React from "react";
import { render } from "@testing-library/react";
import StyledInputLabel from "components/forms/StyledInputLabel";

describe("custom-styled MUI input label", () => {
  describe("when input is required", () => {
    it("does not show an asterisk", () => {
      const { getByText } = render(
        <StyledInputLabel required>Test</StyledInputLabel>
      );
      const asterisk = getByText("*");
      const style = window.getComputedStyle(asterisk);
      expect(style.display).toBe("none");
    });
    it("does not show '(Optional)'", () => {
      const { getByText, queryByText } = render(
        <StyledInputLabel required>Test</StyledInputLabel>
      );
      const asterisk = getByText("*");
      const style = window.getComputedStyle(asterisk);
      expect(style.display).toBe("none");
      expect(queryByText(/Optional/)).not.toBeInTheDocument();
    });
  });

  describe("when input is not required", () => {
    it("does not show an asterisk", () => {
      const { queryByText } = render(<StyledInputLabel>Test</StyledInputLabel>);
      expect(queryByText("*")).not.toBeInTheDocument();
    });
    it("shows '(Optional)'", () => {
      const { debug, queryByText } = render(
        <StyledInputLabel>Test</StyledInputLabel>
      );
      expect(queryByText(/Optional/)).toBeInTheDocument();
    });
  });
});

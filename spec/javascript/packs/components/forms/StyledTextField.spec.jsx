import React from "react";
import { render } from "@testing-library/react";
import StyledTextField from "components/forms/StyledTextField";

describe("custom-styled MUI text field", () => {
  describe("when input is required", () => {
    it("does not show an asterisk", () => {
      const { getByText } = render(<StyledTextField required label="Test" />);
      const asterisk = getByText("*");
      const style = window.getComputedStyle(asterisk);
      expect(style.display).toBe("none");
    });
    it("does not show '(Optional)'", () => {
      const { getByText, queryByText } = render(
        <StyledTextField required label="Test" />
      );
      const asterisk = getByText("*");
      const style = window.getComputedStyle(asterisk);
      expect(style.display).toBe("none");
      expect(queryByText(/Optional/)).not.toBeInTheDocument();
    });
  });

  describe("when input is not required", () => {
    it("does not show an asterisk", () => {
      const { queryByText } = render(<StyledTextField label="Test" />);
      expect(queryByText("*")).not.toBeInTheDocument();
    });
    it("shows '(Optional)'", () => {
      const { queryByText } = render(<StyledTextField label="Test" />);
      expect(queryByText(/Optional/)).toBeInTheDocument();
    });
  });
});

import React, { useState } from "react";
import { render, act } from "@testing-library/react";
import LocationInput from "components/forms/LocationInput";
import userEvent from "@testing-library/user-event";

const TestComponent = ({ children }) => {
  const [addr, setAddr] = useState(null);

  return children(addr, setAddr);
};

describe("LocationInput", () => {
  it("renders", () => {
    const { getByLabelText, getAllByText, getByText } = render(
      <TestComponent>
        {(addr, setAddr) => (
          <LocationInput
            value={addr}
            inputProps={{ label: "Location" }}
            onChange={({ value, geocoded }) => setAddr(value)}
          />
        )}
      </TestComponent>
    );
    act(() => {
      userEvent.type(getByLabelText(/Location/), "123");
    });
    act(() => {
      userEvent.click(getAllByText("Denver")[0]);
    });
    expect(getByLabelText("Location (Optional)").value).toBe("Denver, CO, USA");
  });
});

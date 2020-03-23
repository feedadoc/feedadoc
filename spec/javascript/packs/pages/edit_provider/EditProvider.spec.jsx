import React from "react";
import { render } from "@testing-library/react";
import EditProvider from "pages/edit_provider/EditProvider";
import { MemoryRouter } from "react-router-dom";
import { MockedProvider } from '@apollo/react-testing';

describe("editing a provider", () => {
  it("renders without crashing", () => {
    const { getByText } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <MemoryRouter initialEntries={["/provider/token/edit"]}>
          <EditProvider />
        </MemoryRouter>
      </MockedProvider>
    );
    getByText('Update your request');
  });
});

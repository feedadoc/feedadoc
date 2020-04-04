import React from "react";
import { render, act, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignupStepper from "pages/provider_signup/SignupStepper";
import { MockedProvider, wait } from "@apollo/react-testing";
import { MemoryRouter, Route, Switch } from "react-router-dom";
import { CREATE_PROVIDER } from "../../../../../app/javascript/packs/queries/createProvider";

const mocks = (createMutationArgs, createMutationResult) => [
  {
    request: {
      query: CREATE_PROVIDER,
      variables: createMutationArgs,
    },
    result: { data: { createProvider: createMutationResult } },
  },
];

const renderComponent = (
  { createMutationArgs, createMutationResult } = {
    createMutationArgs: {},
    createMutationResult: {},
  }
) =>
  render(
    <MemoryRouter initialEntries={["/provider-signup"]}>
      <MockedProvider
        mocks={mocks(createMutationArgs, createMutationResult)}
        addTypename={false}
      >
        <Switch>
          <Route path="/provider-signup">
            <SignupStepper />
          </Route>
          <Route path="/providers/:id">
            <p>Success!</p>
          </Route>
        </Switch>
      </MockedProvider>
    </MemoryRouter>
  );

afterEach(cleanup);

describe("when provider is signing up", () => {
  describe("the initial render", () => {
    it("displays the page title", () => {
      const { getByText } = renderComponent();
      expect(getByText("Post a Request")).toBeInTheDocument();
    });
    it("displays both steps", () => {
      const { getByText } = renderComponent();
      expect(getByText("About You")).toBeInTheDocument();
      expect(getByText("Request")).toBeInTheDocument();
    });
  });

  describe("and the form is filled out", () => {
    it("displays success message", async () => {
      const createMutationArgs = {
        firstName: "joe",
        lastName: "",
        neighborhood: "",
        city: "Denver",
        state: "CO",
        email: "test@ing.com",
        country: "United States",
        latitude: 123.45,
        longitude: 123.45,
        facility: "",
        role: "nurse",
        requests: ["pets"],
        description: "test",
        address: "Denver, CO, USA",
      };
      const createMutationResult = {
        errors: [],
        provider: {
          id: 1,
        },
      };
      const { getByLabelText, getByText, getAllByText } = renderComponent({
        createMutationArgs,
        createMutationResult,
      });
      userEvent.click(getByLabelText("Pet care"));
      userEvent.type(
        getByLabelText(/Describe your request/),
        createMutationArgs.description
      );
      userEvent.click(getByText("Next"));
      userEvent.type(
        getByLabelText(/First name/),
        createMutationArgs.firstName
      );
      userEvent.type(getByLabelText(/Location/), createMutationArgs.city);
      userEvent.selectOptions(getByLabelText(/Your Job Title \/ Role/), [
        createMutationArgs.role,
      ]);
      userEvent.type(getByLabelText(/Email/), createMutationArgs.email);
      await act(async () => {
        userEvent.click(getAllByText("Denver")[0]);
      });
      await act(async () => {
        userEvent.click(getByText("Save"));
      });
      await wait();
      getByText("Success!");
    });
  });
});

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
        firstName: "childcare",
        lastName: "",
        neighborhood: "",
        city: "Denver",
        state: "CO",
        email: "test@ing.com",
        facility: "",
        role: "nurse",
        requests: ["childcare"],
        description: "test",
        address: {
          description: "Denver, CO, USA",
          id: "464b513e4fd9a3c7c3bd63d091ecc856aff12e2c",
          matched_substrings: [{ length: 6, offset: 0 }],
          place_id: "ChIJzxcfI6qAa4cR1jaKJ_j0jhE",
          reference: "ChIJzxcfI6qAa4cR1jaKJ_j0jhE",
          structured_formatting: {
            main_text: "Denver",
            main_text_matched_substrings: [{ length: 6, offset: 0 }],
            secondary_text: "CO, USA",
          },
          terms: [
            { offset: 0, value: "Denver" },
            { offset: 8, value: "CO" },
            { offset: 12, value: "USA" },
          ],
          types: ["locality", "political", "geocode"],
        },
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
      userEvent.click(getByLabelText("Childcare"));
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

const { render, screen } = require("@testing-library/react");

import StoreList from "./StoreList";

it("should render a button", () => {
    render(<StoreList
        stores={[]}
        sale={true}
        loadData={jest.fn()}
    />);

    expect(screen.getByRole("button")).toBeInTheDocument();
});
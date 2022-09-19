import { screen, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import StoreList from "./StoreList";

describe("<StoreList />", () => {
    it("should render a button", () => {
        // Render
        render(<StoreList 
            stores={[]}
            sale={true}
            loadData={ jest.fn() }
        />);

        // Assert / Interrogate 
        expect(screen.getByRole('button')).toBeInTheDocument();
    })



    it("should apply a class of sale when sale prop is true", () => {
        // Render
        const { container } = render(<StoreList 
            stores={[]}
            sale={true}
            loadData={ jest.fn() }
        />);

        // Assert / Interrogate 
        expect(container.firstChild.classList.contains('sale')).toBe(true);
    })

    it("should not have a sale class when sale prop is false", () => {
        // Render
        const { container } = render(<StoreList 
            stores={[]}
            sale={false}
            loadData={ jest.fn() }
        />);

        // Assert / Interrogate 
        expect(container.firstChild.classList.contains('sale')).toBe(false);
    })

    it("should render a list of StoreCards based on the stores prop", () => {
        const stores = [
            { id: 1, address: "abc123"},
            { id: 2, address: "abc123"},
            { id: 3, address: "abc123"}
        ];

        render(<StoreList 
            stores={stores}
            sale={false}
            loadData={ jest.fn() }
        />);

        expect(screen.getAllByText(/abc123/i).length).toEqual(3);
    })

    it("should call loadData prop when button is clicked", () => {
        const mockLoadData = jest.fn();
        render(<StoreList 
            stores={[]}
            sale={false}
            loadData={ mockLoadData }
        />);

        userEvent.click(screen.getByRole("button"));
        expect(mockLoadData).toBeCalled();
    })

    it("should match the snapshot", () => {
        const snapShot = render(<StoreList 
            stores={[]}
            sale={false}
            loadData={ jest.fn() }
        />);

        expect(snapShot).toMatchSnapshot();
    })
})
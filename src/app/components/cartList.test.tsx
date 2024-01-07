import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux"; // Assuming you use Redux Provider
import CartList from "./cartList";
import { store } from "../store/store";
import { useAppSelector } from "../store/hooks";

// Mock the useDispatch and useSelector hooks
jest.mock("../store/hooks", () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

// Mock the cart data
const mockCart = [
  { name: "Product 1", colour: "Red", price: 10, qty: 2 },
  { name: "Product 2", colour: "Blue", price: 15, qty: 1 },
];

describe("CartList Component", () => {
  beforeEach(() => {
    // Mock the useSelector hook to return mockCart
    (useAppSelector as jest.Mock).mockImplementation((selectorFn) =>
      selectorFn({ cartArray: mockCart })
    );
  });

  it("renders cart items correctly", () => {
    render(
      <Provider store={store}>
        <CartList />
      </Provider>
    );

    // Check if cart items are rendered correctly based on the mockCart data
    expect(screen.getAllByText(/Name:/i)).toHaveLength(mockCart.length);
    expect(screen.getAllByText(/Colour:/i)).toHaveLength(mockCart.length);
    expect(screen.getAllByText(/Price:/i)).toHaveLength(mockCart.length);
    expect(screen.getAllByRole("button", { name: "+" })).toHaveLength(
      mockCart.length
    );
    expect(screen.getAllByRole("button", { name: "-" })).toHaveLength(
      mockCart.length
    );
    expect(screen.getAllByRole("button", { name: /X/i })).toHaveLength(
      mockCart.length
    );
  });

  // Add more test cases to simulate user interactions if needed
});
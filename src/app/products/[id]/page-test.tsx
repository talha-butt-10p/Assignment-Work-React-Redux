import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useParams } from "next/navigation";
import ProductDetailPage from "./page";

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => ({
    ...jest.requireActual('next/router').useRouter(),
    query: { id: '123' }, // Mock the id parameter
  }),
}));

const mockUseParams = useParams as jest.Mock;

describe("ProductDetailPage Component", () => {
  beforeEach(() => {
    mockUseParams.mockReturnValue({ id: '123' }); // Mock useParams to provide id
  });

  it("renders product details correctly", () => {
    render(<ProductDetailPage />);

    expect(screen.getByText("Product Detail Page")).toBeInTheDocument();
  });

  it("handles Add to Cart button click", async () => {
    jest.mock("../../store/slices/productApi", () => ({
      useGetProductByIdQuery: jest.fn(() => ({
        data: {
          id: "123",
          name: "Sample Product",
          colour: "Red",
          price: 10,
          img: "sample-image-url",
        },
        isLoading: false,
        isError: false,
      })),
      useAddToCartMutation: jest.fn(() => [
        jest.fn(),
        { isLoading: false },
      ]),
    }));

    render(<ProductDetailPage />);

    fireEvent.click(screen.getByText("Add to Cart"));

  });

});
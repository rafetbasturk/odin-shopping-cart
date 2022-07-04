import { render, screen } from '@testing-library/react';
import Cart from "../Cart";

const mockedSetCart = jest.fn(e => {
  console.log(e.target);
})

const mockedCart = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    rating: 4.69,
    thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
    images: [
      "https://dummyjson.com/image/i/products/1/1.jpg",
      "https://dummyjson.com/image/i/products/1/2.jpg",
      "https://dummyjson.com/image/i/products/1/3.jpg",
      "https://dummyjson.com/image/i/products/1/4.jpg",
      "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
    ],
    count: 1
  }
]

describe("Cart", () => {
  test('should render cart', async () => {
    render(<Cart cart={mockedCart} SetCart={mockedSetCart} />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
    expect(headingElement.textContent).toBe("iPhone 9");
  });
})
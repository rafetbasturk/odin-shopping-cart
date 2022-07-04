import { render, screen } from '@testing-library/react';
import Error from '../Error';

describe("Error", () => {
  test('should render cart', async () => {
    render(<Error />);
    const element = screen.getByText(/page not found/i);
    expect(element.textContent).toBe("Page not found");
  });
})
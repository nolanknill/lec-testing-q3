import { render, screen } from '@testing-library/react';
import App from './App';

describe("<App />", () => {
  it("should include a title", () => {
    render(<App />);

    expect(screen.getByText(/Lecture\: Testing/)).toBeInTheDocument();
  })
});
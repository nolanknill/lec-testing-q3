import { render, screen } from '@testing-library/react';
import App from './App';

describe("<App />", () => {
  it("renders the title", () => {
    // Step 1: Render the component
    render(<App />);
    
    // Step 2: Interrogate our component
    expect(screen.getByText(/Lecture: Testing/)).toBeInTheDocument();
  })
})
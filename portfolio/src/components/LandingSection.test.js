import { render, screen } from '@testing-library/react';
import LandingSection from './LandingSection';

test('renders Daw bi', () => {
  render(<LandingSection />);
  const linkElement = screen.getByText(/Hello, I am Anthony!/i);
  expect(linkElement).toBeInTheDocument();
});

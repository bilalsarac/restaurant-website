import { render, fireEvent, screen, waitFor, getByText} from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import ReservationsContent from "./components/ReservationsContent";
import BookingForm from './components/BookingForm';
import '@testing-library/jest-dom'

test('checking if reservation page renders', () => {
  render(<ReservationsContent />);
})

test('checking for the heading display', () => {
  render(<ReservationsContent />);
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();
});
test('form components', () => {
  render(<BookingForm />);
  expect(screen.getByText("Full Name")).toBeInTheDocument();
  expect(screen.getByText("Email")).toBeInTheDocument();
  expect(screen.getByText("Telephone")).toBeInTheDocument();
  expect(screen.getByText("Occasion (optional)")).toBeInTheDocument();
  expect(screen.getByText("Guests")).toBeInTheDocument();
  expect(screen.getByText("Date & Time")).toBeInTheDocument();

});
/*
test('form', async () => {
  render(<BookingForm />);

  const emailInput = screen.getByPlaceholderText('sample@email.com')

  userEvent.type(emailInput, 'invalidemail.com')
  fireEvent.blur(emailInput);

  await waitFor(() => {

    expect(getByText("Email is not valid!")).toBeInTheDocument();
  })
})
*/
/*
test('Initialize/Update Times', () => {
  render(<BookingForm />);
  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  expect(getByText("Please enter your email")).toBeInTheDocument();

})
*/
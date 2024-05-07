import { render, fireEvent, waitFor } from '@testing-library/react';
import { LongestPalindromeFinder } from './longstPalindromFinder';

describe('LongestPalindromeFinder', () => {
  it('renders input field and submit button', () => {
    const { getByLabelText, getByText } = render(<LongestPalindromeFinder />);
    expect(getByLabelText('Input String:')).toBeTruthy();
    expect(getByText('Find Longest Palindrome')).toBeTruthy();
  });

  it('displays longest palindromic substring when form is submitted', async () => {
    const { getByLabelText, getByText } = render(<LongestPalindromeFinder />);
    const inputField = getByLabelText('Input String:') as HTMLInputElement;
    const submitButton = getByText('Find Longest Palindrome');

    fireEvent.change(inputField, { target: { value: 'babad' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByText('Longest Palindromic Substring:')).toBeTruthy();
      expect(getByText('bab')).toBeTruthy();
    });
  });

  it('displays results even if one palindromic logic is found', async () => {
    const { getByLabelText, getByText, queryByText } = render(
      <LongestPalindromeFinder />
    );
    const inputField = getByLabelText('Input String:') as HTMLInputElement;
    const submitButton = getByText('Find Longest Palindrome');

    fireEvent.change(inputField, { target: { value: 'xyz' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        queryByText('Longest Palindromic Substring:')
      ).toBeTruthy();
      expect(getByText('x')).toBeTruthy();

    });
  });
});

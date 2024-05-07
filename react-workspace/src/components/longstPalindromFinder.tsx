import React, { useState } from 'react';

export const LongestPalindromeFinder: React.FC = () => {
  const [longestPalindrome, setLongestPalindrome] = useState<string>('');

  const longestPalindromicSubstring = (s: string): string => {
    if (!s || s.length === 0) return '';

    let longest = '';

    // Helper function to check if a substring is palindrome
    const isPalindrome = (s: string) => {
      let i = 0,
        j = s.length - 1;
      while (i < j)
        if (s[i++].toLowerCase() !== s[j--].toLowerCase()) return false;
      return true;
    };

    // Loop through all substrings
    for (let i = 0; i < s.length; i++) {
      for (let j = i + 1; j <= s.length; j++) {
        const substring = s.substring(i, j);
        if (isPalindrome(substring) && substring.length > longest.length) {
          longest = substring;
        }
      }
    }

    return longest;
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const result = longestPalindromicSubstring(formData.get('inputString') as string);
    setLongestPalindrome(result);
};


  return (
    <div className="container" id="longestPalindrome">
      <h1>Longest Palindromic Substring Finder</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="inputString" className="form-label">
            Input String:
          </label>
          <input
            type="text"
            className="form-control"
            id="inputString"
            name="inputString"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Find Longest Palindrome
        </button>
      </form>
      {longestPalindrome && (
        <div className="mt-3">
          <h3>Longest Palindromic Substring:</h3>
          <p>{longestPalindrome}</p>
        </div>
      )}
    </div>
  );
};

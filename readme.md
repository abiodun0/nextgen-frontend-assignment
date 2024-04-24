# Technical Assessment: Front-End Developer

This assessment will test various aspects for the role, which will include HTML/CSS, JavaScript, frameworks and problem solving. A base project is provided to get started. However, there will be missing or incorrect pieces that need adding or fixing, so it will not be working correctly from the start. Make this project better. 

### Overview:
This project will need to be completed within a 24 hour window period. Document any tools and resources used to research and help you complete this assessment. You are welcome to use the comment sections provided.

Prioritize efficiency and only add extra features of your own accord once you have met the requirements of each task. Bells and whistles definitely make your assessment stand out, but we prioritize quality over quantity. 

**The assessment is broken down as follows:**

 1. Part 1: Setup SASS and add Bootstrap to the project
 2. Part 2: Make sure the dropdown for the menu works on mobile
 3. Part 3: Create a book listing section on the index.html page provided
 4. Part 4: Convert this project to Vue/Angular/React
 5. Part 5: Problem Solving Challenge

**Note on submission:**
Parts 1, 2 and 3 should be in a single folder while Parts 4 and 5 should be in a separate folder. Once you have completed the task, please zip your repo & share it with TA Specialist you are working with via a Google Drive / similar link. Remember to exclude the node_modules directory.

*Good luck!*

## Part 1: Setup SASS and add Bootstrap

You will notice the project provided has HTML markup that is dependent on bootstrap, but bootstrap is not included. Nor is the main.css file included that is being referenced in the HTML files. Please complete the following and feel free to create any files or folders to complete this section.

You will need to do the following:

 1. Setup the project to use SASS
 2. Add Bootstrap into the SASS workflow
 3. Setup Bootstrap to use variables (`_variables.scss`) to change the primary and secondary colors

```
Comments:
---------


```

## Part 2: Dropdown Menu on Mobile

If you have not already noticed, the dropdown does not work on mobile. Investigate the issue and make sure it works on mobile.

```
Comments:
---------


```

## Part 3: Book listing with Filtering (JS + JSON)

For this part of the assessment you will need to create a book listing section that uses vanilla JavaScript to get data stored in a JSON file to be added to the project. You will need to have 10 or more books listed. You can use dummy content. Here is an example of the JSON structure:

    {
      "books": [
        {
          "title": "To Kill a Mockingbird",
          "author": "Harper Lee",
          "year_published": 1960
        },
        {
          "title": "1984",
          "author": "George Orwell",
          "year_published": 1949
        },
        {
          "title": "The Great Gatsby",
          "author": "F. Scott Fitzgerald",
          "year_published": 1925
        }
        ...
      ]
    }


Expectations for this part:

 1. Use vanilla JS only. No frameworks.
 2. Create a JSON file to store the data (10+ books)
 3. Use bootstrap classes to create a responsive grid layout
 4. Dynamically render the data from the JSON file using JavaScript
 5. Implement a real-time search and filtering feature based on title and author

```
Comments:
---------


```

## Part 4: Convert to Vue/Angular/React

Select your preferred front-end framework and convert everything from Part 3 to your chosen framework. Maintain the look and feel and functionality. Remember to separate this part from the previous 3 parts. Parts 1, 2 and 3 should be in one folder while parts 4 and 5 should be in a second folder.

```
Comments:
---------


```

## Part 5: Problem Solving (JS)

**Solve the following coding problem:**

Write a JavaScript function that finds the longest palindromic substring in a given string.
A palindromic substring is a substring that reads the same forwards and backwards.
For example, in the string "babad," the longest palindromic substring is "bab" or "aba,"
both of which are 3 characters long. In the string "cbbd," the longest palindromic
substring is "bb," which is 2 characters long. Complete as much as you can since any progress for this part is valuable.

You need to consider the following requirements:

- Your function should return the longest palindromic substring found
   in the input string. 
-  If there are multiple palindromic substrings with the same maximum length, return the first one that appears in the string.
- The function should be case-sensitive. "racecar" is a valid palindromic substring, but "Racecar" is not.
- Your code should be well-documented and include comments to explain your algorithm's logic.
- Create a page with UI to demonstrate the functionality

```
Comments:
---------


```
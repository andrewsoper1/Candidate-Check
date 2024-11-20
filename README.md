# Candidate Check
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

  This application allows you to view Github profile information of potential candidates, including their avatar, name, username, email, company, and bio if available. If the candidate is to your liking, you can to add them to the potential candidates table or choose to view a new profile. Once candidates are saved to the Potential Candidates table you can choose to remove them from the list if you change your mind.

## Usage
 ```md
GIVEN a candidate search application
WHEN the candidate search page loads
THEN the information for one candidate should be displayed, including the candidate's name, username, location, avatar, email, html_url, and company
WHEN I click the "+" button
THEN the candidate should be saved to the list of potential candidates and the next candidate's information should be displayed
WHEN I click the "-" button
THEN the next candidate's information should be displayed without saving the current candidate
WHEN there are no candidates available to review
THEN an appropriate message should be shown indicating no more candidates are available
WHEN the potential candidates page loads
THEN the user should see a list of previously saved potential candidates with their name, username, location, avatar, email, html_url, and company
WHEN the page reloads
THEN the list of potential candidates should persist and be available for viewing
WHEN there are no potential candidates
THEN an appropriate message should be displayed indicating no candidates have been accepted
WHEN I click the "-" button
THEN the next candidate's information should be displayed without saving the current candidate
```

![candidatecheck1](https://github.com/user-attachments/assets/9b12f4a0-823f-4b9e-ade9-a26d6b1c65d7)
![candidatecheck2](https://github.com/user-attachments/assets/ecd744fb-d692-4567-a16e-ee115c84c831)

This app is viewable on Render by going to the following link: https://candidate-check-1.onrender.com/

## License
  This project is licensed under the MIT license.

## Contributing
  Users can contribute to this project by adding functionality to the app to allow you to send an email to the address provided for potential candidates to set up an interview.

## Tests
  N/A

## Contact Information
  Github Username: andrewsoper1
  Email Address: soper.andrew6@gmail.com

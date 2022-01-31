# Object-Oriented Programming Challenge: Team Profile Generator

## User Story
```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Description
For this challenge, there was no starter code, so it was built from scratch. The two main topics of this challenge were to implement Test Driven Development and Object-Oriented Programming. I have test suites written that underwent the fail first approach, then wrote my classes to pass the tests. The Employee class is the 'super' class, and the other 3 classes extend from Employee. You can use the application to enter as many team members as you wish, the only required team member being the Manager. When you complete the prompts and select that you are finished building your team, it will generate the HTML page that has your input in a styled webpage.

## Built With
* HTML
* CSS/Bulma
* Node.js
* Inquirer
* Jest

## Demo
Click the following link to view a demo of the application: https://watch.screencastify.com/v/NhvbOJADYNRBoAnJQ1FM

## Screenshot
![Screenshot](./assets/screenshot.png?raw=true "Screenshot")

## Contributions
Made with ❤️️ by Tamara Wilhite

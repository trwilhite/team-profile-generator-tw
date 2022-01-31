const fs = require('fs');

const generatePage = (employeesArr) => {
    return employeesArr.map((data) => {
        let role = data.getRole();

        if(role === 'Manager') {
            return `
            <div class="column is-one-quarter">
            <div class="manager card">
              <div class="card-header card-header-title is-centered has-background-info has-text-light">${data.getName()}</div>
              <div class="card-header card-header-title is-centered has-background-info has-text-light">
                <span class="icon"><i class="fas fa-solid fa-mug-hot"></i></span>Manager
              </div>
              <div class="card-content">
                <div class="content">ID: ${data.getId()}</div>
                <div class="content">Email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a></div>
                <div class="content">Office Number: ${data.getOfficeNumber()}</div>
              </div>
            </div>
            </div>  
            `;
        } else if (role === 'Engineer') {
            return `
            <div class="column is-one-quarter">
            <div class="engineer card">
              <div class="card-header card-header-title is-centered has-background-info has-text-light">${data.getName()}</div>
              <div class="card-header card-header-title is-centered has-background-info has-text-light">
              <span class="icon"><i class="fas fa-glasses"></i></span>Engineer
              </div>
                <div class="card-content">
                <div class="content">ID: ${data.getId()}</div>
                <div class="content">Email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a></div>
                <div class="content">GitHub: <a href="https://www.github.com/${data.getGithub()}">${data.getGithub()}</a></div>
                </div>
            </div>  
            </div>  
            `;
        } else {
            return `
            <div class="column is-one-quarter">
            <div class="engineer card">
              <div class="card-header card-header-title is-centered has-background-info has-text-light">${data.getName()}</div>
              <div class="card-header card-header-title is-centered has-background-info has-text-light">
              <span class="icon"><i class="fas fa-user-graduate"></i></span>Intern
              </div>
                  <div class="card-content">
                <div class="content">ID: ${data.getId()}</div>
                <div class="content">Email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a></div>
                <div class="content">School: ${data.getSchool()}</div>
                </div>
            </div>
            </div>    
            `;
        }
    })
}

module.exports = (pageData) => {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team Profile</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="style.css">
    </head>

    <body>
    <header class="p-4 mb-6 has-background-danger">
        <h1 class="is-size-2 has-text-centered has-text-light">My Team</h1>
    </header>
    <main>
        <div class="columns mx-6 mb-6 is-flex-direction-row is-flex-wrap-wrap is-justify-content-space-around">
            ${generatePage(pageData).join('')}
        </div>
    </main>
    </body>
    </html>
    `;
}
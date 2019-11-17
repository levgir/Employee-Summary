function generateHTML() {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Your Employee List</title>
        <style>
            .cardContainer{
                width: 25%;
                float: left;
                margin-top: 20px;
                align-content: center;
                padding: 0px 10px 0px 10px;
            }
        </style>
    </head>
    
    <body>
    `;
}

function addManagerCard(data) {
    return `
    <div class="cardContainer">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${data.role}</h6>
                <p class="card-text">ID: ${data.id}</p>
                <p class="card-text">Email: <a href = "mailto:${data.email}">${data.email}</a></p>
                <p class="card-text">Office Number: ${data.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

function addEngineerCard(data) {
    return `
    <div class="cardContainer">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${data.role}</h6>
                <p class="card-text">ID: ${data.id}</p>
                <p class="card-text">Email: <a href = "mailto:${data.email}">${data.email}</a></p>
                <p class="card-text">GitHub Profile: ${data.github}</p>
            </div>
        </div>
    </div>
    `;
}

function addInternCard(data) {
    return `
    <div class="cardContainer">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${data.role}</h6>
                <p class="card-text">ID: ${data.id}</p>
                <p class="card-text">Email: <a href = "mailto:${data.email}">${data.email}</a></p>
                <p class="card-text">School: ${data.school}</p>
            </div>
        </div>
    </div>
    `;
}


function closeHTML() {
    return `
    </body>
    </html>
    `;
}


module.exports = {
    generateHTML:generateHTML,
    closeHTML:closeHTML,
    addManagerCard:addManagerCard,
    addEngineerCard:addEngineerCard,
    addInternCard:addInternCard
}
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
        .cardContainer {
            float: left;
            margin-top: 20px;
            align-content: center;
            padding: 0px 10px 0px 10px;
        }

        .card {
            width: 100%;
        }
        </style>
    </head>
    
    <body>
    `;
}

function addManagerCard(data) {
    return `
    <div class="cardContainer col-md-6 col-lg-3">
        <div class="card text-white bg-primary mb-3">
            <div class="card-body">
                <h3 class="card-title">${data.name}</h3>
                <h5 class="card-text">${data.role}</h6>
            </div>
            <ul class="list-group list-group-flush text-dark">
                <li class="list-group-item">ID: ${data.id}</li>
                <li class="list-group-item">Email: <a href = "mailto:${data.email}">${data.email}</a></li>
                <li class="list-group-item">Office Number: ${data.officeNumber}</li>
            </ul>
        </div>
    </div>
    `;
}

function addEngineerCard(data) {
    return `
    <div class="cardContainer col-md-6 col-lg-3">
        <div class="card text-white bg-secondary mb-3">
            <div class="card-body">
                <h3 class="card-title">${data.name}</h3>
                <h5 class="card-text">${data.role}</h5>
            </div>
            <ul class="list-group list-group-flush text-dark">
                <li class="list-group-item">ID: ${data.id}</li>
                <li class="list-group-item">Email: <a href = "mailto:${data.email}">${data.email}</a></li>
                <li class="list-group-item">GitHub Profile: ${data.github}</li>
            </ul>
        </div>
    </div>
    `;
}

function addInternCard(data) {
    return `
    <div class="cardContainer col-md-6 col-lg-3">
        <div class="card text-white bg-success mb-3">
            <div class="card-body">
                <h3 class="card-title">${data.name}</h3>
                <h5 class="card-text">${data.role}</h5>
            </div>
            <ul class="list-group list-group-flush text-dark">
                <li class="list-group-item">ID: ${data.id}</li>
                <li class="list-group-item">Email: <a href = "mailto:${data.email}">${data.email}</a></li>
                <li class="list-group-item">School: ${data.school}</li>
            </ul>
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
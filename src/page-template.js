
module.exports = templateData => {

    console.log(templateData);
  
    const { projects, about, ...header } = templateData;

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="./dist/style.css" />
    </head>
    <body>
    
        <div class="manager">
            <h2>
                ${header.manager} 
            </h2>
    
            <h4>
                manager
            </h4>
    
            <ul>
                <li>
                    ID: ${header.managerID}
                </li>
    
                <li>
                   <a href="mailto: ${header.email}"> Email: ${header.email}</a>
                </li>
    
                <li>
                    Office Number: ${header.office}
                </li>
            </ul>
        </div>
        
    </body>
    </html>
    `;
};
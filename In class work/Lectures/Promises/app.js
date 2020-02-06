const fs = require('fs');

fs.readFile('start.txt', (err, data) =>
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        const next = data.toString().trim();
        fs.readFile(next, (err,data) =>
        {
            if(err)
            {
                console.log(err);
            }
            else
            {
                const next = data.toString().trim();
                fs.readFile(next, (err,data) =>
                {
                    if(err)
                    {
                        console.log(err);
                    }
                    else
                    {
                        const next = data.toString().trim();
                        console.log(next);
                    }
                })
            }   
        })
    }
});

console.log('here');

//---------OR---------------

const pRead = (file) =>
{
    return new Promise( (resolve, reject) =>
    {
        fs.readFile(file, (err, data) =>
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(data.toString().trim());
            }
        });
    });
}

const p = pRead('start.txt')
.then(result => pRead(result))
.then(result => pRead(result))
.then(result => pRead(console.log(result)))
.catch( ex => console.log(ex));



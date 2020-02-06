const userContainer1 = document.querySelector('#userContainer1');

const p1 = axios.get('https://acme-users-api-rev.herokuapp.com/api/users/random');
const p2 = axios.get('https://acme-users-api-rev.herokuapp.com/api/users/random');

const p3 = Promise.all([p1,p2])
.then(responses =>
{
    return responses.map( response => response.data)
})

p3.then( users =>
{
    const user1 = users[0];
    const html = `
        <h1> ${user1.fullName}</h1>
        `
    userContainer1.innerHTML = html;
})
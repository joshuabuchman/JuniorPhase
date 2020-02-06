const API = 'https://acme-users-api-rev.herokuapp.com/api';
const nav = document.querySelector('ul');


const dataPromise = Promise.all([
    axios.get(`${API}/products`),
    axios.get(`${API}/companies`)]
    )
.then( responses => 
{
    return {
        products: responses[0].data,
        companies: responses[1].data
    };
});

dataPromise.then( results =>
{
    renderNav(results);
    //renderTable(rsults);
});

const renderNav = (results) =>
{
    const {products, companies} = results;
    // const products = results.products;
    // const companies = results.companies;
    const html = `
    <li class = 'nav-item'>
    <a class = 'nav-link' href = '#products'>
        Products (${products.length})
    </a>
    </li>
    <li class = 'nav-item'>
    <a class = 'nav-link' href = '#companies'>
        Companies (${companies.length})
    </a>
    </li>
    `;
    nav.innerHTML = html;
};

const renderTab = (results) =>
{
    const {products, companies} = results;
    // const products = results.products;
    // const companies = results.companies;
    const html = `
    <li class = 'nav-item'>
    <a class = 'nav-link' href = '#products'>
        Products (${products.length})
    </a>
    </li>
    <li class = 'nav-item'>
    <a class = 'nav-link' href = '#companies'>
        Companies (${companies.length})
    </a>
    </li>
    `;
    tab.innerHTML = html;
};



window.addEventListener('hashchange', () =>
{
    const hash = window.location.hash.slice(1);
    dataPromise.then( results => 
    {
        const products = results.products;
        const companies = results.companies;
        if(hash === 'companies')
        {
            document.querySelector('.thead').innerHTML=  Object.keys(companies[0]);
            document.querySelector('.tbody').innerHTML=  companies.map((result)=>{
            return `
            <tr>
            <td>${result.id}</td>
            <td>${result.name}</td>
            <td>${result.phone}</td>
            <td>${result.state}</td>
            <td>${result.catchPhrase}</td>
            <td>${result.createdAt}</td>
            <td>${result.updatedAt}</td>
            </tr>`;
            })
        }
        else if(hash === 'products')
        {
            // document.querySelector('.productsResults').innerHTML=  companies.map((result)=>{
            //     return `
            //     <tr>
            //     <td>${result.id}</td>
            //     <td>${result.name}</td>
            //     <td>${result.phone}</td>
            //     <td>${result.state}</td>
            //     <td>${result.catchPhrase}</td>
            //     <td>${result.createdAt}</td>
            //     <td>${result.updatedAt}</td>
            //     </tr>`;
            //     })
        }
    });
})

  

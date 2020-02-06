
// write the fuzzyFilter function
// get passed an array and an object
// filter objects in array that have all the properties of the second argument
// note an object can have extra properties
// console.log(fuzzyFilter([ { foo: 'bar', x: 3}, { foo: 'bar'}, { foo: 'ba', y: 1} ], { foo: 'bar' }));//[ { foo: 'bar', x: 3 }, { foo: 'bar' } ]

// console.log(fuzzyFilter([ { foo: 'bar', x: 3}, { foo: 'bar'}, { foo: 'bar', y: 1} ], { foo: 'ba' }));//[]

const fuzzyFilter = (arr, filter) =>
{
    return arr.filter( item =>
    {
        isMatch(item, filter);
    });
}

const isMatch = (item, filter) =>
{
    const entries = Object.entries(filter);
    let match = true;
    entries.forEach( entry =>
    {
        const[key, value] = entry;
        if(item[key]!==value)
        {
            match = false;
        }
    })
    return match;
}


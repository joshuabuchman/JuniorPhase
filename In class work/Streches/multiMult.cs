//take in any number of args, multiply them together and then return a func that multiplies the return func arg by the original func arg
//const m5 = multiMult(5); 
//console.log(m5(4)); //20
//const m5 = multiMult(5,6); 
//console.log(m5_6(3)); //90

const multiMult = (...args) =>
{
    return = (num) =>
    {
        return args.reduce((acc, cur)
        {
            acc = acc*cur;
            return acc;
        }, num);
    };
}
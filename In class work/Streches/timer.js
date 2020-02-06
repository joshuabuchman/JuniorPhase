//create a timer that displays console out after a certain amout of seconds

const timer = (delay) =>
{
    return (fn)=>
    {
        setTimeout(fn, delay*1000);
    }
}

const t1 = timer(2);
t1(()=> console.log('see me in two seconds'));
t1(()=> console.log('see me in two seconds as well'));


const t2 = timer(.5);
t1(()=> console.log('see me in half a second'));

const t3 = timer(2);
t1(()=> console.log('see me soon!'));

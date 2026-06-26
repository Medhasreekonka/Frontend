// console.log("1. Open BookMyShow"); //8 sec
// console.log("2. Search Movie"); //3 sec
// console.log("3. Select Seats"); //5 sec
// console.log("4. Make Payment"); //1 sec
// console.log("5. Ticket Booked"); //2 sec

// //settimeout
// setTimeout(()=>{
//     console.log("1. Open BookMyShow");
// }, 8000);
// setTimeout(()=>{
//     console.log("2. Search Movie");
// }, 3000);
// setTimeout(()=>{
//     console.log("3. Select Seats");
// }, 5000);
// setTimeout(()=>{
//     console.log("4. Make Payment");
// }, 1000);
// setTimeout(()=>{
//     console.log("5. Ticket Booked");
// }, 2000);

//callbacks
setTimeout(()=>{
    console.log("1. Open BookMyShow");
    setTimeout(()=>{
        console.log("2. Search Movie");
        setTimeout(()=>{
            console.log("3. Select Seats");
            setTimeout(()=>{
                console.log("4. Make Payment");
                setTimeout(()=>{
                    console.log("5. Ticket Booked");
                }, 2000);
            }, 1000);
        }, 5000);
    }, 3000);
}, 8000);
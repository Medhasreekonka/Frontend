function wait(ms) {
    new Promise((resolve) => setTimeout(resolve,ms));
}


async function Bookticket() {
    await wait(8000);
    console.log("1. Open BookMyShow"); //8 sec
    await wait(3000);
    console.log("2. Search Movie"); //3 sec
    await wait(5000);
    console.log("3. Select Seats"); //5 sec
    await wait(1000);
    console.log("4. Make Payment"); //1 sec
    await wait(2000);
    console.log("5. Ticket Booked"); //2 sec
}

Bookticket();
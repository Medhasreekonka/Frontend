const p = new Promise((resolve, reject) => {
    let app = "BMS";
    if(app === "BMS") {
        resolve();
    } else {
        reject(new Error("BMS is not found"));
    }
});

p.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
        console.log("Open BMS - 2s");
        resolve();
    }, 2000)
    });
})
p.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
        console.log("Select the Movie - 3s");
        resolve();
    }, 3000)
    });
})
p.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
        console.log("Select seat - 5s");
        resolve();
    }, 5000)
    });
})
p.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
        console.log("Book the seats - 1s");
        resolve();
    }, 1000)
    });
})

p.catch((e) => {
    console.log("Error:", e.message);
})

p.finally(() => {
     console.log("Close the App");
})
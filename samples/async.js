function resolveAfter1Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('nice to meet you');
        }, 1000);
    });
}

async function greetings(name) {
    let message = "Hello ";
    message = message.concat(resolveAfter1Seconds(), ' ');
    message = message.concat(name);
    return message;
}


module.exports = {greetings}
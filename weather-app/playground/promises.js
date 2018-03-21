var somePromise = new Promise((resolve, reject)=>{
    var myObject = {
        id: 1,
        firstName: 'James',
        lastName: 'Anderson'
    }
resolve(myObject);
});

somePromise.then((message) => {
    console.log(`Message: ${message.firstName} ${message.lastName}`);
})

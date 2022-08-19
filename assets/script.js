var saveBtn8 = $('#saveBtn8');

var saveBtn9 = $('#saveBtn9');
var saveBtn10 = $('#saveBtn10');
var saveBtn11 = $('#saveBtn11');

var saveBtn12 = $('#saveBtn12');
var saveBtn1 = $('#saveBtn1');
var saveBtn2 = $('#saveBtn2');
var saveBtn3 = $('#saveBtn3');


var date = moment().format('dddd, MMM Do YYYY');
//////need to figure out how to set each time block to past present or future based on if 
// each time-block is matching the moment() and then display in a different color past, present, future

saveBtn8.on('click', function() {
    
    var usereight = $('#8am').val(); 
    console.log(usereight)
    
    var eightstring = JSON.stringify(usereight)
    localStorage.setItem("8", usereight)
})


saveBtn9.on('click', function() {
    
    var usernine = $('#9am').val(); 
    console.log(usernine)
    
    var ninetring = JSON.stringify(usernine)
    localStorage.setItem("9", usernine)
})

saveBtn10.on('click', function() {
    
    var userten = $('#10am').val(); 
    console.log(userten)

    var tenstring = JSON.stringify(userten)
    localStorage.setItem("10", userten)
})


saveBtn11.on('click', function() {
    
    var usereleven = $('#11am').val(); 
    console.log(usereleven)

    var elevenstring = JSON.stringify(usereleven)
    localStorage.setItem("11", usereleven)
})





saveBtn12.on('click', function() {
    
    var usertwelve = $('#12pm').val(); 
    console.log(usertwelve)

    var twelvestring = JSON.stringify(usertwelve)
    localStorage.setItem("12", usertwelve)
})


saveBtn1.on('click', function() {

    var userone = $('#1pm').val(); 
    console.log(userone)

    var onestring = JSON.stringify(userone)
    localStorage.setItem("1", userone)
})



saveBtn2.on('click', function() {
    
    var usertwo = $('#2pm').val(); 
    console.log(usertwo)

    var twostring = JSON.stringify(usertwo)
    localStorage.setItem("2", usertwo)
})



saveBtn3.on('click', function() {
    
    var userthree = $('#3pm').val(); 
    console.log(userthree)

    var threestring = JSON.stringify(userthree)
    localStorage.setItem("3", userthree)
})


///can you provide feedback on how to make this less redundant? This is not sustainable for larger applications.
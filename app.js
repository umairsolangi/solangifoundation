function saveData(){
    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var subject = document.getElementById("subject")
    var message = document.getElementById("message")
    var key = Math.random() * 1232321123;
    var keyFixed = key.toFixed()
    var student = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
        key: keyFixed
    }

    console.log(student)
    firebase.database().ref('students').child(key.toFixed()).set(student)
}


















// function saveDate(){
//     var name = document.getElementById("name")
//     var city = document.getElementById("city")
//     var key = Math.random() * 1232321123;
//     var keyFixed = key.toFixed()
//     var student = {
//         name: name.value,
//         city: city.value,
//         key: keyFixed
//     }

//     firebase.database().ref('student').child(key.toFixed()).set(student)
// }


// Get Data by On FreshPage

// function getData(){
//     firebase.database().ref('student').once('value',function(data){
//         console.log(data.val())
        
//     })
// }
// getData()


// Get Data by ON RealTime
//  function getData(){
//     firebase.database().ref('student').on('child_added',function(data){
//         console.log(data.val())
        
//     })
// }
//  getData()



 // Delete

//  function removeData(){
//      firebase.database().ref('student/915208924').remove()
//  }
//  removeData()

























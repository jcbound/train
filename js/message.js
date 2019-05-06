var APP_ID = 'PU0zonMvfQVk2l5XmejPIlc0-gzGzoHsz';
var APP_KEY = '88T9LHdaDTKDW6cdbEGNgu6e';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
// console.log("没有报错")
// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//   content: 'Hello World!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })

let myForm = document.querySelector("#postMessageForm")
console.log(myForm)
myForm.addEventListener("submit",function(e){
  e.preventDefault()
  let content = myForm.querySelector("input[name=content]").value
  console.log(content)
  console.log("ceshi")
  var Message = AV.Object.extend("Message");
  var message = new Message();
  message.save({
    'content':content
  }).then(function(object){
    console.log("存入成功")
    console.log(object)
  })
})

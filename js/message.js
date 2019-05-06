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
//输出数据
var query = new AV.Query('Mssage');
  query.find()
  .then(function (mssages) {
    console.log(mssages)
    console.log('12')
    console.log(mssages[0].attributes)
    console.log(mssages[1].attributes)
    let array = mssages.map((item)=> item.attributes)
    array.forEach((item)=>{

      let li =document.createElement('li')

      li.innerText = `${item.name}: ${item.content}`

      let mssageList = document.querySelector('#mssageList')
      console.log(mssageList)
      mssageList.appendChild(li)
    })
    // 更新成功
  }, function (error) {
    alert('提交失败，请改天再来留言')// 异常处理
  })
  

//存入数据
let myForm = document.querySelector("#postMessageForm")
console.log(myForm)
myForm.addEventListener("submit",function(e){
  e.preventDefault()
  let content = myForm.querySelector("input[name=content]").value
<<<<<<< HEAD
  let name = myForm.querySelector("input[name=name]").value
=======
>>>>>>> 26be18a156c4daa2a351472f6080b3baeef5ac50
  console.log(content)

  var Mssage = AV.Object.extend("Mssage")
  var mssage = new Mssage()
  console.log(mssage)
  mssage.save({
    'name':name, 
    'content':content
  }).then(function(object){
    console.log("存入成功")
    let li =document.createElement('li')

      li.innerText = `${object.attributes.name}: ${object.attributes.content}`
      
      let mssageList = document.querySelector('#mssageList')
      console.log(mssageList)
      mssageList.appendChild(li)
      myForm.querySelector("input[name=content]").value = ""
      myForm.querySelector("input[name=name]").value = ""
    console.log(object)
  })
<<<<<<< HEAD

})
//输出数据
=======
})
>>>>>>> 26be18a156c4daa2a351472f6080b3baeef5ac50

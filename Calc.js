const MyObj = require('./myobj')
class Culc{
    plus(x,y)
    {
console.log(x+y)
    }
    minus(x,y)
    {
console.log(x-y)
    }

    minus1()
    {
for (let index = 0; index < MyObj.length; index++) {
   console.log("name" +MyObj[index].name)
    
}
    }
}

module.exports =Culc;
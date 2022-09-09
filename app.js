const file = require('./create_file');
const verify = require('./verify_circle');

const strings =['chair', 'height','racket','touch','tunic'];

const newArr = [];

strings.map((elem, _, array) =>{
    array.map(elem2 => {
        
      let pos = newArr.length - 1;
        
        if(newArr.length == 0) newArr.push(elem);
        else if(newArr[pos].charAt(newArr[pos].length - 1) == elem2.charAt(0)){
            if(!newArr.includes(elem2)) newArr.push(elem2);
        }
    });
});

if(verify.verifyCircle(newArr)){
  console.log(newArr);
  file.createFile(newArr);
}else{
  console.log('Array of strings does not build a circle.');
}


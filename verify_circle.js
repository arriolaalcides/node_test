exports.verifyCircle = (array) =>{
    if(array[array.length - 1].charAt(array[0].length - 1) == array[0].charAt(0)){
        return true;
    }

    return false;
}
var censoredword=["sad","bad","mad"]
var customerwords=[]
function censor(instr){
    for (idx in censoredwords){
        instr=instr.replace(censoredwords[idx],"****");
    }
    for (idx in customcensoredwords){
        instr=instr.replace(censoredwords[idx],"****");
    }
    return instr;
}
function addcensoredword(word){
    customcensoredwords.push(word);
}
function getcensoredword(){
    return censoredwords.concat(customcensoredwords);
}
exports.censor=censor
exports.addcensoredword=addcensoredword;
exports.getcensoredword=getcensoredword;
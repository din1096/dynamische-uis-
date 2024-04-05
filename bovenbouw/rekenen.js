var arrayEen = ['1','2','3','4','5','6','7','8','9','10'];
var arrayTwee = ['2','4','6','8','10','12','14','16','18','20'];

function optellen(){
    var optellen = [];
    for (let i = 0; i < arrayEen.length; i++){
        optellen[i] = arrayEen[i] + arrayTwee[i];
}

}

function aftrekken(){
    var aftrekken = [];
    for (let i = 0; i < arrayTwee.length; i++){
        aftrekken[i] = arrayTwee[i] - arrayEen[i];
}

}
function vermenigvuldigen(){
    var vermenigvuldigen = [];
    for(let i = 0; i < arrayEen.length; i++){
        vermenigvuldigen[i] = arrayEen[i] * arrayTwee[i];
    }

}
function delen(){
    var delen = [];
    for (let i = 0; i < arrayTwee.length; i++){
        delen[i] = arrayTwee[i] / arrayEen[i];
    }
}
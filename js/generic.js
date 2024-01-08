function Encrypt(value) {
    var result = "";
    for (i = 0; i < value.length; i++) {
        if (i < value.length - 1) {
            result += value.charCodeAt(i) + 10;
            result += "-";
        }
        else {
            result += value.charCodeAt(i) + 10;
        }
    }
    return result;
}

function Decrypt(value) {
    var result = "";
    var array = value.split("-");

    for (i = 0; i < array.length; i++) {
        result += String.fromCharCode(array[i] - 10);
    }
    return result;
} 

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

function formatCurrency(num) {
    //console.log('formatCurrency', typeof num)
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
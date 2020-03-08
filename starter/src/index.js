function Counting() {
    var num1 = document.getElementById('number1'), as = HTMLInputElement;
    var num2 = document.getElementById('number2'), as = HTMLInputElement;
    var num3 = document.getElementById('number3'), as = HTMLInputElement;
    var num4 = document.getElementById('number4'), as = HTMLInputElement;
    var number1 = +num1.value;
    var number2 = +num2.value;
    var number3 = +num3.value;
    var number4 = +num4.value;
    var arr = [number1, number2, number3, number4];
    var sum = number1 + number2 + number3 + number4;
    var avg = sum / 4;
    var min = Math.min.apply(null, arr);
    var max = Math.max.apply(null, arr);
    ;
    document.getElementById('sum').innerHTML = sum.toString();
    document.getElementById('avg').innerHTML = avg.toString();
    document.getElementById('min').innerHTML = min.toString();
    document.getElementById('max').innerHTML = max.toString();
}

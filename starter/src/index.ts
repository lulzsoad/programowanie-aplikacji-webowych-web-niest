function Counting(){

    let num1 = document.getElementById('number1') as HTMLInputElement;
    let num2 = document.getElementById('number2') as HTMLInputElement;
    let num3 = document.getElementById('number3') as HTMLInputElement;
    let num4 = document.getElementById('number4') as HTMLInputElement;

    let number1 = +num1.value;
    let number2 = +num2.value;
    let number3 = +num3.value;
    let number4 = +num4.value;

    let arr: Array<number> = [number1, number2, number3, number4];

    let sum: number = number1 + number2 + number3 + number4;
    let avg: number = sum / 4;
    let min: number = Math.min.apply(null, arr);
    let max: number = Math.max.apply(null, arr);;

    

    document.getElementById('sum').innerHTML = sum.toString();
    document.getElementById('avg').innerHTML = avg.toString();
    document.getElementById('min').innerHTML = min.toString();
    document.getElementById('max').innerHTML = max.toString();
}
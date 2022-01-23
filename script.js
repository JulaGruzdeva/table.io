
const step = document.querySelector('.step');
const start = document.querySelector('.startvalue');
const end = document.querySelector('.endvalue');
const but = document.querySelector('.start');
const tab = document.querySelector('.tab');



but.addEventListener('click',()=>{
    tab.innerHTML='<tr><td>#</td><td>X</td><td>Res</td></tr>'
    let curInd = 1;
    let curValue = Number(start.value);
    let endValue = Number(end.value);
    // console.log(curValue,endValue);
    if(Number(step.value) <= 0 ){
        alert('Шаг не может быть равен 0 или быть меньше 0');
    }

    if(Number(start.value) > Number(end.value)){
        alert('Начальное значение не может быть больше конечного значения');
    }

    while (curValue <= endValue && step.value > 0){
        const tr = document.createElement('tr');
        tr.innerHTML = `<td style='width:50px'>${curInd}</td>
        <td style='width:50px'>${curValue}</td>
        <td style='width:150px'>${usl(curValue,curInd)}</td>`;
    
        tab.append(tr);
        curInd++;
        curValue += Number(step.value);
    }


})

function usl(x,curInd){
    const res = Math.min(logar21((1-33)/Math.cos(x-33)),Math.sin(x)/33);
    console.log(`${curInd} res:`,res, logar21((1-33)/Math.cos(x-33)),Math.sin(x)/33);
    if(res || res === 0){
        return res
    }
    if((Math.cos(x-33)===Math.cos(1)) &&((1-33)/Math.cos(x-33) < 0)){
        return 'деление на 0 и логарифм из отрицательного значения'
    }
    if(Math.cos(x-33)===Math.cos(1)){
        return 'деление на 0';
    }
    if((1-33)/Math.cos(x-33) < 0){
        return 'логарифм из отрицательного значения';
    }

    
}

function logar21(y) {
    return Math.log(y) / Math.log(21);
  }
// TODO: this file! :)
//state stuff
let state = {
    bankDigits: [1,2,3,4,5,6],
    odds: [],
    evens: [],
}

const form = document.querySelector('form');
const myNumberBank = document.getElementById('myNumberBank');
const myOddBank = document.getElementById('myOddBank');
const myEvensBank = document.getElementById('myEvensBank');
myNumberBank.innerText = state.bankDigits;

form.addEventListener('submit',function(e){
    e.preventDefault();
    let number = form.elements.number.value;
    state.bankDigits.push(parseInt(number));
    myNumberBank.innerText = state.bankDigits;
});

//sortOne
const sortOne = document.getElementById('sortOne').addEventListener('click',function(e){
    e.preventDefault();
    let sortThis = state.bankDigits[0];
    console.log(sortThis);
    let newBankdigits = state.bankDigits.slice(1);
    state.bankDigits = newBankdigits;
    myNumberBank.innerText = newBankdigits;
    if(sortThis%2 === 0){
        state.evens.push(sortThis);
    }
    else if(sortThis%2 ===1){
        state.odds.push(sortThis);
    }
    if(state.evens.length){
        myEvensBank.innerText = state.evens;
    }
    if(state.odds.length){
        myOddBank.innerText = state.odds;
    }
});


//sortAll
const sortAll = document.getElementById('sortAll').addEventListener('click',function(e){
    e.preventDefault();
    for(let i=0;i<state.bankDigits.length;i++){
        let thisBankDigit = state.bankDigits[i];
        if(thisBankDigit%2 === 0){
            state.evens.push(thisBankDigit);
        }
        else if(thisBankDigit%2 ===1){
            state.odds.push(thisBankDigit);
        }
    }
    if(state.evens.length){
        myEvensBank.innerText = state.evens;
    }
    if(state.odds.length){
        myOddBank.innerText = state.odds;
    }
    state.bankDigits = [];
    myNumberBank.innerText = [];
})

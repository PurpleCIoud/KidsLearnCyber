//<!-- Constant array setup for the questions -->
const QuArray = [
    ["Q1",1,"A","B","C"],
    ["Q2",2,"A","B","C"],
    ["Q3",3,"A","B","C"],
    ["Q4",1,"A","B","C"],
    ["Q5",2,"A","B","C"],
    ["Q6",3,"A","B","C"],
    ["Q7",1,"A","B","C"]
];
//<!-- elements for the order of the questions and the answers of said questions -->
// <!-- note: more questions are used than required for total question count --!>
const order=[0,1,2,3,4,5,6];
const answers=[0,0,0,0,0];

<!-- randomising the order of the questions -->
function randomArray(array){
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// <!-- fetching the questions and using the setElement function to set to assosiated id --!>
// <!-- makes use of two for loops for cycling through the question and the elements of the question --!>
function fetchQ(){
    randomArray(order);
    for (let i=1; i<6; i++){
        const temp = QuArray[order[i - 1]];
        answers[i-1]=temp[1];
        setElement(i+"Qbox",temp[0]);
        for(let j=1; j<4; j++){
            setElement(i+"-"+j+"-Box",temp[j+1]);
        }
    }

}

function setElement(idValue, innerValue){
    document.getElementById(idValue).innerHTML = innerValue;
}

// <!-- uses answer array and getElementsByName for fetching answer of quiz --!>
function markQ(){
    let score = 0;
    for (let i=1; i<6; i++){
        const temp = document.getElementsByName(i + 'quiz');
        const answerPos = answers[i - 1] - 1;
        if (temp[answerPos].checked){
            score=score+20;
        }
    }
    QtextCol()
    alert("You scored: "+score+"%");
}

// <!-- additional function for added effect to show correct answers --!>
function QtextCol(){
    console.log(answers);
    for (let i=1; i<6; i++){
        const temp = QuArray[order[i - 1]];
        for(let j=1; j<4; j++){
            if (j!==answers[i-1]){
                document.getElementById(i+"-"+j+"-Box").style.color="grey";
            }

        }
    }
}

fetchQ();
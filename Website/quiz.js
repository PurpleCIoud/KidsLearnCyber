//<!-- Constant array setup for the questions -->
const QuArray = [
    ["What is cyber security?",1,"The means by which individuals and organisations reduce the risk of being affected by cyber crime.","The process of encrypting and decrypting data on the internet.","The practice of hacking into other people’s devices and accounts."],
    ["What are the six Cyber Aware actions?",2,"The title of a cyber security podcast.","The slogan of a cyber security campaign.","The government’s advice on how to stay secure online."],
    ["What should you do if you have been hacked?",2,"Use a single password for all your accounts, ignore software and app updates, turn off 2-Step Verification (2SV), write down your passwords, delete your data, and use your name and date of birth.","Use a strong and separate password for your email, install the latest software and app updates, turn on 2-Step Verification (2SV), use password managers, back up your data, and use three random words.","Use a different password for each account, install software and app updates only when necessary, turn off 2-Step Verification (2SV), use biometric authentication, back up your data on external devices, and use five random symbols."],
    ["What should you do if you receive a suspicious email or text?",3,"Ignore it and hope it goes away.","Contact the hacker and negotiate with them.","Change your password and report the incident to the relevant service provider."],
    ["What should you do before buying or selling second-hand devices?",1,"Delete it and block the sender.","Open it and click on any links or attachments.","Reply to it and provide any personal or financial information requested."],
    ["What is CyberFirst?",3,"Leave the personal data on the device and sell it as it is.","Transfer the personal data to another device and keep it for later use.","Erase the personal data from the device and restore it to factory settings."],
    ["What is the NCSC’s role in cyber security?",1,"A programme that offers free opportunities for young people to learn about cyber security.","A competition that challenges schoolgirls to become cyber security champions.","A game that simulates cyber attacks and defenses."],
    ["What are Academic Centres of Excellence in Cyber Security Research?",3,"To educate and train the public and private sectors on cyber security best practices, offering courses and certifications.","To monitor and regulate all online activities in the UK, enforcing cyber security laws and policies.","To act as a bridge between industry and government, providing advice, guidance and support on cyber security, including the management of cyber security incidents."],
    ["What are some of the benefits of cyber security?",2,"Schools that have been awarded by the NCSC for their innovative projects in cyber security.","Universities that have been recognised by the NCSC for their high-quality research in cyber security.","Organisations that have been funded by the NCSC for their impactful initiatives in cyber security."],
    ["What are the benefits of using a secure Wi-Fi connection",3,"It protects our devices, data and online services from theft or damage.","It enhances our online experience and productivity.","All of the above."]
];
//<!-- elements for the order of the questions and the answers of said questions -->
//<!-- note: more questions are used than required for total question count --!>
const order=[0,1,2,3,4,5,6,7,8,9];
const answers=[0,0,0,0,0,0,0,0];

//<!-- randomising the order of the questions -->
function randomArray(array){
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

//<!-- fetching the questions and using the setElement function to set to assosiated id --!>
//<!-- makes use of two for loops for cycling through the question and the elements of the question --!>
function fetchQ(){
    randomArray(order);
    for (let i=1; i<11; i++){
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

//<!-- uses answer array and getElementsByName for fetching answer of quiz --!>
function markQ(){
    let score = 0;
    for (let i=1; i<8; i++){
        const temp = document.getElementsByName(i + 'quiz');
        const answerPos = answers[i - 1] - 1;
        if (temp[answerPos].checked){
            score=score+20;
        }
    }
    QtextCol()
    alert("You scored: "+score+"%");
}

//<!-- additional function for added effect to show correct answers --!>
function QtextCol(){
    console.log(answers);
    for (let i=1; i<11; i++){
        for(let j=1; j<4; j++){
            if (j!==answers[i-1]){
                alert(i+"-"+j+"-Box");
                document.getElementById(i+"-"+j+"-Box").style.color="grey";
            }

        }
    }
}
fetchQ();
//getting all required elements
const start_btn = document.querySelector(".start_btn button")
const info_box = document.querySelector(".info_box")
const exit_btn = info_box.querySelector(".buttons .quit")
const continue_btn = info_box.querySelector(".buttons .restart")
const quiz_box = document.querySelector(".quiz_box")

const option_list = document.querySelector(".option_list")

//If Start Quiz Button Clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo") //show the info boz
}

//If Exit Button Clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo") //hide the info box
}

//If continue Button Clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo") //hide the info box
    quiz_box.classList.add("activeQuiz") //show the quiz box
    showQuestions(0)
    queCounter(1)

}

let que_count = 0
let que_numb = 1

const next_btn = quiz_box.querySelector(".next_btn")

//If Next Button Clicked
next_btn.onclick = () =>{
    if(que_count < questions.length - 1){
        que_count++
        que_numb++
        showQuestions(que_count)
        queCounter(que_numb)
    }else{
        console.log("Questions completed")
    }
}


//getting questions and options form array
function showQuestions(index){
    const que_text = document.querySelector(".que_text")
    let que_tag = '<span>'+ questions[index].numb +". "+ questions[index].question +'</span>'
    let option_tag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
    + '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
    + '<div class="option">'+ questions[index].options[2] +'<span></span></div>'
    + '<div class="option">'+ questions[index].options[3] +'<span></span></div>';
    que_text.innerHTML = que_tag
    option_list.innerHTML = option_tag
    const option = option_list.querySelectorAll(".option")
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)")
    }
}

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>'
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>'

function optionSelected(answer){
    let userAns = answer.textContent
    let correctAns = questions[que_count].answer
    let allOptions = option_list.children.length 

    if(userAns == correctAns){
        answer.classList.add("correct")
        console.log("Answer is Correct")
        answer.insertAdjacentHTML("beforeend", tickIcon)
    }else{
        answer.classList.add("incorrect")
        console.log("Answer is Wrong")
        answer.insertAdjacentHTML("beforeend", crossIcon)

        //if answers is incorrect then automtically selected the correct answer
        for (let i = 0; i < allOptions; i++) {
            if(option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class", "option correct")
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon)
            }
        }
    }

    //Once user selected disabled all options
    for(let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled")
    }

    
}
// Contagem de perguntas
function queCounter(index){
const bottom_ques_counter = quiz_box.querySelector(".total_que")
let totalQuestCountTag = '<span><p>'+ index +'</p>of<p>'+ questions.length +'</p>Questions</span>'
bottom_ques_counter.innerHTML = totalQuestCountTag
}
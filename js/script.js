//getting all required elements
const start_btn = document.querySelector(".start_btn button")
const info_box = document.querySelector(".info_box")
const exit_btn = info_box.querySelector(".buttons .quit")
const continue_btn = info_box.querySelector(".buttons .restart")
const quiz_box = document.querySelector(".quiz_box")

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

}

let que_count = 0;

//getting questions and options form array
function showQuestions(index){
    const que_text = document.querySelector(".que_text")
    const option_list = document.querySelector(".option_list")
    let que_tag = '<span>'+ questions[index].question +'</span>'
    let option_tag = '<div class="option"><span></span></div>'
    + '<div class="option"><span></span></div>'
    que_text.innerHTML = que_tag
}

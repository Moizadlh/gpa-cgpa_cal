// vars

let inputs = 0
let c_inputs = 0
let grds = []
let credit = []
let select_list = []
let subject_results = []
let list_grade_c = []
let c_results = []


// input getter

let input_num =document.getElementById("Sub")
input_num.addEventListener('input',function(){
    inputs = input_num.value
})


// showing subjects

document.getElementById("btn").addEventListener("click",shower)

function shower() {
    let butons = parseInt(inputs)

    if ((butons === 0 )|| (butons <= 0 ) || (butons === undefined ) ) {
        alert("select some input::")
        return
    }

    input_num.readOnly = true
    document.getElementById("btn").disabled = true
    again.style.display = 'inline-block'


    let buttoncontainer = document.getElementById("buttons")
    buttoncontainer.style.display = "flex"
    for (let index = 0; index < butons; index++) {

        grds[index] = undefined
        credit[index] = undefined

        let both_c = document.createElement("div")
        let button = document.createElement("button");
        button.textContent = `Subject ${index + 1}`;
        button.className = "btns";

        let select = document.createElement('select')
        select.className = "select"
        select.innerHTML = `
        <option value="">Select grade</option>
        <option value=4.0>A+</option>
        <option value=4.0>A</option>
        <option value=3.7>A-</option>
        <option value=3.3>B+</option>
        <option value=3.0>B</option>
        <option value=2.7>B-</option>
        <option value=2.3>C+</option>
        <option value=2.0>C</option>
        <option value=1.7>C-</option>
        <option value=1.0>D</option>
        <option value=0.0>F</option>`

        let c_hours = document.createElement('select')
        c_hours.className = "c-hours"
        c_hours.innerHTML = `
        <option value="">Select credit hours</option>
        <option value=1>1</option>
        <option value=2>2</option>
        <option value=3>3</option>`


        both_c.appendChild(button);
        both_c.appendChild(select);
        both_c.appendChild(c_hours);

        buttoncontainer.appendChild(both_c)
    }

    let btnc = document.createElement('div')
    let res_btn = document .createElement ('button')
    res_btn.id = 'res'
    res_btn.textContent = "Calculate GPA"
    btnc.appendChild(res_btn)
    buttoncontainer.appendChild(btnc)

    let grades = document.querySelectorAll('.select')
    select_list = Array.from(grades)
    select_list.forEach((element) => {
        element.addEventListener('change' , storevalues)
        })
    
    let credithours = document.getElementsByClassName("c-hours")
    select_ch = Array.from (credithours)
    select_ch.forEach((element) => {
        element.addEventListener('change' , storech)
        })
    
    let result = document.getElementById('res')
    result.addEventListener('click',result_uploader)
}


// creating grades list

function storevalues(e){

    let index = select_list.indexOf(e.target)
    grds[index] = e.target.value

}


// creating credithours list

function storech(e){

    let index = select_ch.indexOf(e.target)
    credit[index] = e.target.value

}


// operating results

function result_uploader(){

    for (let index = 0; index < grds.length; index++) {
        if ( grds [index] === undefined || credit[index] === undefined || 
            grds [index] === "" || credit [index] === "") {
            alert ("Please fill full form ")
            return
        }   
    }

    for (let index = 0; index < credit.length; index++) {
        subject_results[index] = grds [index] * credit [index]
    }

    let sum_sub_result = 0
    let sum_credit_hours = 0

    for (let index = 0; index < subject_results.length; index++) {

        sum_credit_hours += parseInt(credit[index])
        sum_sub_result   += subject_results[index]
        
    }

    let gpa = ( sum_sub_result / sum_credit_hours )
    gpa = gpa.toFixed(3)

    let percent = (gpa/4.000) * 100

    document.getElementById("CGPA").innerHTML = "GPA : " + gpa
    document.getElementById("percentage").innerHTML = "Percentage : " + percent +"%"
}


// switching Calculator

let mode = document.getElementById("switch")
mode.addEventListener('click', switcher)

let CCal = document.getElementById("cgpa-cal") 
let cal = document.getElementById("calculator")
function switcher(){
    if ((mode.id === "back")){
        document.getElementById("CGPA").innerHTML = "GPA : "
        document.getElementById("percentage").innerHTML = "Percentage : "
        document.getElementById("back").innerHTML = "Switch to CGPA calculator"
        document.getElementById("back").id = "switch"
        CCal.style.display = "none"
        cal .style.display = "flex"
        cal.style.flexDirection = "column"
    }
    
    else if(mode.id === "switch"){
        document.getElementById("CGPA").innerHTML = "CGPA : "
        document.getElementById("percentage").innerHTML = "Percentage : "
        document.getElementById("switch").innerHTML = "Switch to GPA calculator"
        document.getElementById("switch").id = "back"
        CCal.style.display = "flex"
        cal .style.display = "none"
        CCal.style.flexDirection = "column"
    }
    
}


// CGPA CALCULATOR

let input_num_c =document.getElementById("Sub-c")
input_num_c.addEventListener('input',function(){
    c_inputs = input_num_c.value
})


document.getElementById("btn-c").addEventListener("click",shower_c)

function shower_c() {
    let butons = parseInt(c_inputs)

    if ((butons === 0 )|| (butons <= 0 ) || (butons === undefined ) ) {
        alert("select some input::")
        return
    }

    input_num_c.readOnly = true
    document.getElementById("btn-c").disabled = true
    again.style.display = 'inline-block'

    let buttoncontainer = document.getElementById("buttons_c")
    buttoncontainer.style.display = "flex"

    for (let index = 0; index < butons; index++) {
        
        c_results[index] = undefined

        let both_c = document.createElement("div")
        let button = document.createElement("button");
        button.textContent = `Semester ${index + 1}`;
        button.className = "btns";

        let inputss = document.createElement ("input")
        inputss.type = 'number'
        inputss.className = 'inputs'
        
        both_c.appendChild(button);
        both_c.appendChild(inputss);

        buttoncontainer.appendChild(both_c)
    }

    let btnc_c = document.createElement('div')
    let res_btn_c = document .createElement ('button')
    res_btn_c.id = 'res-c'
    res_btn_c.textContent = "Calculate CGPA"
    btnc_c.appendChild(res_btn_c)
    buttoncontainer.appendChild(btnc_c)

    let grade_c = document.querySelectorAll(".inputs")
    list_grade_c = Array.from(grade_c)
    list_grade_c.forEach((element) => {
        element.addEventListener('input' , storevalues_c)
        })

    document.getElementById('res-c').addEventListener('click',result_cgpa)
}


// gpa-s list creator

function storevalues_c(e){
    let index = list_grade_c.indexOf(e.target)
    c_results[index] = e.target.value
}


// resulting CGPA

function result_cgpa(){
    for (let index = 0; index < c_results.length; index++) {

        if ((c_results[index] === undefined)) {
            alert("please fill full form")
            return
        }

        else if ((c_results[index] <= 0) || 
                (c_results[index] === '0')){
                    alert("wrong input")
                    return
                } 
    }

    let sum_c_result = 0
    for (let index = 0; index < c_results.length; index++) {
        sum_c_result += parseFloat(c_results[index])
    }
    
    let total_g = parseInt(c_inputs)

    let cgpa = sum_c_result/total_g
    cgpa = cgpa.toFixed(3)
    document.getElementById("CGPA").innerHTML = "CGPA : " + (cgpa)

    let percent_c = (cgpa/4.000)*100
    document.getElementById("percentage").innerHTML = "Percentage : " + percent_c +"%"
}


// Again calculation
let again = document.getElementById('cg')
again.addEventListener('click',Allend)

function Allend() {
    if ((mode.id === "back")){
        document.getElementById("CGPA").innerHTML = "CGPA : "
    }
    else if ((mode.id === "switch")){
        document.getElementById("CGPA").innerHTML = "GPA : "
    }
    document.getElementById("percentage").innerHTML = "Percentage : "

    input_num_c.readOnly = false
    document.getElementById("btn-c").disabled = false
    input_num.readOnly = false
    document.getElementById("btn").disabled = false

    let main_div = document.getElementById('buttons')
    let main_div_c=document.getElementById('buttons_c')

    let rm_div =  main_div.querySelectorAll('div')
    let rm_div_c = main_div_c.querySelectorAll('div')

    rm_div.forEach((div) => {
        main_div.removeChild(div);
      })
    
    rm_div_c.forEach((div) => {
        main_div_c.removeChild(div);
      })

    main_div.style.display = "none"
    main_div_c.style.display = "none"

}
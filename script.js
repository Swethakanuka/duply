let typing = document.querySelector("#typing1");   //  getting the value of typing area
let result = document.querySelector("#result_area");  //   getting the result area

//  audio for buttons
function audio(){
    document.getElementById('audio').play()
}

//  audio of toogle

function audio1(){
	document.getElementById(`audio1`).play()
};

//    we give parameter here value and the argumnent their for every themself buttton is according to their 
//  number and give id=typing1  to all so that all can access 
//  when thw user click on 1 button the result in typing variable will be argument = value 
//  but we wnat that user can enter multiple value so  +=  will concatenate the existing value with new one

// it is the method but it is not stoping the user to not type more than i want

function value_Display(value) { //  second method is to add in onclick in html like that 
	typing.innerText += value;  // id of dispaly area + .innerText += "1" ;  display.innerText += "1"
}

//   second method to restrict the user from not typing more than 26 but css property is best

// function value_Display(value) {
// 	if (typing.innerText.length < 26) {
// 	  typing.innerText += value;
// 	}
//   };

//   typing.addEventListener('input', () => {
// 	if (typing.innerText.length > 26) {
// 	  typing.innerText = typing.innerText.slice(0, 26);
// 	}
//   });





//   the rsult should put in result area and the content availible in typing area will be eval(evalulate)
function calculate() {
try{
	result.innerText = ` =   ${eval(typing.innerText)}`  }
	catch(err){
		result.innerText = "Error";
	}

	//  to cut more then 15 numbers in result so it should'nt overflow
		if (result.innerText.length > 12) {
		 result.innerText = result.innerText.slice(0, 15);  //  only 15 numbers will display 
		};

		let replaced = typing.innerText;

// if (typing.innerText.include(' / ') ||  typing.innerText.include('*') ){
// 	replaced = typing.innerText.replaceAll('x',"*").replaceAll('&#247;','/')
// 	typing.innerText= eval(replaced)
// }
// typing.innerText= eval(replaced)

}


  
function clearResult() {
	typing.innerText = "";
	result.innerText = ` `; //  so result should also become empty
}



// we copy  and then did'nt store it and the content reman in the typing area we show it
function remove(){
	typing.innerText = typing.innerText.slice(0,-1);
}





//   dark mode setting
const lightModeBtn = document.getElementById("lightModeBtn");
const darkModeBtn = document.getElementById("darkModeBtn");


lightModeBtn.addEventListener("click", () => {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
});

darkModeBtn.addEventListener("click", () => {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
});

var automaton = {
	 alphabet: ["a", "b"]
	,states: [
		 {
			name: "s0"
			
		}
		,{
			name: "s1"
		}
		,{
			name: "s2"
			,final: true
		}
	]
}

automaton.functions =
	[
		 [automaton.states[0], "a", automaton.states[0]]
		,[automaton.states[0], "b", automaton.states[1]]
		,[automaton.states[1], "a", automaton.states[1]]
		,[automaton.states[1], "b", automaton.states[2]]
		,[automaton.states[2], "a", automaton.states[2]]
		,[automaton.states[2], "b", automaton.states[2]]
	]

function check(word){
	//check if all symbols of word are contained in automaton.alphabet
	for(var w in word.split("")){
		var found = false;
		var symbol = word[w];
		
		for(var z in automaton.alphabet){
			if(symbol === automaton.alphabet[z]){
				found = true;
			}
		}
		if(!found){
			console.log("symbol "+symbol+" is not contained in alphabet "+automaton.alphabet);
			return false;
		}
	}

	var state = automaton.states[0];

	for(var w in word.split("")){
		var symbol = word[w];

		var stepped = step(symbol);

		if(!stepped){
			console.log("Stopped");
			return false;
		} else {
			
		}	
	}

	function step(symbol){
		var newState = false;
		for(var i in automaton.functions){
			if(automaton.functions[i][0] == state && automaton.functions[i][1] === symbol){
				newState = automaton.functions[i][2];
			}
		}

		if(newState){
			console.log("symbol "+symbol+" at state "+state.name+" results in "+newState.name);
			state = newState;
			return true;
		} else {
			return false;
		}
	}

	if(state.final){
		console.log("Finished, "+word+" is valid");
		return true;
	} else {
		console.log("Finished, "+word+" is not valid");
		return false;
	}
	
}

document.getElementById("automaton").innerHTML = "alphabet:\n\
a\n\
b\n\
\n\
states:\n\
q1\n\
q2\n\
q3 final\n\
\n\
transitions:\n\
q1 a q1\n\
q1 b q2\n\
q2 b q3\n\
q2 a q2\n\
q3 a q3\n\
q3 b q3"

var textInput = document.getElementById("textInput");

textInput.oninput = function(){
	if(check(textInput.value)){
		textInput.style.backgroundColor="#AAFFAA";
	} else {
		textInput.style.backgroundColor="#FFAAAA";
	}
};

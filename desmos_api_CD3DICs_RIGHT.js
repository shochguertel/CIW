// RIGHT PICTURE ================================================================

var initialState2 = {
	graph:graphR,
	expressions:{list:expR}
};

var elt2 = document.getElementById('calculator-2');

var calculator2 = Desmos.GraphingCalculator(elt2, {
	administerSecretFolders: false,
	expressionsCollapsed: true
});

// set initial State
calculator2.setState(initialState2);

// set values for selected expressions
calculator2.setExpressions(selExpR);

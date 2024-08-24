// LEFT PICTURE =================================================================

var initialState1 = {
	graph:graphL,
	expressions:{list:expL}
};

var elt1 = document.getElementById('calculator-1');

var calculator1 = Desmos.GraphingCalculator(elt1, {
	administerSecretFolders: false,
	expressionsCollapsed: true
});

// set initial State
calculator1.setState(initialState1);

// set values for selected expressions
calculator1.setExpressions(selExpL);


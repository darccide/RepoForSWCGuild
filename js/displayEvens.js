function clearErrors() {
	for (var loopCounter = 0; loopCounter < document.forms['displayEvens'].elements.length; loopCounter++) {
		if (document.forms['displayEvens'].elements[loopCounter].parentElement.className.indexOf('has-') != -1) {
			document.forms['displayEvens'].elements[loopCounter].parentElement.className = 'form-group';
		}
	}
}

function resetForm() {
	document.forms['displayEvens']['startNum'].value = '';
	document.forms['displayEvens']['endNum'].value = '';

	document.forms['displayEvens']['stepNum'].value = '';
	document.getElementById('submitButton').innerText = 'Display Evens';
	document.forms['displayEvens']['startNum'].focus();
}

function validateItems() {
	clearErrors();
	var startNum = document.forms['displayEvens']['startNum'].value;
	var endNum = document.forms['displayEvens']['endNum'].value;
	var stepNum = document.forms['displayEvens']['stepNum'].value;

	if (startNum == '' || isNaN(startNum)) {
		alert('Starting number must be filled in with a number.');
		document.forms['displayEvens']['startNum'].parentElement.className = 'form-group has-error';
		document.forms['displayEvens']['startNum'].focus();
		return false;
	}

	if (endNum == '' || isNaN(endNum) || Number(endNum) <= Number(startNum)) {
		alert('Ending number must be filled in with a number that is greater than the starting number.');
		document.forms['displayEvens']['endNum'].parentElement.className = 'form-group has-error';
		document.forms['displayEvens']['endNum'].focus();
		return false;
	}

	if (stepNum == '' || isNaN(stepNum) || stepNum < 0) {
		alert('Step number must be filled in with a number that is greater than 0.');
		document.forms['displayEvens']['stepNum'].parentElement.className = 'form-group has-error';
		document.forms['displayEvens']['stepNum'].focus();
		return false;
	}
	document.getElementById('resultStatement').style.display = 'block';
	document.getElementById('submitButton').innerText = 'Recalculate';
	document.getElementById('displayStartNum').innerText = startNum;
	document.getElementById('displayEndNum').innerText = endNum;
	document.getElementById('displayStepNum').innerText = stepNum;
	for (var i = Number(startNum); i <= Number(endNum); i += Number(stepNum)) {
		if (Number(i) % 2 === 0) {
			document.getElementById('results').innerHTML += i + '<br />';
		}
	}
	return false;
}

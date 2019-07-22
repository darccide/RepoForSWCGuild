var array = [3, 5, 7, 9, 11];

function findMax(array) {
	var max = 0;
	for (i = 0; i < array.length; i++) {
		if (max < array[i]) {
			max = array[i];
		}
	}
	return max;
}

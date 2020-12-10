export const formatPopulation = (value) => {
	let thousands = Number(value);
	return thousands.toLocaleString();
};

export const mapListtoString = (value) => {
	let inputList = [...value];
	let mapList;

	if (inputList.length > 0) {
		mapList = inputList.map((v) => v.name);
	}

	return mapList.toString();
};

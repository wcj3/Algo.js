function equals(arg1: any, arg2: any) {
  // Array
  if (Array.isArray(arg1) && Array.isArray(arg2)) {
    return arrayEquals(arg1, arg2);
  } else if (
    (Array.isArray(arg1) && Array.isArray(arg1)) ||
    (Array.isArray(arg2) && Array.isArray(arg1))
  ) {
    throw new Error("Arguments must be of the same type");
  }
}

// 2n time complexity
function arrayEquals(arg1: any[], arg2: any[]) {
  const comparison = {
    indices: {},
    data: {}
  };
  arg1.forEach((value, i) => {
    composeReferenceObj(comparison, value, i);
  });

  // iterate over keys in comparision Object
  for (const key of Object.keys(comparison)) {
    // check if key has childKey property
    // else compare value directly
    if (comparison.indices[key].hasOwnProperty("hasNestedObject")) {
    } else {
    }
  }
}

function composeReferenceObj(
  comparisonRef: {
    indices: Object;
    data: Object;
  },
  value: any,
  i: number
) {
  let depth = 0;
  // check type of value
  // if value is a primitive
  comparisonRef.data[depth] = [];
  if (value !== Object(value)) {
    // add value to data depth level
    comparisonRef.data[depth].push(value);
    comparisonRef.indices[i] = {
      type: "primitive"
    };
  } else {
    // if value is a mutable dive deeper until primitive is found
    comparisonRef.indices[i] = {
      type: "Object",
      hasNestedObject: true
    };
  }
}

export default equals;

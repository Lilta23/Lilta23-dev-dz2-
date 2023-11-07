function getRootProperty(obj, targetValue) {
    for (const prop in obj) {
        if (typeof obj[prop] === 'object') {
            const result = getRootProperty(obj[prop], targetValue);
            if (result !== null) {
                return prop;
            }
        } else if (Array.isArray(obj[prop]) && obj[prop].includes(targetValue)) {
            return prop;
        }
    }
    return null;
}

let object = {
    "one": {
        "nest1": {
            "val1": [9, 34, 92, 100]
        }
    },
    "2f7": {
        "n1": [10, 92, 53, 71],
        "n2": [82, 34, 6, 19]
    }
};

console.log(getRootProperty(object, 9));


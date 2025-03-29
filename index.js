// Iterates over a collection and calls callback on each element
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i]);
        }
    } else {
        for (const key in collection) {
            callback(collection[key]);
        }
    }
    return collection;
}

// Creates a new array by transforming each element with the callback
function myMap(collection, callback) {
    const result = [];
    myEach(collection, (item) => result.push(callback(item)));
    return result;
}

// Reduces the collection to a single value using the callback
function myReduce(collection, callback, acc) {
    let startIdx = 0;
    const arr = Array.isArray(collection) ? collection : Object.values(collection);

    if (acc === undefined) {
        acc = arr[0];
        startIdx = 1;
    }

    for (let i = startIdx; i < arr.length; i++) {
        acc = callback(acc, arr[i], collection);
    }

    return acc;
}

// Finds and returns the first element that passes the callback test
function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) return collection[i];
        }
    } else {
        for (const key in collection) {
            if (predicate(collection[key])) return collection[key];
        }
    }
    return undefined;
}

// Filters the collection based on the callback test
function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, (item) => {
        if (predicate(item)) result.push(item);
    });
    return result;
}

// Returns the size of the collection
function mySize(collection) {
    return Array.isArray(collection)
        ? collection.length
        : Object.keys(collection).length;
}

// Returns the first element(s) of the collection
function myFirst(array, n) {
    return n === undefined ? array[0] : array.slice(0, n);
}

// Returns the last element(s) of the collection
function myLast(array, n) {
    return n === undefined
        ? array[array.length - 1]
        : array.slice(-n);
}

// Returns the keys of an object
function myKeys(object) {
    return Object.keys(object);
}

// Returns the values of an object
function myValues(object) {
    return Object.values(object);
}
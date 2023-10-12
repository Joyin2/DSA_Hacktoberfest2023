class DynamicArray {
    constructor() {
        this.array = [];
    }

    // Add an element to the end of the array
    push(element) {
        this.array.push(element);
    }

    // Get the length of the array
    length() {
        return this.array.length;
    }

    // Get an element at a specific index
    get(index) {
        if (index < 0 || index >= this.length()) {
            return "Index out of bounds";
        }
        return this.array[index];
    }
}

// Example usage of the DynamicArray class
var myArray = new DynamicArray();

// Add elements to the array
myArray.push(5);
myArray.push("Hello");
myArray.push(true);

// Display the length of the array
console.log("Array Length:", myArray.length());

// Display elements at specific indices
console.log("Element at index 0:", myArray.get(0));
console.log("Element at index 1:", myArray.get(1));
console.log("Element at index 2:", myArray.get(2));
console.log("Element at index 3:", myArray.get(3));  // Index out of bounds

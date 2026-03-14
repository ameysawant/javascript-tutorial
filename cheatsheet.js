// - - - - - - - - - - - - - STRING - - - - - - - - - - - - - -
// Basic Manipulation
let str = "Hello World";
str.length;
// Returns the number of characters in the string
str.length; // 11

let char = str.charAt(1);
// Returns the character at the specified index (0-based)
char; // "e"

let unicode = str.charCodeAt(1);
// Returns the Unicode value (0-65535) of the character at the index
unicode; // 101

let bracketChar = str[1];
// Returns the character at the specified index using bracket notation (ES5)
bracketChar; // "e"

// Case Conversion
let upper = str.toUpperCase();
// Returns the string converted to uppercase letters (original unchanged)
upper; // "HELLO WORLD"
str; // "Hello World" (unchanged)

let lower = str.toLowerCase();
// Returns the string converted to lowercase letters (original unchanged)
lower; // "hello world"

// Searching
let str2 = "Hello world, hello again";
let index = str2.indexOf("hello");
// Returns the index of the first occurrence, searching from fromIndex (default 0), or -1 if not found
index; // 13 (second word, case-sensitive)

let indexFrom = str2.indexOf("o", 5);
// Returns the index starting search from fromIndex
indexFrom; // 7 (the 'o' in "world")

let lastIndex = str2.lastIndexOf("hello");
// Returns the index of the last occurrence, searching backwards from fromIndex, or -1 if not found
lastIndex; // 13 (only one "hello" lowercase)

let lastIndexFrom = str2.lastIndexOf("o", 10);
// Returns the last index searching backwards from fromIndex
lastIndexFrom; // 7 (the 'o' in "world")

let includes = str2.includes("world");
// Returns true if the string contains the specified value
includes; // true

let includesFrom = str2.includes("world", 10);
// Returns true if found starting search at position
includesFrom; // false (starts after "world")

let startsWith = str2.startsWith("Hello");
// Returns true if the string starts with the specified value
startsWith; // true

let startsWithFrom = str2.startsWith("world", 6);
// Returns true if at position it starts with value
startsWithFrom; // true (at index 6 is "world")

let endsWith = str2.endsWith("again");
// Returns true if the string ends with the specified value
endsWith; // true

let endsWithLength = str2.endsWith("world", 11);
// Returns true considering only first 'length' characters
endsWithLength; // true (first 11 chars end with "world")

let searchIndex = str2.search(/[0-9]/);
// Returns the index of the first regex match, or -1 if not found
searchIndex; // -1 (no numbers)

let searchAlpha = str2.search(/[A-Z]/);
// Returns index of first uppercase letter
searchAlpha; // 0 ("H")

// Extracting
let slice1 = str2.slice(0, 5);
// Extracts from indexStart to indexEnd (not including indexEnd)
slice1; // "Hello"

let sliceNegative = str2.slice(-5);
// Extracts from end (negative indices count from end)
sliceNegative; // "again"

let sliceNegativeRange = str2.slice(-10, -6);
// Extracts from -10 to -6
sliceNegativeRange; // "hello"

let substring1 = str2.substring(0, 5);
// Extracts between indices (no negatives)
substring1; // "Hello"

let substringSwapped = str2.substring(5, 0);
// Automatically swaps if start > end
substringSwapped; // "Hello"

let substringNegative = str2.substring(-5);
// Negatives treated as 0
substringNegative; // "Hello world, hello again" (entire string)

// Modifying
let str3 = "Hello";
let str4 = "World";
let concatStr = str3.concat(", ", str4, "!");
// Joins strings and returns new combined string
concatStr; // "Hello, World!"

let padded = "5";
let padStart = padded.padStart(3, "0");
// Pads beginning with "0" until length 3
padStart; // "005"

let padEnd = padded.padEnd(3, "0");
// Pads end with "0" until length 3
padEnd; // "500"

let repeatStr = "Ha".repeat(3);
// Returns new string repeated count times
repeatStr; // "HaHaHa"

let trimStr = "  Hello  ";
let trimmed = trimStr.trim();
// Removes whitespace from both ends
trimmed; // "Hello"
trimStr; // "  Hello  " (unchanged)

let trimStart = trimStr.trimStart();
// Removes whitespace from beginning only
trimStart; // "Hello  "

let trimEnd = trimStr.trimEnd();
// Removes whitespace from end only
trimEnd; // "  Hello"

// Splitting/Replacing
let csv = "apple,banana,orange";
let fruits = csv.split(",");
// Splits string into array based on separator
fruits; // ["apple", "banana", "orange"]

let limitSplit = csv.split(",", 2);
// Splits with limit on number of items
limitSplit; // ["apple", "banana"]

let replace1 = str2.replace("hello", "hi");
// Replaces FIRST occurrence only
replace1; // "Hello world, hi again"

let replaceAll = str2.replaceAll("hello", "hi");
// Replaces ALL occurrences (ES2021)
replaceAll; // "Hello world, hi again"

let regexReplace = str2.replace(/hello/g, "hi");
// Replaces all using regex with global flag
regexReplace; // "Hello world, hi again"

// ARRAY METHODS
let arr = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8];

// Adding/Removing Elements
let pushLength = arr.push(6, 7);
// Adds elements to end, returns new length
pushLength; // 7
arr; // [1, 2, 3, 4, 5, 6, 7]

let popped = arr.pop();
// Removes and returns last element
popped; // 7
arr; // [1, 2, 3, 4, 5, 6]

let unshiftLength = arr.unshift(-1, 0);
// Adds elements to beginning, returns new length
unshiftLength; // 8
arr; // [-1, 0, 1, 2, 3, 4, 5, 6]

let shifted = arr.shift();
// Removes and returns first element
shifted; // -1
arr; // [0, 1, 2, 3, 4, 5, 6]

let removed = arr.splice(2, 2);
// At index 2, remove 2 elements, returns removed array
removed; // [2, 3]
arr; // [0, 1, 4, 5, 6]

let inserted = arr.splice(2, 0, 2, 3);
// At index 2, remove 0, insert 2,3, returns empty array
inserted; // []
arr; // [0, 1, 2, 3, 4, 5, 6]

let replaced = arr.splice(2, 2, "two", "three");
// At index 2, remove 2, insert "two","three"
replaced; // [2, 3]
arr; // [0, 1, "two", "three", 4, 5, 6]

// Combining/Slicing
let merged = arr.concat(arr2, [9, 10]);
// Merges arrays and returns new combined array
merged; // [0, 1, "two", "three", 4, 5, 6, 6, 7, 8, 9, 10]
arr; // [0, 1, "two", "three", 4, 5, 6] (unchanged)

let sliced = arr.slice(2, 4);
// Returns shallow copy from index 2 to 4 (not including 4)
sliced; // ["two", "three"]

let sliceNegatives = arr.slice(-3);
// Returns last 3 elements
sliceNegatives; // [4, 5, 6]

let joined = arr.join(" - ");
// Joins all elements into string with separator
joined; // "0 - 1 - two - three - 4 - 5 - 6"

// Searching
let indexOf = arr.indexOf("two");
// Returns first index of element, or -1 if not found
indexOf; // 2

let indexOfFrom = arr.indexOf(4, 3);
// Searches for 4 starting from index 3
indexOfFrom; // 4

let lastIndexOf = arr.lastIndexOf(4);
// Returns last index of element
lastIndexOf; // 4

let includes2 = arr.includes("three");
// Returns true if array contains element
includes2; // true

let numbers = [1, 2, 3, 4, 5];
let found = numbers.find((num) => num > 3);
// Returns first element that satisfies condition
found; // 4

let foundIndex = numbers.findIndex((num) => num > 3);
// Returns index of first element that satisfies condition
foundIndex; // 3

// Iterating (Functional)
let forEachResult = [];
numbers.forEach((num, index) => {
  forEachResult.push(`${index}:${num}`);
});
// Executes function for each element (returns undefined)
forEachResult; // ["0:1", "1:2", "2:3", "3:4", "4:5"]

let doubled = numbers.map((num) => num * 2);
// Creates new array with results of calling function on every element
doubled; // [2, 4, 6, 8, 10]
numbers; // [1, 2, 3, 4, 5] (unchanged)

let evens = numbers.filter((num) => num % 2 === 0);
// Creates new array with elements that pass the test
evens; // [2, 4]

let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
// Reduces array to single value (left-to-right)
sum; // 15

let totalSalary = users.reduce((acc, user) => {
  return acc + user.salary;
}, 0);
totalSalary; // 373000

let groupedByCity = users.reduce((acc, user) => {
  // If this city doesn't exist in our accumulator yet, create an empty array
  if (!acc[user.city]) {
    acc[user.city] = [];
  }
  // Add the current user to their city group
  acc[user.city].push(user.name);
  return acc;
}, {}); // Start with empty object
groupedByCity;

let sumRight = numbers.reduceRight((acc, curr) => acc + curr, 0);
// Reduces array from right-to-left
sumRight; // 15

let hasEven = numbers.some((num) => num % 2 === 0);
// Returns true if at least one element passes the test
hasEven; // true

let allPositive = numbers.every((num) => num > 0);
// Returns true if all elements pass the test
allPositive; // true

// Sorting/Reversing
let unsorted = [3, 1, 4, 2, 5];
let sorted = unsorted.sort();
// Sorts as strings by default (in place)
sorted; // [1, 2, 3, 4, 5]
unsorted; // [1, 2, 3, 4, 5] (original changed!)

let mixed = [1, 10, 2, 20];
let defaultSort = mixed.sort();
// String sort: "1", "10", "2", "20"
defaultSort; // [1, 10, 2, 20]

let numericSort = [1, 10, 2, 20].sort((a, b) => a - b);
// Numeric sort ascending
numericSort; // [1, 2, 10, 20]

let descending = [1, 10, 2, 20].sort((a, b) => b - a);
// Numeric sort descending
descending; // [20, 10, 2, 1]

let reversed = numbers.reverse();
// Reverses array in place
reversed; // [5, 4, 3, 2, 1]
numbers; // [5, 4, 3, 2, 1] (original changed!)

// Other
let nested = [1, [2, 3], [4, [5, 6]]];
let flat1 = nested.flat();
// Flattens one level by default
flat1; // [1, 2, 3, 4, [5, 6]]

let flat2 = nested.flat(2);
// Flattens to depth 2
flat2; // [1, 2, 3, 4, 5, 6]

let sentences = ["Hello world", "foo bar"];
let words = sentences.flatMap((str) => str.split(" "));
// Maps then flattens one level
words; // ["Hello", "world", "foo", "bar"]

let isArray = Array.isArray(words);
// Checks if value is an array
isArray; // true

let fromString = Array.from("Hello");
// Creates array from iterable or array-like
fromString; // ["H", "e", "l", "l", "o"]

let fromSet = Array.from(new Set([1, 2, 3, 3, 4]));
// Creates array from Set (removes duplicates)
fromSet; // [1, 2, 3, 4]

let ofArray = Array.of(1, 2, 3, 4, 5);
// Creates array from arguments
ofArray; // [1, 2, 3, 4, 5]

// MATH METHODS
// Constants
let pi = Math.PI;
// Ratio of circumference to diameter (~3.14159)
pi; // 3.141592653589793

let euler = Math.E;
// Euler's number, base of natural logs (~2.718)
euler; // 2.718281828459045

let sqrt2 = Math.SQRT2;
// Square root of 2 (~1.414)
sqrt2; // 1.4142135623730951

let sqrt1_2 = Math.SQRT1_2;
// Square root of 1/2 (~0.707)
sqrt1_2; // 0.7071067811865476

let ln2 = Math.LN2;
// Natural log of 2 (~0.693)
ln2; // 0.6931471805599453

let ln10 = Math.LN10;
// Natural log of 10 (~2.303)
ln10; // 2.302585092994046

let log2e = Math.LOG2E;
// Base-2 log of E (~1.443)
log2e; // 1.4426950408889634

let log10e = Math.LOG10E;
// Base-10 log of E (~0.434)
log10e; // 0.4342944819032518

// Rounding
let round1 = Math.round(4.5);
// Rounds to nearest integer
round1; // 5

let round2 = Math.round(4.4);
// Rounds to nearest integer
round2; // 4

let ceil1 = Math.ceil(4.1);
// Smallest integer greater than or equal
ceil1; // 5

let ceil2 = Math.ceil(-4.1);
// Smallest integer greater than or equal
ceil2; // -4

let floor1 = Math.floor(4.9);
// Largest integer less than or equal
floor1; // 4

let floor2 = Math.floor(-4.1);
// Largest integer less than or equal
floor2; // -5

let trunc1 = Math.trunc(4.9);
// Removes fractional digits (integer part)
trunc1; // 4

let trunc2 = Math.trunc(-4.9);
// Removes fractional digits
trunc2; // -4

// Basic Operations
let abs1 = Math.abs(-5);
// Returns absolute (positive) value
abs1; // 5

let abs2 = Math.abs(5);
// Returns absolute (positive) value
abs2; // 5

let pow1 = Math.pow(2, 3);
// Returns base raised to exponent power
pow1; // 8

let sqrt = Math.sqrt(16);
// Returns square root
sqrt; // 4

let cbrt = Math.cbrt(27);
// Returns cube root
cbrt; // 3

let hypot = Math.hypot(3, 4);
// Square root of sum of squares (Pythagoras)
hypot; // 5

let sign1 = Math.sign(5);
// Returns sign (-1, 0, or 1)
sign1; // 1

let sign2 = Math.sign(-5);
// Returns sign
sign2; // -1

let sign3 = Math.sign(0);
// Returns sign
sign3; // 0

let max = Math.max(1, 5, 3, 9, 2);
// Returns largest of numbers
max; // 9

let maxArray = Math.max(...[1, 5, 3, 9, 2]);
// Using spread with array
maxArray; // 9

let min = Math.min(1, 5, 3, 9, 2);
// Returns smallest of numbers
min; // 1

// Trigonometry (all angles in radians)
let sin90 = Math.sin(Math.PI / 2);
// Returns sine of angle in radians
sin90; // 1

let cos0 = Math.cos(0);
// Returns cosine of angle in radians
cos0; // 1

let tan45 = Math.tan(Math.PI / 4);
// Returns tangent of angle in radians
tan45; // 0.9999999999999999 (approx 1)

let asin1 = Math.asin(1);
// Returns arcsine in radians
asin1; // 1.5707963267948966 (π/2)

let acos1 = Math.acos(0);
// Returns arccosine in radians
acos1; // 1.5707963267948966 (π/2)

let atan1 = Math.atan(1);
// Returns arctangent in radians
atan1; // 0.7853981633974483 (π/4)

let atan2 = Math.atan2(1, 1);
// Returns arctangent of quotient y/x
atan2; // 0.7853981633974483 (π/4)

// Log/Exp
let exp1 = Math.exp(1);
// Returns e raised to the power
exp1; // 2.718281828459045 (E)

let exp2 = Math.exp(2);
// Returns e²
exp2; // 7.38905609893065

let log1 = Math.log(Math.E);
// Returns natural logarithm (base e)
log1; // 1

let log10 = Math.log10(100);
// Returns base-10 logarithm
log10; // 2

let log2 = Math.log2(8);
// Returns base-2 logarithm
log2; // 3

// Random
let random1 = Math.random();
// Returns random number 0 ≤ n < 1
random1; // e.g., 0.2345678901234567

let random0to9 = Math.floor(Math.random() * 10);
// Returns random integer 0-9
random0to9; // e.g., 7

let random1to10 = Math.floor(Math.random() * 10) + 1;
// Returns random integer 1-10
random1to10; // e.g., 4

let randomMinMax = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
// Returns random integer between min and max (inclusive)
randomMinMax(5, 15); // e.g., 12

// DATE METHODS
// Creating Dates
let now = new Date();
// Creates Date object for current date/time
now; // e.g., "2026-03-14T12:30:45.123Z"

let fromTimestamp = new Date(1700000000000);
// Creates from milliseconds since Jan 1, 1970
fromTimestamp; // "2023-11-14T22:13:20.000Z"

let fromStrings = new Date("2026-03-14T10:30:00");
// Creates by parsing date string
fromStrings; // "2026-03-14T10:30:00.000Z"

let fromComponents = new Date(2026, 2, 14, 10, 30, 0, 0);
// Creates from components (month is 0-indexed!)
fromComponents; // "2026-03-14T10:30:00.000Z"
// Note: month 2 = March!

let timestamp = Date.now();
// Returns milliseconds since Jan 1, 1970
timestamp; // e.g., 1762345678901

let parsed = Date.parse("2026-03-14T10:30:00");
// Parses string and returns milliseconds
parsed; // 1762343400000

let utc = Date.UTC(2026, 2, 14, 10, 30, 0);
// Returns milliseconds for UTC date
utc; // 1762343400000

// Working with a specific date
let date = new Date(2026, 2, 14, 10, 30, 45, 123);
// March 14, 2026 10:30:45.123

// Getters (Local)
let year = date.getFullYear();
// Returns year (4 digits) according to local time
year; // 2026

let month = date.getMonth();
// Returns month (0-11) according to local time
month; // 2 (March)

let dayOfMonth = date.getDate();
// Returns day of month (1-31) according to local time
dayOfMonth; // 14

let dayOfWeek = date.getDay();
// Returns day of week (0-6, 0=Sunday)
dayOfWeek; // 6 (Saturday)

let hours = date.getHours();
// Returns hour (0-23) according to local time
hours; // 10

let minutes = date.getMinutes();
// Returns minutes (0-59)
minutes; // 30

let seconds = date.getSeconds();
// Returns seconds (0-59)
seconds; // 45

let milliseconds = date.getMilliseconds();
// Returns milliseconds (0-999)
milliseconds; // 123

let timeValue = date.getTime();
// Returns milliseconds since epoch
timeValue; // 1762343445123

// Getters (UTC)
let utcYear = date.getUTCFullYear();
// Returns UTC year
utcYear; // 2026

let utcMonth = date.getUTCMonth();
// Returns UTC month
utcMonth; // 2

let utcDate = date.getUTCDate();
// Returns UTC day of month
utcDate; // 14

let utcDay = date.getUTCDay();
// Returns UTC day of week
utcDay; // 6

let utcHours = date.getUTCHours();
// Returns UTC hour (depends on timezone)
utcHours; // e.g., 14 (if local is UTC-4)

// Setters (Local)
let dateCopy = new Date(date);
dateCopy.setFullYear(2027);
// Sets year, returns timestamp
dateCopy; // "2027-03-14T10:30:45.123Z"

dateCopy.setMonth(11);
// Sets month (0-11), December
dateCopy; // "2027-12-14T10:30:45.123Z"

dateCopy.setDate(25);
// Sets day of month
dateCopy; // "2027-12-25T10:30:45.123Z"

dateCopy.setHours(15);
// Sets hour
dateCopy; // "2027-12-25T15:30:45.123Z"

dateCopy.setMinutes(45);
// Sets minutes
dateCopy; // "2027-12-25T15:45:45.123Z"

dateCopy.setSeconds(30);
// Sets seconds
dateCopy; // "2027-12-25T15:45:30.123Z"

dateCopy.setMilliseconds(500);
// Sets milliseconds
dateCopy; // "2027-12-25T15:45:30.500Z"

dateCopy.setTime(0);
// Sets by timestamp (Jan 1, 1970 UTC)
dateCopy; // "1970-01-01T00:00:00.000Z"

// Date Arithmetic
let tomorrow = new Date(date);
tomorrow.setDate(date.getDate() + 1);
// Adds 1 day
tomorrow; // "2026-03-15T10:30:45.123Z"

let nextMonth = new Date(date);
nextMonth.setMonth(date.getMonth() + 2);
// Adds 2 months
nextMonth; // "2026-05-14T10:30:45.123Z"

let lastYear = new Date(date);
lastYear.setFullYear(date.getFullYear() - 1);
// Subtracts 1 year
lastYear; // "2025-03-14T10:30:45.123Z"

// Formatting
let dateString = date.toString();
// Full string representation (local timezone)
dateString; // "Sat Mar 14 2026 10:30:45 GMT-0400 (Eastern Daylight Time)"

let dateOnly = date.toDateString();
// Date portion only
dateOnly; // "Sat Mar 14 2026"

let timeOnly = date.toTimeString();
// Time portion only
timeOnly; // "10:30:45 GMT-0400 (Eastern Daylight Time)"

let isoString = date.toISOString();
// ISO format (always UTC)
isoString; // "2026-03-14T14:30:45.123Z"

let utcString = date.toUTCString();
// UTC string representation
utcString; // "Sat, 14 Mar 2026 14:30:45 GMT"

let localeString = date.toLocaleString();
// Local format with options
localeString; // "3/14/2026, 10:30:45 AM"

let localeDate = date.toLocaleDateString("en-US");
// Local date format (US)
localeDate; // "3/14/2026"

let localeDateUK = date.toLocaleDateString("en-GB");
// Local date format (UK)
localeDateUK; // "14/03/2026"

let localeTime = date.toLocaleTimeString("en-US");
// Local time format
localeTime; // "10:30:45 AM"

let customLocale = date.toLocaleString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});
// Custom formatting with options
customLocale; // "Saturday, March 14, 2026 at 10:30 AM"

// Useful constants
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayName = days[date.getDay()];
// Get day name
dayName; // "Saturday"

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let monthName = months[date.getMonth()];
// Get month name
monthName; // "March"

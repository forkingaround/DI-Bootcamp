console.log(
typeof(15),
// Prediction: number
// Actual: number

typeof(5.5),
// Prediction: Float
// Actual: number

typeof(NaN),
// Prediction: Boolean
// Actual: number

typeof("hello"),
// Prediction: String
// Actual: string

typeof(true),
// Prediction: Boolean
// Actual: boolean

typeof(1 != 2),
// Prediction: Boolean
// Actual: boolean

"hamburger" + "s",
// Prediction: hamburgers
// Actual: hamburgers

"hamburgers" - "s",
// Prediction:  error
// Actual: NaN

"1" + "3",
// Prediction: 13
// Actual: 12

"1" - "3",
// Prediction: NaN
// Actual: -2

"johnny" + 5,
// Prediction: johnny5
// Actual: johnny5

"johnny" - 5,
// Prediction: NaN
// Actual: NaN

99 * "hello",
// Prediction: NaN
// Actual:NaN

1 != 1,
// Prediction: false
// Actual: false

1 == "1",
// Prediction: true
// Actual: true

1 === "1",
// Prediction: false
// Actual: false
);
Cash Dispenser.js
=================

## Purpose:
Small library that divides a cash amount into a units of currency

Note: 
This is a small side project that I work on in my spare time.
Please feel free to contribute.

## Version
0.1

## License
MIT

## Dependencies
None

## Installation
Include `js\cashToCoins.js`

<script src="js/cashToCoins.js"></script>

##Environment
Run the test cases to determine support. 
Should work on all browsers.

## Documentation
TODO

Please read the test cases to understand how everything works.

## Change Log
Refer to history.md

## Issues / Help
Please raise a ticket for help.

## Example 

There's a cash dispenser that contains 1¢, 5¢, 10¢, 25¢, $1, $5, $10 unit of US currency.
This is represented as `var usCurr = [1, 5, 10, 25, 50, 100];`
Here's how $49.19 converts would be dispensed.
<pre>
  cashToChange(usCurr, 4919)
  // returns {1: 4, 5: 1, 10: 1, 100: 49}
</pre>

## Roadmap
TODO

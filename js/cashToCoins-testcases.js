/**
* @author Larry Battle <bateru.com/news>
* @date April 11, 2012
* @purpose  Testcase for currency program.
*/

test("test input", function () {
  equal(cashToChange(null, null), null, "null for both");
	equal(cashToChange([], null), null, "null for amount");
	equal(cashToChange(null, 12313), null, "null for curr");
	equal(cashToChange(123123, []), null, "wrong arguments");
	equal(cashToChange([], 123.2), null, "curr must has a length");
	equal(cashToChange([-1,-100,10,1], 123.2), null, "curr must has a length");
	equal(cashToChange([-1,-100], 123.2), null, "curr must have a unit bigger than 0");
	equal(cashToChange([0], 123.2), null, "curr must have a unit bigger than 0");
	equal(cashToChange([1,-100], 123.2), null, "curr can't have negative numbers.");
	equal(cashToChange([1,2,3], -123.2), null, "don't support a negative amount.");
	ok(cashToChange([23], 123.2), "good input");
	ok(cashToChange([1, 2, 3], 123), "good input");
});
test("test whole amount", function () {
	var usCurr = [1, 5, 10, 25, 50, 100];
	deepEqual(cashToChange(usCurr, 1), {
		1 : 1
	}, "should be 1");
	deepEqual(cashToChange(usCurr, 5), {
		5 : 1
	}, "should be 5");
	deepEqual(cashToChange(usCurr, 10), {
		10 : 1
	}, "should be 10");
	deepEqual(cashToChange(usCurr, 100), {
		100 : 1
	}, "should be 100");
});
test("test complex amount", function () {
	var usCurr = [1, 5, 10, 25, 50, 100];
	deepEqual(cashToChange(usCurr, 3), {
		1 : 3
	}, "should be 3");
	deepEqual(cashToChange(usCurr, 15), {
		10 : 1,
		5 : 1
	}, "should be 15");
	deepEqual(cashToChange(usCurr, 37), {
		1 : 2,
		10 : 1,
		25 : 1
	}, "should be 37");
	deepEqual(cashToChange(usCurr, 137), {
		"1" : 2,
		"10" : 1,
		"100" : 1,
		"25" : 1
	}, "should be 137");
	deepEqual(cashToChange(usCurr, 337),{
		"1" : 2,
		"10" : 1,
		"100" : 3,
		"25" : 1
	}, "should be 337");
});

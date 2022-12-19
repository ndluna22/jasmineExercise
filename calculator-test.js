
it('should calculate the monthly rate correctly', function () {
  // ...

  const defaultValues = {
    amount: 50000,
    years: 12,
    rate: 3.0,
  };

  expect(calculateMonthlyPayment(defaultValues)).toEqual('413.89');

});


it("should return a result with 2 decimal places", function() {
  // ..
  const defaultValues = {
    amount: 30000,
    years: 5,
    rate: 6.0,
  };

  expect(calculateMonthlyPayment(defaultValues)).toEqual('579.98');


});



});
/// etc

const fetchData = async () => {
  const wait = async () => {
    return new Promise(resolve => setTimeout(resolve, 500));
  };
  wait();
  return 'peanut butter';
};

test('the data is peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});

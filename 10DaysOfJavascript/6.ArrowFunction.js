function modifyArray(nums) {
  return nums.map((e) => (e % 2 === 0 ? e * 2 : e * 3));
}

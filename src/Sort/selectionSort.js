function selectionSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        var min_indx = i;
        for(let j = i; j < nums.length; j++){
            if(nums[j] < nums[min_indx]){
                min_indx = j;
                var temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
    return nums;
}

module.exports = selectionSort;
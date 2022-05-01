var twoSum = (j , target , nums)=>{
    let k = nums.length - 1;
    let result = [];
    while(j<k){
        let leftval = nums[j];
        let rightval = nums[k];

        if(left + rigthval > target){
            k--;    
        }
        else if(left + rightval < target){
            j++;
        }
        else{
            result .push([(target*-1),leftval,rightval]);
            while(j<k && nums[j] === nums[j+1]) j++;
            while(j<k && nums[k] === nums[k-1]) k--;
            j++;
            k--;
        }
    }
    return result;
}

var threesum = function(nums){
    nums.sort((a,b)=>a-b);
    const result =[];
    for(let i = 0; i<nums.length;i++){
        if(nums[i] === nums[i-1]) continue;
        let target = [nums[i]*-1];
        let subResult = twoSum(i+1,target,nums);
        result.pust(...subResult);   
    }
    return result;
};
nums = [-1,0,1,2,-1,-4];
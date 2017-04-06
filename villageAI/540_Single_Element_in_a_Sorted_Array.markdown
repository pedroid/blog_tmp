#540. Single Element in a Sorted Array
##description
Given a sorted array consisting of only integers where every element appears twice except for one element which appears once. Find this single element that appears only once.

###Example 1:
Input: [1,1,2,3,3,4,4,8,8]

Output: 2
###Example 2:
Input: [3,3,7,7,10,11,11]

Output: 10

##Solution
    int Solution::singleNonDuplicate(vector<int>& nums) {	
	    stack <int>tmp;
	    for (int i = 0; i < nums.size(); i++){
		    if (tmp.empty()) tmp.push(nums[i]);
		    else{
			    if (tmp.top() == nums[i]){
				    tmp.pop();
			    }else{
				    tmp.push(nums[i]);
    			}
    		}
    	}
    	int result = tmp.top();
    	return result;
    }


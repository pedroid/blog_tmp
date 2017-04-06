#003 Longest Substring Without Repeating Characters
##description
Given a string, find the length of the longest substring without repeating characters.

###Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.



##Solution
    int Solution::lengthOfLongestSubstring(string s){	
	unordered_map<char, int> hash;		
	int results = 0;
	for (int i = 0; i < s.length(); i++){
		if (hash.empty()) {
			hash[s[i]] = i;	
			results = 1;
		}else{ // not empty
			if (hash.find(s[i]) != hash.end()){ //found
				hash.erase(hash.begin(), hash.find(s[i]));
				if (hash.size() > results) {
					results = hash.size();					
				}				
				hash[s[i]] = i;
			}else{ // not found!
				hash[s[i]] = i;
				if (hash.size() > results) {
					results = hash.size();
				}
			}
		}
	}


	return results;
    };
##Other Solution
       public int lengthOfLongestSubstring(String s) {
        if (s.length()==0) return 0;
        HashMap<Character, Integer> map = new HashMap<Character, Integer>();
        int max=0;
        for (int i=0, j=0; i<s.length(); ++i){
            if (map.containsKey(s.charAt(i))){
                j = Math.max(j,map.get(s.charAt(i))+1);
            }
            map.put(s.charAt(i),i);
            max = Math.max(max,i-j+1);
        }
        return max;
    }
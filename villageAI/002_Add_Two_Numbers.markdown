#002 Add Two Numbers
##description
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
###Example:
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

##心得
向量的相加沒有想像中的簡單，要處理overflow，以及處理不同長度的vector，還有要熟悉ListNode以及pointer to ListNode的操作，花了一個下午來處理這個問題，後來看了一下其他人的解答，程式碼比想像中乾淨簡潔多了，還有許多觀念看來需要重新解構再理解。

1. while 迴圈處理ListNode，可以在while() 的條件中放結束的條件，我的作法是用while(true)然後在迴圈中判斷結束的條件以break，其實效果一樣，但程式碼可以更簡潔。

2. d 

##Solution
    ListNode* Solution::addTwoNumbers(ListNode* l1, ListNode* l2) {
    	ListNode *currNode_l1 = l1;
    	ListNode *currNode_l2 = l2;
    	ListNode *ResultListNode;
    	ListNode *currResultListNode;// = &ResultListNode;
    	int l1_number;
    	int l2_number;
    	bool overflow = false;	
    	bool flag_first = true;
    	ListNode NewListNode(NULL);
    	while (true){		
    		if (currNode_l1 == NULL) l1_number = 0; else l1_number = currNode_l1->val;
    		if (currNode_l2 == NULL) l2_number = 0; else l2_number = currNode_l2->val;		
		
		ListNode *NewListNode = new ListNode(NULL);
		if (flag_first) {
			ResultListNode = NewListNode;
			flag_first = false;
			NewListNode->val = l1_number + l2_number;
			if (NewListNode->val >= 10){
				overflow = true;
				NewListNode->val = NewListNode->val % 10;
			}

		}else{
			currResultListNode->next = NewListNode;
			if (overflow) NewListNode->val = l1_number + l2_number + 1;
			else NewListNode->val = l1_number + l2_number;
			overflow = false;
			if (NewListNode->val >= 10){
				overflow = true;
				NewListNode->val = NewListNode->val % 10;
			}
			else{
				overflow = false;
				NewListNode->val = NewListNode->val;
			}
		}

		currResultListNode = NewListNode;

		if (currNode_l1 != NULL){
			if (currNode_l1->next!=NULL) currNode_l1 = currNode_l1->next;
			else currNode_l1 = NULL;
		}
		if (currNode_l2 != NULL){
			if (currNode_l2->next != NULL)currNode_l2 = currNode_l2->next;
			else currNode_l2 = NULL;
		}
		
		if (currNode_l1 == NULL && currNode_l2 == NULL){
			if (overflow){
				ListNode *NewListNode = new ListNode(NULL);
				NewListNode->val = 1;				
				currResultListNode->next = NewListNode;
				break; 
			}else{ break; }
		}
	}


	return ResultListNode;
}

##Other Solution
    public class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode c1 = l1;
        ListNode c2 = l2;
        ListNode sentinel = new ListNode(0);
        ListNode d = sentinel;
        int sum = 0;
        while (c1 != null || c2 != null) {
            sum /= 10;
            if (c1 != null) {
                sum += c1.val;
                c1 = c1.next;
            }
            if (c2 != null) {
                sum += c2.val;
                c2 = c2.next;
            }
            d.next = new ListNode(sum % 10);
            d = d.next;
        }
        if (sum / 10 == 1)
            d.next = new ListNode(1);
        return sentinel.next;
    }
    }

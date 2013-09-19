class BST:
    def __init__(self, bst_node):
        self.head = bst_node

class BSTNode:
    def __init__(self, value, left_child = None, right_child = None):
        self.value = value
        self.left = left_child
        self.right = right_child

class LL:
    def __init__(self):
        self.head = None
        self.tail = None

    def append(self, ll_node):
        if not(self.head):
            self.head = ll_node
            self.tail = ll_node
        else:
            self.tail.next = ll_node
            self.tail = ll_node

    def append_list(self, ll):
        if not(self.head):
            self.head = ll.head
        self.tail = ll.tail

class LLNode:
    def __init__(self, value, next = None):
        self.value = value
        self.next = next

def compare_bst(bst1, bst2):
    l1 = convert_bst_to_ordered_list(bst1)
    l2 = convert_bst_to_ordered_list(bst2)

    l1_ptr = l1
    l2_ptr = l2
    result = True
    while l1_ptr or l2_ptr:
        if not(l1_ptr) or not(l2_ptr):
            # one list has already reached the end
            result = False
            break
        elif l1_ptr.value != l2_ptr.value:
            result = False
            break
        else:
            l1_ptr = l1_ptr.next
            l2_ptr = l2_ptr.next
    return result

def convert_bst_to_ordered_list(bst):
    node = LLNode(bst.head.value)
    left_ordered = None
    right_ordered = None
    # get the left ordered list, or empty list
    if bst.head.left:
        left_ordered = convert_bst_to_ordered_list(bst.head.right)
    else:
        left_ordered = LL()
    # get the right ordered list, or empty list
    if bst.head.right:
        right_ordered = convert_bst_to_ordered_list(bst.head.right)
    else:
        right_ordered = LL()
    left_ordered.append(node)
    left_ordered.append_list(right_ordered)
    return left_ordered

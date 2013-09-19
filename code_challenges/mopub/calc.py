"""
calc.py

>>> import calc
>>> s='2+4+8+7-5+3-1'
>>> calc.calc(s)
18
>>> calc.calc('2*3+4-5*4')
-10
"""

import re
from operator import concat

operator_function_table = { '+' : lambda x, y: x + y,
                            '-' : lambda x, y: x - y, 
                            '*' : lambda x, y: x * y, 
                            '/' : lambda x, y: x / y }
op_re_add_sub = '\+|\-'
op_re_mult_div = '\*|\/'
op_re = op_re_add_sub + '|' + op_re_mult_div

def calc(s):
    add_sub_operands = re.split(op_re_add_sub, s)
    add_sub_operators = re.findall(op_re_add_sub, s)
    post_mult_div = [str(calc_helper(operand)) for operand in add_sub_operands]
    new_calc_l = [reduce(concat, list(x)) for x in zip(post_mult_div[:-1], add_sub_operators)]
    new_calc_l.extend(post_mult_div[-1])
    new_calc_s = reduce(concat, new_calc_l)
    result = calc_helper(new_calc_s)

    return result

def calc_helper(s):
    operands = [int(k) for k in re.split(op_re, s)]
    operators = filter(lambda x: x, re.split('\d', s))
    operator_functions = [operator_function_table[x] for x in operators]
    for f in operator_functions:
        result = apply(f, [operands[0], operands[1]])
        operands = [result] + operands[2:]
    final_result = operands[0]
    return final_result

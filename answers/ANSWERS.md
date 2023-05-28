**Question 1** 
------------
Given an array const a = [1, 3, 5, 2, 4] generate an array result1 from a, which should be equal to [1, 5, 4]. The solution should be of the form: 

**Answer 1 ->**
------------
const result1 = a.filter((ele,index)=>{
    if(index%2===0) return true;
    return false;
});
console.log(result1);



**Question 2**
------------
Given an array const a = [1, 3, 5, 2, 4]generate an array result2 from a, which should be equal to [1, 9, 25, 4, 16]. The solution should be of the form: 

**Answer 2 ->**
------------
const result2 = a.map(ele=>ele**2);
console.log(result2);




**Question 3**
------------
Given an array const a = [1, 3, 5, 2, 4]generate an array result3 from a, which should be equal to [1, 25, 16]. The solution should be of the form: 

**Answer 3 ->**
------------
const result3 = a.filter((ele,index)=>{
    if(index%2===0) return true;
    return false;
}).map(ele=>ele**2);
console.log(result3);

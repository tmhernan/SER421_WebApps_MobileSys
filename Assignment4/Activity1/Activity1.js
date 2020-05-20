/* 
Activity 1: DOM expressions (20 points)
Go to www.bing.com and perform a search using 3 distinct words of your choosing. Save the resulting page (save the complete page,
not just the "source"). Load the page you just saved locally (Open File…<file you just saved>).
Now, for this activity, write DOM expressions that do the following (write these in a activity1.js file):
1. (3) Output to the console the <ol> element encompassing the results of the search
2. (4) Output to the console the code for the "onload" event on the <body> element
3. (3) Output to the console the 2nd child node underneath the <body> element
4. (3) Output to the console the number of <h2> tags in the page
5. (3) Output to the console the value in the search bar (you must get this from the search bar not anywhere else on the page)

*/

//1
console.log(document.getElementById('b_context'));
//2
console.log(document.getElementsByName('onload'));
//3
console.log(document.body.children[1]);
//4
console.log(document.getElementsByTagName('h2').length);
//5
console.log(document.body.children[1].children[0].children[1].children[0].getAttribute('value'));

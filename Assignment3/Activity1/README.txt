
install packages:
`npm install`
to run:
SET DEBUG=express-locallibrary-tutorial:* & npm run devstart
on: 
http://localhost:3000/


Notes:
1. Not implemented: reset and undo
2. User activity missing elements
3. Error handling. None for empty lists: functions stop working if comments and user activity are empty





ASSIGNMENT DIRECTIONS:

Activity 1: An article reviewer system (35 points)
In this lab you would be developing a web app that has an article displayed and you would either add comments or
delete those comments. For this activity you will be using Express to build your application.
I strongly advise you to go to the node express tutorial here https://developer.mozilla.org/en-US/docs/Learn/Serverside/Express_Nodejs/skeleton_website and go through this tutorial before you start this activity. I want you to use
pug and I want you to use routes. https://expressjs.com/en/starter/generator.html on this site it explains how you can
setup the skeleton for your app already, which will greatly help you in getting started.
R1. The main UI of your application (/) is a page that displays:
a. A welcome message followed by a section that displays the article content read from a file named
article.txt using fs module
b. You would have another section called “comments” below the article section that displays the
comments if they exist (see also later).
c. A simple web form that contains buttons named “Add Comment “, “Delete Comment”, “Undo”, “View
User Activity” and “Reset”
R2.As inferred by 1, the system should support 4 options: “Add Comment”, “Delete Comment”, “View User
Activity”,” Undo”
a. “Add Comment” button should be part of a web form that takes in the Comment Id and a comment
about the article from the user as inputs. It must be implemented as ‘/add’ and should support only
POST. Use a persistent store named “comments.json”, to store the comments so that it is easy to
add and delete comments.
b. “Delete Comment” button should be part of a web form that takes in the Comment Id from the user
as input and deletes the corresponding comment with that id from the comments section. It must be
implemented under /delete and must support only POST. If the id does not exists give the user a
good response and error message.
c. “View User Activity” must be implemented using your own version of an underlying stack. Whenever
the user presses the add or delete comment button the corresponding activity needs to be tracked
and stored in the stack. It must be implemented as /view and must support only GET and it should
take you to a page which renders the list of user activities retrieved from the stack. Also see R7 for
what you need to store.
d. “Undo” must be implemented as /undo and support GET or POST. To implement the “undo”
operation you have to pop the top operation off the stack and update the comments section.
e. The response of each of these actions should be a message stating success (or an error) and a link
back to the landing page (/) except for “View User Activity” page alone. The “View User Activity”
page would display the list of existing user activities from the stack in the success page and must
have a link back to the landing page (/).
R3. Implement a 5th option “Reset” that supports only GET at URL endpoint /reset. This operations resets the
entire comments section to be empty and empties the stack. Again, the response should be a success or
error.
R4.Push is inferred; you are to automatically push when an “add” or” delete” button is clicked; however you do
not have an URL to expose Push as an operation to be invoked from the UI.
R5.You should ensure that pages are not cached. Each request to the server should be “new”. (Hint: Try
learning about the HTTP response headers)
R6.You must validate the URLs, methods and inputs your program receives. If an invalid URL is given, ensure
the proper HTTP error code is returned. If an invalid method is given to the URL, ensure the proper HTTP
error code is returned. If the input typed into the form is invalid, ensure the proper HTTP error code is
returned.
R7. The stack implementation is a history of operations carried out by the user and each row in a stack must
include the operation, the operand (if applicable – eg comment), the IP address and the User-agent of each
request.
Constraints:
C1.You must use one of Pug or EJS to render each page (will be one of your dependencies).
C2.You have to use express, which should make your life easier of course.
C3. No Javascript or CSS in the browser at all, same as in assign 2. 
Note: The article reviewer app is shared; that is there is no requirement based on different users/browsers. All users
of the app share the same app state (stack).
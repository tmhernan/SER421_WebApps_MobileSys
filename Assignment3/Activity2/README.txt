install packages:
`npm install`

to run:
SET DEBUG=express-locallibrary-tutorial:* & npm run devstart
on: 
http://localhost:3000/


Notes:
1. Part 3 not done
3. Pre user choice check not implemented


ASSIGNMENT DIRECTIONS:

Activity 2: Roommate Finder - Find your next roommate online (60 points)
For your activity 2, you would be developing a web application that helps you to find a roommate based on a series
of questions. The landing page of the app contains a user input where the user enters his name and a button named
“Match” is present. The user after entering the username clicks the “Match” button and then answers a series of
questions. After all the questions have been answered, the user finally receives a list of users most compatible by
comparing their answers to the answers of all other users. Users may return later and change their answers to get a
new list of matched users.
You are required to use Node and Express to develop the application with the following requirements:
R1. The landing page should contain a text box to allow the user to enter a username and then a “match” button
which then takes to a list of questions.
R2.Each page after the landing page displays a question and a list of answers with a “Next” and “Prev” button.
Each page must be implemented using /question/:id, where id is the question number.
R3. The last page after all the questions would display a list of matched users, where the users are matched
based on the number of same answers with other users.
R4. When the user clicks the “prev” button, the answer to the previous question should be preselected and
similarly for the “next” button the answer should be preselected if it had been already answered i.e
conversational state should be maintained when you move back and forth between the questions.
R5. Include an option in each question page either as a button or hyperlink to select the answer rendering
preferences either as vertical list or horizontal list (based on the user preference the answers might be listed
either vertically or horizontally).
R6. Implement a one-shot timer that terminates the survey immediately if the user has not completed answering
all the questions within 30 seconds.
R7. Delegate the code into separate modules as folders and your main routine file should be named server.js.
Also, you should provide a package.json file that specifies all the external dependencies with the targets to
install and run the application.
R8.Be sure to implement error handling appropriate to your application (as in Activity 1 R6 above).
R9.You should ensure that the pages are not cached and each request to the server should be “new”
Constraints:
C1. The answers to each question must be a radio button and the answers must be saved to a file store called
answers.json using fs module. The questions must be read from a file questions.json (you need to come up
with a question file and format).
C2. Use Pug or EJS to render the application
C3.You must use session middleware to accomplish the conversational state features of this app. Do not use
cookies, hidden form fields, or URL rewriting for conversational state.
C4. No Javascript or CSS in the browser
C5.You should pre-populate survey responses from any browser when re-logging in for a particular user.
C6. The number of questions in the survey should be variable – do NOT hardcode the set of questions within the
webapp. They should go with the file, and if the set of questions in the file changes, then the questions in the
survey should change. 
To run on vs code:

use an extension such as Go Live


ASSIGNMENT DIRECTIONS

Activity 2: Implement a “forum” ON THE CLIENT (35 points)
This activity is about creating a replica of a “forum” webpage. The web application would have some article or review about a movie
and then the user would be prompted to enter comments or their feedback about the movie. After, the user had entered his/her
feedback about the movie reviews, you need to censor all the rude words (and replace) with their antonyms fetched from the
dictionary provided. Note: Please use Firefox browser while implementing activity 2 and activity 3, since Chrome does not allow you
to set cookies locally and allows only from a hosted server.
You will use a dictionary structure provided to you. Requirements:
Create your own web application under the following constraints (both for Activity 2 and Activity 3)
C1. Your application has NO server component whatsoever.
C2. Your application has NO CSS.
C3. Your application must be a "single page application" – that is, it never reloads a page from a local source or does a
document.write() to simulate a page refresh. The page is in effect your desktop application GUI.

Functionally your program must:
R1. (5) Greet the user by asking for her/his name on startup in a simple form. The name should be "remembered" and used anywhere
a direct naming of the end user is appropriate. The web app should then start the conversation with a question. The question
should be a common greeting like "Hello <name> Welcome to movie review System! Please enter your comments about the
movie" and then followed by some article content. If the user had already logged in and is returning back greet him with an alert
box having a message like “Welcome back <name>” along with the greeting message.
R2. (10) After the greeting is done, now display your own movie-review content about a movie using DOM manipulation of a nonform element (such as<p> or <div> tag) that you have. Provide any input type that allows the user to enter his comments about
the movie reviews given by the critics. You should parse the string the user types in and search for matches in the dictionary then
censor all the words that are available as “keys” in the dictionary and replace them with their corresponding values.
R3. (5) You should vary the responses to the same keywords (although the number of responses will of course be finite) by
introducing some simple randomization so no 2 same words follow the same pattern of responses. For randomization, use the
basic Math.random() built into Javascript.
R4. (5) If the user does not complete or respond within 30 seconds after he sees the movie reviews, then the webapp should display a
dialog box with a message from one of the values in the “idle” key field of the dictionary provided. There should be a prompt for
every 30 second the user has not submitted his review. Again, the prompt should not always be the same. To implement this
feature, look up the window.setTimeout API in the browser.
R5. (10) Your program should detect the presence of JSON input into the user input form, and have the ability to dynamically
incorporate the new JSON into the dictionary by adding (not replacing) its entries to the existing dictionary the webapp is using.
When this happens, the webapp should proudly announce using a prompt that : "Word added to the dictionary and the dictionary
is smarter" (Note in your server-side implementation we did this with the fs module, here we will do it through user input). If the 
JSON is not valid (does not conform to a dictionary entry structure), then the webapp should say “Could not find the proper key
and the dictionary stays dumb” using a prompt. If the entered JSON is completely invalid then prompt the user with an error
message stating “Invalid JSON! Please enter a valid JSON!”. Hint: You can treat an input to be a JSON if you find the braces
“{“,”}” present in the input.
NOTES:
The given dictionary can be included as part of the js file by simple copy paste or using the “require”.
1. Do not use session or local storage for keeping track of the user’s name. You have 2 other alternatives J.
2. Note there is no HTTP in this lab. So, the textual input has to be handled on the button event through JavaScript
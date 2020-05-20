Assignment Directions:

Hints/Constraints:
C1. You may openly share your API design on the class Slack, and even make it available on any public service
you have available to you, such as Heroku. The design of the requests and responses of the Nodeimplemented API may be discussed freely on the lab 5 channel.
a. As usual you are not allowed to share code
b. If you make your API publicly available remember to set a CORS (Access-Control-Allow-Origin)
header so others may invoke it.
c. Having multiple apps use your API is a great way to verify your implementation!
C2. Lab 3 was in Express so that is what I expect you will use. You can remove a lot of the server-side
rendering stuff (unless you choose to templatize your JSON response payloads!). However, you are free to
implement the API however you choose, including using 3rd-party REST API packages like restify if you
think they will help. You can always ask out on Slack to verify, but in general we will be a bit more
forgiving of 3rd party npm modules for the server-side here.
C3. You should use Routing again to handle your GET and POST (remember assignment 3).
C4. Activity 1 uses AJAX only, do not use Fetch. You may use Promises and/or async/await in the browser if
you choose.
C5. A proper design approach would be to have a mock API implementation that simply returns hardcoded
results at first so you can write the client. Then incrementally implement API endpoints. Use a 3rd-party
tool like curl, Postman, or ARC to ensure that your API implementation conforms to your design
expectations. You should be watching API HTTP traffic for this activity (and activity 2 for that matter) as
an effective means of troubleshooting.
C6. If you are not able to provide an API documentation, please write a simple README providing details on
how to run your API in order to get some partial points. If there is no information on how to run your API
no partial credits might be awarded.
Activity 2: Use Fetch to access a real Web API
We will be using GitHub API for this activity. https://developer.github.com/v3/apps/available-endpoints/ provides
the documentation for the GitHub API on how to use it with sample requests and responses. You will want to skim
through it in order to complete this activity.
Write a complete web application that does the following:
R1. (20) Have a textbox and a button that allows to get a valid GitHub username ( you can skip GitHub
username validation, assume that we always enter a valid GitHub username). Fetch and display data for any
2 GitHub repositories of the same user. The data should be retrieved and parsed out of the JSON at URLs
like the above activity but via a Fetch call. The data should be displayed in a table (2 rows):
a. The first repository can be any repository of your wish and the data must be populated in the first
row.
b. Similarly, the second repository can be any repository but must be from the same user/userid and
the data must be populated in the second row.
c. You must have a dynamic dropdown list below the table that has a set of 5 other repositories of the
same user (you need to invoke the API using the userid to set up this dropdown list). Also, ensure
that the list does not have any of the repositories listed in the first two rows
d. A third repository data is populated on click of the dropdown widget and the data must be
populated on the 3rd row.
e. For each row, have a column for the repository name followed by:
i. TimeStamp column that has details about “Created At” and “Updated At”.
ii. Size of the repository
iii. Number of forks
iv. HTML Url
v. List of languages Used and the languages URL
vi. Downloads column that displays the downloads URL if and only if its present else should
display “None”
vii. Branches column (see R3 for further details)
R2. (10) At the top of the page, display the following line “The average number of issues is AAA and the
repository with the maximum number of issues is BBB” (“AAA” and “BBB” must be replaced by the real
values fetched using API)
R3. (10) The branches column just has a button named “Branches”, when clicked puts the branch details of the
repository below the table. (if the number of branches is more than 30 display any 30 of them). The branch
details to be included are “name”, “sha”, “url” and “protected”. You can decide the format of the rendered
output on the screen (as long as it is clearly readable).
R4. (10) Provide a "Refresh" button at the bottom of the table that causes the data values for the entire table to
be updated as well as recompute requirement R2 based on the new values. It should also clear the branch
details area if there is any text in it.
Hints/Constraints:
C1. Activity 2 may appear somewhat daunting at first, but spend 15 minutes on the API website with their tools
and by inspecting JSON in the browser and you will see it is not that difficult.
C2. You must use Fetch for this activity, not AJAX!
C3. Do not use a form/submit button in order to get the username since this is a Single Page Application and
you are expected to get the value from the box using HTML element “button” using DOM.
C4. Be sure to check for non-200 responses and have basic error-checking – your app should not crash or ruin
the rendering of the display table if an API Fetch call is not successful; instead it should show an
appropriate error message!
C5. As before, no CSS!(You can use CSS just for the table borders alone)
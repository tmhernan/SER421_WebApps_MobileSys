To run the server:

`node server.js`

To run the application GUI:

for vs code:
Use extension such as Live Server and open 
assignment5.html.





ASSIGNMENT DIRECTIONS:

Activity 1: Use AJAX with your own API to refactor your server-side MVC application (50 points)
For this activity, you will create a simple currency converter in an API driven manner. You will create an API in
NodeJS and create a SPA (Single Page Application) that consumes that API to implement a currency converter
service and application. (This activity might be partially similar to the activity 1 of lab3, “the article reviewer
system”, where you maintained a stack.)
R1. (3) Your application should load when the root URL (/) of your server is accessed.
R2. (20) Your application GUI should include:
a. The currency value clearly displayed
b. The current set of operations maintained in the stack
c. A one-line textbox for entering the currency in USD
d. Buttons that helps in converting the USD into “Euro” and “Pounds”, disabled unless a valid
number is entered into the textbox, at which point they should be enabled. These buttons should
cause the invocation of AJAX calls to the server API to perform the respective operation. Clicking
on “Euro” should convert the amount entered into the text box as USD into Euro and should be
displayed on top of the textbox. Similarly, the amount should be converted to pound when
“Pound” button is clicked (1 USD=0.9 Euro and 1 USD=0.78 Pound)
e. A button for the Pop operation should be provided and should always be enabled. Again, this
should cause the invocation of a Pop operation to the API. Clicking on “Pop” should take the
application to previous state (remove the last step).
f. A button for a Reset operation should be provided and should always be enabled when there is
something in the stack. Again, this should cause the invocation of a Reset operation to the API
g. Upon successful completion of API calls for d-f, you should display a new currency value and a
history of operations i.e. updated value of the stack. This will require a second API call to /history.
(Note: “History” shall not include the pop operation)
h. The application should detect error messages and display the respective error code and message in
the GUI (make sure you set the correct error code).
R3. (20) Your NodeJS API server should:
a. Listen on port 8008
b. Provide endpoints /euro, /pound, /pop and /reset. The response to “/euro” and “/pound” API calls
are a proper status code and JSON payload reflecting the new currency value. (eg {“value”:num})
The response to /pop is open ended, and you can return whatever you want in order to bring back
the application to the previous state. (The endpoints “/euro”, “/pound” should support only POST
and the endpoint “/pop” should support only GET)
c. Provide an endpoint /history. This endpoint should have the ability to return as JSON the entire
history of operations applied to the currency converted. It should only support GET. Each entry in
the stack should include the operation (“Euro or Pound”), the currency in USD, the converted
currency (in either “Euro” or “Pound”), the ip Address and the User-Agent.
d. Push is implied but is not an exposed API-accessible behavior (when converting things will
automatically be pushed).
e. Error situations should be handled appropriately, meaning the proper error response code is
returned, with a JSON payload providing error message details where appropriate
R4. (7) You should provide API documentation (in HTML as a webpage) at /api. This may be a hand-crafted
static webpage, though I will be more impressed if you auto-gen the API documentation from your code.
Might give you some extra points ;-)
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
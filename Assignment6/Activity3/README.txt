Activity 1

    Five ships with lenght 2, 3, 3, 4, 5 placed at random. No overlapping and no boundary overlap.



Activiy 2

    Part 1:

    Webview fits most screens. Game is functional.


    Part 2:
    Requirements 1-6 implemented. Please note the professor stated in slack that it was okay to implement 
    the "Record" button in Activity 3 so that is what I did.

    Enable Question/Answer: 
    I enabled setWebContentsDebuggingEnabled for the extra debugging that would come through to logcat. 
    I wanted to have everything I could enabled so I could better troubleshoot the program.

    R6 Question/Answer:
    I left the back button settings as is for screen 3 to 2. This is because the expected behavior if the 
    user changes their mind is that the state of the game would not change. Therefore, when the user goes back
    to the webview it is exactly the same. Now, when the user goes back from screen 2 to 1, their name is wiped
    and they are starting the game over. I implemented an onpause funciton in main activity to reset the name 
    the page. I chose to restart the game on the back button because this back button behavior here is akin 
    to the user wanting to "get out" of the app or current game.

    Gradle Clean was ran before zipping files.


Activity 3

    Notes: History and record are both implemented, however, I ran out of time to save the user's name in 
    cookies, so, the record is not funcitoning as expected. It holds the username as "undefined." I do 
    apologize, I have not had a lot of time or I always seem to run out of time.
    
    Storage Question/Answer:
    For the game's history, I used session storage. This is because the history is unique to the user. When 
    the session ends, the need to retain history (noting history's intended purpose) is no more. I used local
    storage for record as record is not unique to the user and should not reset when the browser closes. As far as 
    #4 for this activity, I did not change the variables, etc., storage as I wasn't sure if this was supposed 
    to be implemented or if it was just a quesiton. For variable data, I would not store it directly in the game,
    I would use mostly local storage as most of the information would not change, like size of the game. This way,
    it persists from session to session. 


    Gradle Clean was ran before zipping files.

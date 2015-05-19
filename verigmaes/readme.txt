HTML:
 - Update index.html, Achievements.html, Achievements_Logged_In.html
 - Add index-loggedin.html
 - There is one html validate error for "data-action" which is used for js load more function, please ignore.
 
CSS:
 - Add css code in modules.css from line 12432 to line 13415
 - Please ignore the validate warnings for "vendor-extension"   
 
JS:
 - Add js code in scripts.js from line 3576 to line 3795
 
IMAGES:
 - Added images are put in "i/v" folder. 

================================================================================================ 
 
For all mock functions are implemented with ajax. All mock data are put in "data" folder. 
Game information:
 - It will load different data from "data/game-info-*.html" for different slider.
 - the code is from line 3583 to line 3607 
 
  
View More:
 - the ajax interface is set in "data-action" 
 - the code is from line 3692 to line 3717 

================================================================================================ 

1 - For some UI padding or margin, I have make them consistent, please accept.

2 - I have set the font with the updated storyboard which is mentioned in forum.

3 - Please read the forum carefully for the requirements confirmed from copilot.

4 - Please deploy on web server for testing, like XAMPP. Because there is ajax call required.

5 - For game slider, because the carousel slider will update the info content, so maybe you can not test the info UI and functions well. IMO, the slider should not auto slider when info section is expand. Please accept my implementation and give your recommended suggestion. For testing: 1) You can set the "pause" bigger, like "200000" at line 3637 for testing or 2) commented out "auto:true" at line 3636.
 

Thanks.
  
 
 
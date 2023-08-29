# SImas's Personal Website - Testing

![amiresponsive-picture](https://github.com/SimasJakubenas/PersonalWebsite/assets/138577499/039e3269-b96f-4364-a6f8-96d642fbb079)

Visit the deployed site: [Personal Website](https://simasjakubenas.github.io/PersonalWebsite/)

## CONTENTS

* [AUTOMATED TESTING](#automated-testing)
  * [W3C Validator](#w3c-validator)
  * [Lighthouse](#lighthouse)
* [MANUAL TESTING](#manual-testing)
  * [Testing User Stories](#testing-user-stories)
  * [Full Testing](#full-testing)

I was performing testing on different features throughout the development process. 
I used Google Developer Tools to make sure everything worked as intended.
I also used Google Developer Tools to check responsivness with other devices.

## Automated Testing

### W3C Validator

[W3C](https://validator.w3.org/) was used to validate the HTML and CSS.

HTML - passed.

![image](https://github.com/SimasJakubenas/PersonalWebsite/assets/138577499/8ec31fbd-5a03-40ef-8e84-0221849e2f46)

CSS - passed.

![image](https://github.com/SimasJakubenas/PersonalWebsite/assets/138577499/01a5b09b-3f12-48d0-962e-cc882b643126)

### Lighthouse

I used Lighthouse thats within Chrome Developer Tools to test the websites performance, accessibility, best practices and SEO.

#### Desktop Results

![image](https://github.com/SimasJakubenas/PersonalWebsite/assets/138577499/8055b888-5291-44cc-b2d6-ca8d5df1212c)

#### Mobile Results

![image](https://github.com/SimasJakubenas/PersonalWebsite/assets/138577499/caf1e391-6e86-4723-b00b-99f6d9df8529)

## Manual Testing

### Testing User Stories

`First Time Visitors`

| Goals | How are goals achieved |
| :--- | :--- |
| I want to immediately understand the purpose of the website. | The greeting message and the name in the URL tells the user that it is the developer's personal website. |
| I want to be able to navigate the website effortlessly uppon first visit. | Easy navigation provided by a single continuos page with a menu that is positioned to be visible at all times. |
| I want to be able to find the information I'm looking for easily. | This is achieved by having screen sized sections (for laptos and desctops) highlighted by the background colour contrast between them. Section are clearly defined and accessible through menu bar. |
| I want to be able to view other projects from this website developer. | N/A (feature not implemented yet) |
| I want to be able to visit the developer's GitHub account to observe the level of activity there and quality of the code on their other projects. | Link to my GitHub page is visible at all times in the top left corner of the screen and accessible within footer section. |
| I want to be able to contact the developer of this website if I wish to do so. | The 'Contact Me' form at the on of the page ensures the user has a way to contact me directly. |
| I want the website to be responsive to the device I'm using. | Website is responsive to all screen sizes. |

`Returning Visitors`

| Goals | How are goals achieved |
| :--- | :--- |
| I want to see if there are new projects in developer's portfolio. | N/A (feature not implemented yet) |
| I want to see if theres new additions to developer's GitHub account. | Link to my GitHub page is visible at all times in the top left corner of the screen and accessible within footer section. |

### Full Testing

Full testing was performed on the following devices:

* Laptop:
  * Asus N53J 15.6"
* Mobile Device:
  * Samsung S20 FE

The website was tested on the following browsers:

* Google Chrome
* Opra
* Firefox
* Edge

`The Landing Page`

| Feature | Testing Performed | Expected Result | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| GitHub icon | Clicked icon | Opens my GitHub profile | My GitHub profile opens in a new window | Pass |
| Facebook icon | Clicked icon | Opens my Facebook profile | My Facebook profile opens in a new window | Pass|
| LinkedIn icon | Clicked icon | Opens my LinkedIn profile | My LinkedIn profile opens in a new window | Pass |
| Twitter icon | Clicked icon | Opens my Twitter profile | My Twitter profile opens in a new window | Pass |
| Instagram icon | Clicked icon | Opens my Instagram profile | My Instagram profile opens in a new window | Pass |
| All social links hover/focus effects | Hovered/focused the social links | Icon enlarges | Icon increases in size when hovered/focus and the effect vanishes when hovered/focused elsewhere | Pass |
| Hamburger Icon (smaller screens) | Clicked icon | Reveals the menu | The menu is brought to screen in a smooth motion from top to bottom | Pass|
| Hamburger Icon (when menu is revealed) | Clicked icon | Hides the menu | The menu is hidden from sight in a smooth motion from bottom up | Pass|
| Hamburger hover/focus effect | Hovered/focused the menu icon | Change colour | Icon became purple in colour | Pass |
| All menu item | Pressed on every menu item | Takes user to the section described by menu item | Scrolls the page to coresponding section | Pass|
|Typing animation in the greeting message | Reloaded page | Give the illusion of typing uppon reload | The word 'website' appears to be typed in uppon loading | Pass |
|Typewriter cursor animation | Observed | Should blink continuosly | Appears to blink indefinitely | Pass |

`Education section`

| Feature | Testing Performed | Expected Result | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| (Deprecated) School icon in 'Education' section | Clicked on Icon | Reveal info about the school I went to | A figcaption is displayed in the middle of screen with info about my school (feature is removed in final version) | Pass |
| (Deprecated) School icon hover/focus effect | Hoverer/focused the icon | Enlarge the icon | The icon increased in size (feature is removed in final version) | Pass |
| (Deprecated) The 'X' closing button | Clicked the button | hide the figcaption | The figcaption disappears from the view (feature is removed in final version) | Pass |
| (Deprecated) Mortarboard icon in 'Education' section | Clicked on Icon | Reveal info about the education I'm recieving | A figcaption is displayed in the middle of screen with info about my current education (feature is removed in final version) | Pass |
| (Deprecated) Mortarboard icon hover/focus effect | Hoverer/focused the icon | Enlarge the icon | The icon increased in size(feature is removed in final version) | Pass |
| (Deprecated) The 'X' closing button | Clicked the button | hide the figcaption | The figcaption disappears from the view (feature is removed in final version) | Pass |
| (Deprecated) Arrow animation | Observed | Goes left and right on a loop | Arrow moves left and right as if it's pointing to an icon (feature is removed in final version) | Pass |
| Education container animated border on hover | Hovered on the container | Border animation animation starts | Border is animated uppon hover |

`Skills section`

| Feature | Testing Performed | Expected Result | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Coding languages animation | Observed | Animation repeats in 5s intervals| Moves from left to right to give illusion of loading and continues in a loop | Pass |
| Skills section icons | Clicked the icons | Reveal message asociated with the icon | Reveals the coresponding messages | Pass |
| Skills section icons hover/focus effect| Hovered/focused the icons | Change colour | Changes icon colour | Pass |

`Work Experience section`

| Feature | Testing Performed | Expected Result | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Border and shadow animation on hover | Hovered over text | Animation starts | Border and shadow is animated uppon hover |


`Contact Me section`

| Feature | Testing Performed | Expected Result | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Forms radio buttons | Clicked on button | Show selected button | Selects the button that was clicked | Pass |
| Forms submit button | Clicked the button | Complete the form and display error if necessary fields aren't completed | Does just that | Pass |

`Footer`

| Feature | Testing Performed | Expected Result | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Footer social media links | Clicked on link | Bring to corresponding website | Links do work | Pass |
| Footer social media links hover/focus effect | Hovered/focused on link | Change colour | Links changed colour| Pass |
| 'To Home Page' arrow | Clicked on arrow | Bring to top of the page | Page scrolls to the landing page | Pass |
| 'To Home Page' arrow hover/focus effect | Hovered/focused arrow | Enlarge size | Arrow increases in size | Pass |
https://emad341459.tiiny.site/

MY SMART PROFILE WEBSITE
========================

A responsive portfolio website built with HTML, CSS, JavaScript, jQuery and Bootstrap 5.

PAGE BREAKDOWN:
---------------

1. HOME PAGE (index.html)
-----------------------
What it does:
- Shows welcome message + profile image
- Displays sliding image carousel (like a photo slideshow)

Simple Code Explanation:
- Uses Bootstrap's grid system to arrange text and image side-by-side
- Carousel works with Bootstrap's ready-made JavaScript
- Navbar links to all pages using Bootstrap classes

Implementation Functions:

Carousel setup:
<div class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="slide1.jpg" class="d-block w-100">
    </div>
  </div>
</div>
* Uses Bootstrap's built-in carousel component
* data-bs-ride="carousel" enables auto-sliding

Key Features:
✔ Responsive navigation bar
✔ Auto-rotating image carousel
✔ Clean layout using Bootstrap grids

2. ABOUT ME (about.html)
----------------------
What it does:
- Shows personal info in 3 sections
- "Show More" buttons reveal hidden text
- Toggle switch changes light/dark mode

Simple Code Explanation:
- JavaScript adds/removes "show" class to expand sections
- Theme switcher saves preference using browser storage
- CSS changes colors based on light/dark class

Implementation Functions:
Show/hide content:
button.addEventListener('click', function() {
  content.classList.toggle('show');
});
Theme switcher:
themeSwitch.addEventListener('change', function() {
  document.body.classList.toggle('dark-theme');
});

Key Features:
✔ Expandable content sections
✔ Persistent theme preference
✔ Responsive bio layout

3. CONTACT PAGE (contact.html)
---------------------------
What it does:
- Contact form with validation
- Shows error messages if input is wrong
- Counts characters in message box

Simple Code Explanation:
- HTML5 does most validation (required/email/number)
- JavaScript counts characters as you type
- CSS styles valid/invalid inputs differently

Implementation Functions:
Input validation:
<input type="email" required>
Character counting:
textarea.addEventListener('input', function() {
  counter.textContent = this.value.length;
});

Key Features:
✔ Smart form validation
✔ Real-time feedback
✔ Character counter

4. PORTFOLIO (portfolio.html)
--------------------------
What it does:
- Displays 3 project cards
- "View Next" button changes one card's content

Simple Code Explanation:
- Cards use Bootstrap's card component
- JavaScript stores projects in an array
- Button cycles through array to update card

Implementation Functions:
Update card content:
function updateCard() {
  title.textContent = projects[currentProject].title;
  // Update other elements...
}

Key Features:
✔ Dynamic content updating
✔ Professional project cards
✔ Smooth transitions

5. FUN PAGE (fun.html)
--------------------
What it does:
- Toggle button shows/hides message with slide effect
- Fade buttons make image appear/disappear
- Loads quotes/jokes from text files

Simple Code Explanation:
- jQuery's slideToggle() handles the sliding
- fadeIn()/fadeOut() control image visibility
- AJAX fetches external text files

Implementation Functions:
Slide toggle:
$('#toggleBtn').click(function() {
  $('#content').slideToggle();
});
AJAX loading:
$.get('quote.txt', function(data) {
  $('#display').html(data);
});

Key Features:
✔ Interactive show/hide effects
✔ External content loading
✔ Simple animations

6. SMART PAGE (smart.html)
------------------------
What it does:
- Shows live greeting as you type name
- Boxes change on mouse hover
- Click buttons play different animations

Simple Code Explanation:
- keyup event triggers greeting update
- hover() changes box styles
- animate.css adds bounce/fade effects

Implementation Functions:
Live greeting:
$('#nameInput').keyup(function() {
  $('#greeting').text('Hello ' + this.value);
});
Animation trigger:
$('#animateBtn').click(function() {
  $('#box').addClass('animate__bounce');
});

Key Features:
✔ Real-time typing response
✔ Hover interactions
✔ Multiple animation options

HOW TO USE:
-----------
1. Unzip all files
2. Open any HTML file in browser
3. For AJAX (quote/joke loading), use a local server

NOTE: All pages share:
- Common navigation bar
- Consistent styling
- Responsive design
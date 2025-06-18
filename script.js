// About Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Show More/Show Less functionality
    const bioToggle = document.getElementById('bioToggle');
    const moreBio = document.getElementById('moreBio');
    
    const hobbiesToggle = document.getElementById('hobbiesToggle');
    const moreHobbies = document.getElementById('moreHobbies');
    
    const goalsToggle = document.getElementById('goalsToggle');
    const moreGoals = document.getElementById('moreGoals');
    
    // Initialize collapses
    const collapses = [moreBio, moreHobbies, moreGoals];
    collapses.forEach(collapse => {
        collapse.style.transition = 'height 0.3s ease';
    });
    
    // Toggle functions
    function setupToggle(button, collapseElement) {
        button.addEventListener('click', function() {
            const isCollapsed = collapseElement.classList.contains('show');
            
            if (isCollapsed) {
                collapseElement.classList.remove('show');
                button.textContent = 'Show More';
            } else {
                collapseElement.classList.add('show');
                button.textContent = 'Show Less';
            }
        });
    }
    
    setupToggle(bioToggle, moreBio);
    setupToggle(hobbiesToggle, moreHobbies);
    setupToggle(goalsToggle, moreGoals);
    
    // Theme Switcher
    const themeSwitch = document.getElementById('themeSwitch');
    
    // Check for saved theme preference or use preferred color scheme
    const currentTheme = localStorage.getItem('theme') || 
                        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeSwitch.checked = true;
    }
    
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    });
});



// Contact Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const messageTextarea = document.getElementById('message');
    const charCount = document.getElementById('charCount');
    const successMessage = document.getElementById('successMessage');

    // Character counter for message textarea
    if (messageTextarea && charCount) {
        messageTextarea.addEventListener('input', function() {
            charCount.textContent = this.value.length;
        });
    }

    // Form validation and submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            event.stopPropagation();
            
            // Check form validity
            if (this.checkValidity()) {
                // In a real application, you would send the form data to a server here
                // For this demo, we'll just show a success message
                
                // Hide form and show success message
                this.classList.add('d-none');
                successMessage.classList.remove('d-none');
                
                // Reset form after 5 seconds (for demo purposes)
                setTimeout(() => {
                    this.classList.remove('d-none');
                    successMessage.classList.add('d-none');
                    this.reset();
                    charCount.textContent = '0';
                    this.classList.remove('was-validated');
                }, 5000);
            }
            
            this.classList.add('was-validated');
        }, false);
    }
});



// Portfolio Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Projects data for the dynamic card
    const projects = [
        {
            title: "E-commerce Site",
            description: "An e-commerce prototype with product listings, cart functionality, and checkout process.",
            image: "images/project3.jpg",
            technologies: "HTML, CSS, JavaScript",
            date: "May 2023"
        },
        {
            title: "Blog Platform",
            description: "A responsive blog platform with user authentication and rich text editing.",
            image: "images/project4.jpg",
            technologies: "JavaScript, Bootstrap, Firebase",
            date: "July 2023"
        },
        {
            title: "Recipe Finder",
            description: "Application that finds recipes based on ingredients you have available.",
            image: "images/project5.jpg",
            technologies: "JavaScript, API Integration",
            date: "September 2023"
        }
    ];
    
    // Get DOM elements
    const updateCardBtn = document.getElementById('updateCardBtn');
    const dynamicCardImg = document.getElementById('dynamicCardImg');
    const dynamicCardTitle = document.getElementById('dynamicCardTitle');
    const dynamicCardText = document.getElementById('dynamicCardText');
    const dynamicCardList = document.getElementById('dynamicCardList');
    
    // Initialize project counter
    let currentProject = 0;
    
    // Update card function
    function updateCard() {
        const project = projects[currentProject];
        
        dynamicCardImg.src = project.image;
        dynamicCardImg.alt = project.title;
        dynamicCardTitle.textContent = project.title;
        dynamicCardText.textContent = project.description;
        
        // Update list items
        dynamicCardList.innerHTML = `
            <li class="list-group-item"><strong>Technologies:</strong> ${project.technologies}</li>
            <li class="list-group-item"><strong>Date:</strong> ${project.date}</li>
        `;
        
        // Update counter for next click
        currentProject = (currentProject + 1) % projects.length;
    }
    
    // Add click event to button
    if (updateCardBtn) {
        updateCardBtn.addEventListener('click', updateCard);
    }
});





// Fun Page jQuery Functionality
$(document).ready(function() {
    // 1. Slide Toggle Functionality
    $('#toggleBtn').click(function() {
        $('#secretMessage').slideToggle(400, function() {
            // Optional callback after animation completes
        });
    });

    // 2. Image Fade Effects
    $('#fadeOutBtn').click(function() {
        $('#funImage').fadeOut(500);
    });
    
    $('#fadeInBtn').click(function() {
        $('#funImage').fadeIn(500);
    });

    // 3. AJAX Content Loading
    $('#loadQuoteBtn').click(function() {
        $('#contentDisplay').html('<p class="text-muted">Loading quote...</p>');
        
        $.get('quote.txt')
            .done(function(data) {
                $('#contentDisplay').html('<blockquote class="blockquote"><p style="color: black;">' + data + '</p></blockquote>');
            })
            .fail(function() {
                $('#contentDisplay').html('<p class="text-danger">Failed to load quote. Here\'s a default one:</p><blockquote class="blockquote"><p style="color: black;">The only way to do great work is to love what you do. - Steve Jobs</p></blockquote>');
            });
    });

    $('#loadJokeBtn').click(function() {
        $('#contentDisplay').html('<p class="text-muted">Loading joke...</p>');
        
        $.get('joke.txt')
            .done(function(data) {
                $('#contentDisplay').html('<div class="alert alert-light"><h4>Here\'s a joke for you:</h4><p style="color: black;">' + data + '</p></div>');
            })
            .fail(function() {
                $('#contentDisplay').html('<p class="text-danger">Failed to load joke. Here\'s a default one:</p><div class="alert alert-light"><h4>Why don\'t scientists trust atoms?</h4><p style="color: black;">Because they make up everything!</p></div>');
            });
    });
});





// Smart Page jQuery Functionality
$(document).ready(function() {
    // 1. Live Personalized Greeting
    $('#nameInput').on('keyup', function() {
        const name = $(this).val().trim();
        if (name.length > 0) {
            $('#userName').text(name);
            $('#greetingOutput').fadeIn();
        } else {
            $('#greetingOutput').fadeOut();
        }
    });

    // 2. Hover Background Color Change
    $('.hover-box').hover(
        function() { // mouse enter
            $(this).css('opacity', '0.8');
        },
        function() { // mouse leave
            $(this).css('opacity', '1');
        }
    );

    // 3. Click Animations
    $('#bounceBtn').click(function() {
        $('#animationBox')
            .removeClass()
            .addClass('animate__animated animate__bounce');
    });

    $('#fadeBtn').click(function() {
        $('#animationBox')
            .removeClass()
            .addClass('animate__animated animate__fadeOut animate__fast')
            .one('animationend', function() {
                $(this).removeClass()
                    .addClass('animate__animated animate__fadeIn');
            });
    });

    $('#slideBtn').click(function() {
        $('#animationBox')
            .removeClass()
            .addClass('animate__animated animate__slideInLeft')
            .one('animationend', function() {
                $(this).removeClass();
            });
    });

    $('#rotateBtn').click(function() {
        $('#animationBox')
            .removeClass()
            .addClass('animate__animated animate__rotateIn');
    });

    $('#resetBtn').click(function() {
        $('#animationBox').removeClass();
    });

    // 4. Theme Switcher (consistent with about.html)
    const themeSwitch = $('#themeSwitch');
    const currentTheme = localStorage.getItem('theme') || 
                       (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    if (currentTheme === 'dark') {
        $('body').addClass('dark-theme');
        themeSwitch.prop('checked', true);
    }

    themeSwitch.change(function() {
        if ($(this).is(':checked')) {
            $('body').addClass('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            $('body').removeClass('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    });
});




// Get all the links with the class "scroll-link"
var scrollLinks = document.querySelectorAll('.scroll-link');

// Loop through each link and add an event listener for click
scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        // Prevent the default link behavior (i.e., navigating to a new page)
        e.preventDefault();
        
        // Get the section ID from the link's href attribute
        var sectionId = link.getAttribute('href');
        
        // Find the section element on the page
        var section = document.querySelector(sectionId);
        
        // Calculate the distance from the top of the section to the top of the viewport
        var sectionTop = section.getBoundingClientRect().top;
        
        // Use window.scrollTo() to smoothly scroll to the section
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    });
});
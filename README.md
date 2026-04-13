# Shorty — URL Shortener Web App

#### Shorty is a URL shortener web app that turns longs URL into short links



## Description
Resume: A form that outlines the skills and tallents of an individual. This resume is taylored to a candidate who is ready to take on the challenge of saving the world.

## Table of Contents
* [Technologies Used](#technologiesused)
* [Features](#features)
* [Design](#design)
* [How it Works](#howItWorks)
* [Deployed App](#deployment)
* [About the Author](#author)

## <a name="technologiesused"></a>Technologies Used
 * HTML5  
* Tailwind CSS (v4 CDN)  
* DaisyUI  
* JavaScript (ES Modules)  
* Bitly API  
* JS Confetti


## Features
- Instant URL Shortening using Bitly API  
- One-Click Copy for shortened links  
- Saved Links History using localStorage  
- Confetti Celebration on first successful link  
- Dark Mode Toggle with persistent theme  
- Loading States & UX Feedback  
- Fully Responsive Design (Mobile-First)  
  



## <a name="howItWorks"></a>How it Works

1. User inputs a long URL  
2. URL is validated  
3. Request is sent to Bitly API  
4. Shortened link is returned  
5. Link is displayed + saved to localStorage  
6. Confetti triggers on first success 

---
## <a name="deployment"></a>Deployed Link

[Github Pages](https://robb-designs.github.io/url-shortener)


    
## Works Cited:

- https://www.w3schools.com/
- https://www.npmjs.com/package/js-confetti (JS Confetti)
- https://dev.bitly.com/api-reference/#createFullBitlink (Bitly API)
- https://developer.mozilla.org/en-US/docs/Web/API (API Intergration)
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions (Functions)
- https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Useful_string_methods (Strings & string methods)


## Reflection

---

Building Shorty was a valuable learning experience that pushed me to think beyond just getting things to work and instead focus on structure, user experience, and maintainability.

One of the biggest challenges I faced was setting up Tailwind CSS and DaisyUI correctly. Understanding how the tooling works together and troubleshooting configuration issues took time, but ultimately helped me become more comfortable working with modern styling frameworks. I also ran into limitations while testing the API due to request limits, which forced me to debug carefully and be more intentional with how often I made calls.

A major concept that clicked for me during this project was **separation of concerns**. Organizing my code into different modules (API handling, UI updates, utilities) helped me understand how to structure applications in a cleaner, more scalable way. This was a big step forward in how I approach problem-solving and code organization.

Overall, this project helped me grow not just technically, but also in how I think about building real-world applications.
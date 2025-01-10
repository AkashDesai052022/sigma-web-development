// script.js

// Function to create and animate trees
function createTree() {
    const background = document.querySelector('.background');
    const tree = document.createElement('div');
    tree.classList.add('tree');
  
    // Randomize tree height and starting position
    const randomHeight = Math.random() * 40 + 60; // Height between 60px and 100px
    const randomDelay = Math.random() * 2.4; // Delay between 0 and 3 seconds
  
    tree.style.height = `${randomHeight}px`;
    tree.style.animationDelay = `${randomDelay}s`;
  
    // Add tree to background
    background.appendChild(tree);
  
    // Remove tree after it exits the screen
    tree.addEventListener('animationend', () => {
      tree.remove();
    });
  }
  
  // Generate trees periodically
  setInterval(createTree, 1000); // Create a tree every second
  
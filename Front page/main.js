document.addEventListener('DOMContentLoaded', () => {
  // Animations when page loads
  const container = document.querySelector('.container');
  const title = document.querySelector('.title');
  const buttons = document.querySelectorAll('.btn');
  const continueBtn = document.querySelector('.continue-btn');
  
  // Hide continue button initially
  continueBtn.style.display = 'none';
  
  // Track subscriptions
  const subscriptions = {
    telegram: false,
    youtube: false
  };
  
  // Add fade-in animation to elements
  setTimeout(() => {
    container.style.opacity = 1;
    container.style.transform = 'translateY(0)';
  }, 300);
  
  // Function to check if both channels are subscribed
  function checkSubscriptions() {
    if (subscriptions.telegram && subscriptions.youtube) {
      // Show continue button with animation
      continueBtn.style.display = 'flex';
      continueBtn.style.opacity = 0;
      continueBtn.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        continueBtn.style.opacity = 1;
        continueBtn.style.transform = 'translateY(0)';
      }, 100);
    }
  }
  
  // Button hover sound effect (optional)
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      // Uncomment the following line if you want to add sound later
      // playHoverSound();
    });
    
    // Button click actions
    button.addEventListener('click', () => {
      if (button.classList.contains('telegram')) {
        // Open Telegram link
        window.open('https://t.me/+d7oCbtEgHQY1NWQ1', '_blank');
        
        // Mark as subscribed and show checkmark
        subscriptions.telegram = true;
        button.classList.add('subscribed');
        
        // Add checkmark icon
        if (!button.querySelector('.check-icon')) {
          const checkIcon = document.createElement('i');
          checkIcon.className = 'fas fa-check check-icon';
          button.appendChild(checkIcon);
        }
        
        checkSubscriptions();
      } else if (button.classList.contains('youtube')) {
        // Open YouTube link
        window.open('https://youtube.com/@zeroxofc-g4v?feature=shared', '_blank');
        
        // Mark as subscribed and show checkmark
        subscriptions.youtube = true;
        button.classList.add('subscribed');
        
        // Add checkmark icon
        if (!button.querySelector('.check-icon')) {
          const checkIcon = document.createElement('i');
          checkIcon.className = 'fas fa-check check-icon';
          button.appendChild(checkIcon);
        }
        
        checkSubscriptions();
      }
    });
  });
  
  // Continue button action
  continueBtn.addEventListener('click', () => {
    // Add pulse animation on click
    continueBtn.classList.add('pulse');
    
    // Remove the animation class after it completes
    setTimeout(() => {
      continueBtn.classList.remove('pulse');
      // Navigate to the next page or perform an action
      // window.location.href = 'next-page.html';
      alert('Welcome to ZEROX!'); // Temporary action - replace with your desired action
    }, 600);
  });
  
  // Add interactive hover effect to the logo
  const logoWrapper = document.querySelector('.logo-wrapper');
  logoWrapper.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = logoWrapper.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    
    logoWrapper.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
  });
  
  logoWrapper.addEventListener('mouseleave', () => {
    logoWrapper.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
  });
});

// Optional function for button hover sound
function playHoverSound() {
  const hoverSound = new Audio('hover-sound.mp3');
  hoverSound.volume = 0.3;
  hoverSound.play().catch(error => {
    // Silent catch - browsers may block autoplay
    console.log("Audio play prevented by browser policy");
  });
}

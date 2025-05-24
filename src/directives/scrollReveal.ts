import type { Directive } from 'vue'

export const vScrollReveal: Directive = {
  mounted(el, binding) {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
      ...binding.value
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateX(0)'
          observer.unobserve(el)
        }
      })
    }, options)

    // Set initial styles based on direction
    el.style.opacity = '0'
    const direction = binding.value?.direction || 'up'
    
    switch (direction) {
      case 'left':
        el.style.transform = 'translateX(-50px)'
        break
      case 'right':
        el.style.transform = 'translateX(50px)'
        break
      case 'up':
        el.style.transform = 'translateY(20px)'
        break
      case 'down':
        el.style.transform = 'translateY(-20px)'
        break
      default:
        el.style.transform = 'translateY(20px)'
    }
    
    el.style.transition = 'all 0.8s ease-out'

    observer.observe(el)
  }
} 
import { useParallax } from 'react-scroll-parallax';


function Component() {
    const parallax = useParallax<HTMLDivElement>({
      translateX: [0, 100, 'easeOutQuint'],
      translateY: [-100, 100, 'easeInQuint'],
    });
    return <div ref={parallax.ref} />;
  }
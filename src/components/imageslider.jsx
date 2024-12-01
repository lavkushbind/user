import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const images = [
    {
      src: 'https://images.ctfassets.net/ucy64xj66ql7/5tGVHhcNCTTUmiGTD1lDrJ/8a23423ef1958df2d1de79e068bf8ae9/Property_1_artist.png?w=3840&q=75&fm=webp',
      srcSet: `
        https://images.ctfassets.net/ucy64xj66ql7/5tGVHhcNCTTUmiGTD1lDrJ/8a23423ef1958df2d1de79e068bf8ae9/Property_1_artist.png?w=384&q=75&fm=webp 384w,
        https://images.ctfassets.net/ucy64xj66ql7/5tGVHhcNCTTUmiGTD1lDrJ/8a23423ef1958df2d1de79e068bf8ae9/Property_1_artist.png?w=640&q=75&fm=webp 640w,
        https://images.ctfassets.net/ucy64xj66ql7/5tGVHhcNCTTUmiGTD1lDrJ/8a23423ef1958df2d1de79e068bf8ae9/Property_1_artist.png?w=1080&q=75&fm=webp 1080w,
        https://images.ctfassets.net/ucy64xj66ql7/5tGVHhcNCTTUmiGTD1lDrJ/8a23423ef1958df2d1de79e068bf8ae9/Property_1_artist.png?w=1920&q=75&fm=webp 1920w,
        https://images.ctfassets.net/ucy64xj66ql7/5tGVHhcNCTTUmiGTD1lDrJ/8a23423ef1958df2d1de79e068bf8ae9/Property_1_artist.png?w=3840&q=75&fm=webp 3840w
      `,
      alt: 'Artist Image',
      name:'Artist'
    },
    {
      src: 'https://images.ctfassets.net/ucy64xj66ql7/5nXrU4l6LoVYHpnsUnrFtu/8cc12c3903bb4348846b6b29f0dca351/Property_1_astronaut.png?w=640&q=75&fm=webp',
      srcSet: `
        https://images.ctfassets.net/ucy64xj66ql7/5nXrU4l6LoVYHpnsUnrFtu/8cc12c3903bb4348846b6b29f0dca351/Property_1_astronaut.png?w=640&q=75&fm=webp 384w,
        https://images.ctfassets.net/ucy64xj66ql7/5nXrU4l6LoVYHpnsUnrFtu/8cc12c3903bb4348846b6b29f0dca351/Property_1_astronaut.png?w=640&q=75&fm=webp 640w,
        https://images.ctfassets.net/ucy64xj66ql7/5nXrU4l6LoVYHpnsUnrFtu/8cc12c3903bb4348846b6b29f0dca351/Property_1_astronaut.png?w=640&q=75&fm=webp 1080w,
        https://images.ctfassets.net/ucy64xj66ql7/5nXrU4l6LoVYHpnsUnrFtu/8cc12c3903bb4348846b6b29f0dca351/Property_1_astronaut.png?w=640&q=75&fm=webp 1920w,
        https://images.ctfassets.net/ucy64xj66ql7/5nXrU4l6LoVYHpnsUnrFtu/8cc12c3903bb4348846b6b29f0dca351/Property_1_astronaut.png?w=640&q=75&fm=webp 3840w
      `,
      alt: 'Astronaut Image',
      name:'Astronaut'
    },
    {
      src: 'https://images.ctfassets.net/ucy64xj66ql7/5r9F0CBPdhuVCD9DNz1b6C/b878dfe2d19608bff9330fb6bc7f9282/Property_1_graduate.png?w=640&q=75&fm=webp',
      srcSet: `
       https://images.ctfassets.net/ucy64xj66ql7/5r9F0CBPdhuVCD9DNz1b6C/b878dfe2d19608bff9330fb6bc7f9282/Property_1_graduate.png?w=640&q=75&fm=webp 384w,
       https://images.ctfassets.net/ucy64xj66ql7/5r9F0CBPdhuVCD9DNz1b6C/b878dfe2d19608bff9330fb6bc7f9282/Property_1_graduate.png?w=640&q=75&fm=webp 640w,
       https://images.ctfassets.net/ucy64xj66ql7/5r9F0CBPdhuVCD9DNz1b6C/b878dfe2d19608bff9330fb6bc7f9282/Property_1_graduate.png?w=640&q=75&fm=webp 1080w,
       https://images.ctfassets.net/ucy64xj66ql7/5r9F0CBPdhuVCD9DNz1b6C/b878dfe2d19608bff9330fb6bc7f9282/Property_1_graduate.png?w=640&q=75&fm=webp 1920w,
       https://images.ctfassets.net/ucy64xj66ql7/5r9F0CBPdhuVCD9DNz1b6C/b878dfe2d19608bff9330fb6bc7f9282/Property_1_graduate.png?w=640&q=75&fm=webp 3840w
      `,
      alt: 'Graduate Image',
      name:'Graduate'
    },
    {
      src: 'https://images.ctfassets.net/ucy64xj66ql7/6EzE0JcCLNKBP9KyppLTTM/b307415babbbfa5e473893674c6e208d/Property_1_scientist.png?w=640&q=75&fm=webp',
      srcSet: `
        https://images.ctfassets.net/ucy64xj66ql7/6EzE0JcCLNKBP9KyppLTTM/b307415babbbfa5e473893674c6e208d/Property_1_scientist.png?w=640&q=75&fm=webp 384w,
        https://images.ctfassets.net/ucy64xj66ql7/6EzE0JcCLNKBP9KyppLTTM/b307415babbbfa5e473893674c6e208d/Property_1_scientist.png?w=640&q=75&fm=webp 640w,
        https://images.ctfassets.net/ucy64xj66ql7/6EzE0JcCLNKBP9KyppLTTM/b307415babbbfa5e473893674c6e208d/Property_1_scientist.png?w=640&q=75&fm=webp 1080w,
        https://images.ctfassets.net/ucy64xj66ql7/6EzE0JcCLNKBP9KyppLTTM/b307415babbbfa5e473893674c6e208d/Property_1_scientist.png?w=640&q=75&fm=webp 1920w,
        https://images.ctfassets.net/ucy64xj66ql7/6EzE0JcCLNKBP9KyppLTTM/b307415babbbfa5e473893674c6e208d/Property_1_scientist.png?w=640&q=75&fm=webp 3840w
      `,
      alt: 'Scientist Image',
      name:'Scientist'
    },
    {
      src: 'https://images.ctfassets.net/ucy64xj66ql7/51aINvycL6dl9TEMGpxg8B/2066244982bc5f3e989a60f1526b7ed4/Property_1_chef.png?w=640&q=75&fm=webp',
      srcSet: `
        https://images.ctfassets.net/ucy64xj66ql7/51aINvycL6dl9TEMGpxg8B/2066244982bc5f3e989a60f1526b7ed4/Property_1_chef.png?w=640&q=75&fm=webp 384w,
        https://images.ctfassets.net/ucy64xj66ql7/51aINvycL6dl9TEMGpxg8B/2066244982bc5f3e989a60f1526b7ed4/Property_1_chef.png?w=640&q=75&fm=webp 640w,
        https://images.ctfassets.net/ucy64xj66ql7/51aINvycL6dl9TEMGpxg8B/2066244982bc5f3e989a60f1526b7ed4/Property_1_chef.png?w=640&q=75&fm=webp 1080w,
        https://images.ctfassets.net/ucy64xj66ql7/51aINvycL6dl9TEMGpxg8B/2066244982bc5f3e989a60f1526b7ed4/Property_1_chef.png?w=640&q=75&fm=webp 1920w,
        https://images.ctfassets.net/ucy64xj66ql7/51aINvycL6dl9TEMGpxg8B/2066244982bc5f3e989a60f1526b7ed4/Property_1_chef.png?w=640&q=75&fm=webp 3840w
      `,
      alt: 'Chef Image',
      name:'Chef'

    },
    {
      src: 'https://images.ctfassets.net/ucy64xj66ql7/1OI7FgpZ4U6gl4RyZYSkHe/307235ff69ee77c2d3c4c88e5f063052/Property_1_architect.png?w=640&q=75&fm=webp',
      srcSet: `
       https://images.ctfassets.net/ucy64xj66ql7/1OI7FgpZ4U6gl4RyZYSkHe/307235ff69ee77c2d3c4c88e5f063052/Property_1_architect.png?w=640&q=75&fm=webp 384w,
       https://images.ctfassets.net/ucy64xj66ql7/1OI7FgpZ4U6gl4RyZYSkHe/307235ff69ee77c2d3c4c88e5f063052/Property_1_architect.png?w=640&q=75&fm=webp 640w,
       https://images.ctfassets.net/ucy64xj66ql7/1OI7FgpZ4U6gl4RyZYSkHe/307235ff69ee77c2d3c4c88e5f063052/Property_1_architect.png?w=640&q=75&fm=webp 1080w,
       https://images.ctfassets.net/ucy64xj66ql7/1OI7FgpZ4U6gl4RyZYSkHe/307235ff69ee77c2d3c4c88e5f063052/Property_1_architect.png?w=640&q=75&fm=webp 1920w,
       https://images.ctfassets.net/ucy64xj66ql7/1OI7FgpZ4U6gl4RyZYSkHe/307235ff69ee77c2d3c4c88e5f063052/Property_1_architect.png?w=640&q=75&fm=webp 3840w
      `,
      alt: 'Architect Image',
      name:'Architect'
    },
    {
      src: 'https://images.ctfassets.net/ucy64xj66ql7/1UD7PLSszbteixRuMSVWzY/05af5d77f62d91ef288857f48f9b288a/Property_1_musician.png?w=640&q=75&fm=webp',
      srcSet: `
        https://images.ctfassets.net/ucy64xj66ql7/1UD7PLSszbteixRuMSVWzY/05af5d77f62d91ef288857f48f9b288a/Property_1_musician.png?w=640&q=75&fm=webp 384w,
        https://images.ctfassets.net/ucy64xj66ql7/1UD7PLSszbteixRuMSVWzY/05af5d77f62d91ef288857f48f9b288a/Property_1_musician.png?w=640&q=75&fm=webp 640w,
        https://images.ctfassets.net/ucy64xj66ql7/1UD7PLSszbteixRuMSVWzY/05af5d77f62d91ef288857f48f9b288a/Property_1_musician.png?w=640&q=75&fm=webp 1080w,
        https://images.ctfassets.net/ucy64xj66ql7/1UD7PLSszbteixRuMSVWzY/05af5d77f62d91ef288857f48f9b288a/Property_1_musician.png?w=640&q=75&fm=webp 1920w,
        https://images.ctfassets.net/ucy64xj66ql7/1UD7PLSszbteixRuMSVWzY/05af5d77f62d91ef288857f48f9b288a/Property_1_musician.png?w=640&q=75&fm=webp 3840w
      `,
      alt: 'Musician Image',
      name:'Musician'
    },
    {
      src: 'https://images.ctfassets.net/ucy64xj66ql7/6XbeKfLrmPbm4yM5gnWVPy/149db818e4a69752b6afa17bcd932cdc/Property_1_engineer.png?w=640&q=75&fm=webp',
      srcSet: `
        https://images.ctfassets.net/ucy64xj66ql7/6XbeKfLrmPbm4yM5gnWVPy/149db818e4a69752b6afa17bcd932cdc/Property_1_engineer.png?w=640&q=75&fm=webp 384w,
        https://images.ctfassets.net/ucy64xj66ql7/6XbeKfLrmPbm4yM5gnWVPy/149db818e4a69752b6afa17bcd932cdc/Property_1_engineer.png?w=640&q=75&fm=webp 640w,
        https://images.ctfassets.net/ucy64xj66ql7/6XbeKfLrmPbm4yM5gnWVPy/149db818e4a69752b6afa17bcd932cdc/Property_1_engineer.png?w=640&q=75&fm=webp 1080w,
        https://images.ctfassets.net/ucy64xj66ql7/6XbeKfLrmPbm4yM5gnWVPy/149db818e4a69752b6afa17bcd932cdc/Property_1_engineer.png?w=640&q=75&fm=webp 1920w,
        https://images.ctfassets.net/ucy64xj66ql7/6XbeKfLrmPbm4yM5gnWVPy/149db818e4a69752b6afa17bcd932cdc/Property_1_engineer.png?w=640&q=75&fm=webp 3840w
      `,
      alt: 'Engineer Image',
      name:'Engineer'
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className=''>
   <div  className= "ml-12"style={{ position: 'relative', width: '70%', height: '300px', overflow: 'hidden' }}>
      <img
        src={images[currentImageIndex].src}
        srcSet={images[currentImageIndex].srcSet}
        sizes="(max-width: 568px) 80vw, 50vw"
        alt={images[currentImageIndex].alt}
        style={{
          position: 'center',
          inset: 0,
          width: '100%',
          height: '100%',
        
          objectFit: 'cover',
        }}
      />
      
    </div>
    <h1 className='text-black text-3xl font-bold text-center mt-5 mb-7'>Expert educators and tutors for your future <span className="text-3xl text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">{images[currentImageIndex].name}.</span> </h1>
    </div>
   
    
  );
};

export default ImageSlider;

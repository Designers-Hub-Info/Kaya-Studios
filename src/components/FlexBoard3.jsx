import { useState, useEffect } from 'react'
import styles from './FlexBoard3.module.css'

function FlexBoard3() {
  const images = [
    {
      url: "https://via.placeholder.com/1200x400",
      title: "Summer Collection",
      description: "Explore our new summer styles"
    },
    {
      url: "https://via.placeholder.com/1200x400",
      title: "Fall Fashion",
      description: "Get ready for the season"
    },
    {
      url: "https://via.placeholder.com/1200x400",
      title: "Limited Edition",
      description: "Exclusive designs just for you"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className={styles.flexContainer}>
      <div className={styles.sliderContainer}>
        {images.map((image, index) => (
          <div 
            key={index}
            className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`
            }}
          >
            <img src={image.url} alt={image.title} />
            <div className={styles.textOverlay}>
              <h2>{image.title}</h2>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FlexBoard3

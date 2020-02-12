import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl';

type StarRatingProps = {
  className?: string
  currentRating: string
  numberOfStars: number
  onClick: (rating: string) => void
}

const STAR_ACTIVE_BACKGROUND_COLOR = '#f3d818'
const STAR_INACTIVE_BACKGROUND_COLOR = 'gray'

const StarRating: React.FC<StarRatingProps> = (
  {
    currentRating: currRatingProps,
    onClick,
    numberOfStars,
    className
  }
) => {
  const [currentRating, setCurrentRating] = useState(currRatingProps)
  const ratingRef = useRef(null)

  const addStarsColor = (stars: HTMLCollectionOf<Element>, ratingValue: string) => {
    Array.from(stars).forEach(star => {
      const currStar = star as HTMLElement | { style: {color: string }, dataset: { value: string }};
      currStar.style.color =
        ratingValue >= currStar?.dataset?.value
          ? STAR_ACTIVE_BACKGROUND_COLOR
          : STAR_INACTIVE_BACKGROUND_COLOR;
    });
  }
  
  const hoverHandler = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>): void => {
    const target = event.target as HTMLSpanElement
    const stars = target.parentElement.getElementsByClassName('rating__star')
    const hoverValue = target.dataset.value
    addStarsColor(stars, hoverValue || '0')
  }

  const setRating = useCallback((): void => {
    const stars = ratingRef.current.getElementsByClassName('rating__star');
    addStarsColor(stars, currentRating)
  }, [currentRating]); 

  const starClickHandler = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ): void => {
    const target = event.target as HTMLSpanElement
    const rating: string = target.dataset.value
    setCurrentRating(rating)
    if (onClick) {
      onClick(rating)
    }
  }

  useEffect(() => {
    setRating()
  }, [setRating])

  useEffect(() => {
    setCurrentRating(currRatingProps)
  }, [currRatingProps])

  useEffect(() => {
    setRating()
  }, [currentRating, setRating])

  return (
    <div className={`${className} container`}>
      <div className="rating__wrapper">
        <h2>
          <FormattedMessage id="filterByRating" />
        </h2>
        <div
          className="rating"
          ref={ratingRef}
          data-rating={currentRating}
          onMouseOut={setRating}
          onBlur={() => {}}
        >
          {[...Array(numberOfStars).keys()].map(n => {
            return (
              <span
                className="rating__star"
                key={n + 1}
                data-value={n + 1}
                onMouseOver={hoverHandler}
                onClick={starClickHandler}
                role="button"
                tabIndex={0}
                onFocus={() => {}}
              >
                &#9733;
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default styled(StarRating)`
  h2 {
    font-size: 2.3rem;
  }
  .rating {
    margin-left: 2rem;
    &__star {
      color: gray;
      cursor: pointer;
      font-size: 2.3rem;
    }

    &__wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

`;

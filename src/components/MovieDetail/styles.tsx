import styled from 'styled-components'

export default styled.div`
  padding: 3rem 10rem;
  .movie-detail {
    &__go-back {
      border-radius: 10rem;
      border: 1px solid #1c2940;
      cursor: pointer;
      font-size: 1.5rem;
      padding: 1rem 2rem;
    }
    &__header {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin-bottom: 3rem;
    }
    &__title {
      display: flex;
      flex-direction: column;
      max-width: 80%;
      h1 {
        font-size: 4rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
      }

      span {
        color: ${props => props.theme.blueLink};
        font-size: 1.6rem;
        font-weight: bold;
      }
    }
    &__genres {
      .separator {
        margin: 0 1rem;
      }
    }

    &__info-box {
      img {
        max-width: 30rem;
      }
    }

    &__vote-average {
      font-size: 2.2rem;
      color: ${props => props.theme.gray};
      width: 20rem;
      span {
        color: ${props => props.theme.blueLink};
        font-weight: bold;
      }
    }

    &__info-box {
      display: flex;
    }

    &__about-box {
      margin-left: 5rem;
      h3 {
        font-size: 2.5rem;
        font-weight: bold;
        margin: 0 0 1rem 0;
      }
      p {
        color: ${props => props.theme.paragraphColor};
        font-size: 2rem;
        line-height: 3rem;
        max-width: 80%;
      }
    }
    &__more-info {
      margin-top: 6rem;
    }
    &__actors {
      display: flex;
      flex-direction: column;
      max-height: 160px;
      overflow: hidden;
      span {
        color: ${props => props.theme.blueLink};
        font-size: 1.6rem;
        font-weight: 700;
        margin-bottom: 1rem;
      }
    }
  }
`;
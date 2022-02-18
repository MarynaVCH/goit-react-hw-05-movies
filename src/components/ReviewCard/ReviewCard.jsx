import propTypes from 'prop-types';

export default function ReviewCard({ reviews }) {
  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <p>Author: {author}</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
}

ReviewCard.propTypes = {
  reviews: propTypes.arrayOf(propTypes.object).isRequired,
};

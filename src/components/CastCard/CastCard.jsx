import propTypes from 'prop-types';

export default function CastCard({ casts }) {
  return (
    <>
      {casts.map(({ cast_id, name, character, profile_path }) => (
        <li key={cast_id}>
          <img alt="" src={`https://image.tmdb.org/t/p/w200${profile_path}`} />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </>
  );
}

CastCard.propTypes = {
  casts: propTypes.arrayOf(propTypes.object).isRequired,
};

import './ProfileCard.css';

const ProfileCard = ({ name, age, profilePicture, bio }) => {
  return (
    <div className="profileCard">
        <div className='imageDiv'>
            <img src={profilePicture} alt={`${name}`} className="profilePicture" />
        </div>
        <div className="info">
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>{bio}</p>
        </div>
    </div>
  );
};

export default ProfileCard;

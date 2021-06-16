export default function Profile ({fullName, bio, imgSrc, profession}) {
    return (
        <div>
            <h3>Your Name is : {fullName}</h3>
            <h3>Your bio is : {bio}</h3>
            <img src={imgSrc} alt='profile' />
            <h3>Your Profession is : {profession}</h3>
        </div>
    )
}
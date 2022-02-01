export const UserInfo = ({user}) => {
    const {name, age, hairColor, hobbies} = user;
    return (
        <>
         <h3>{name}</h3>
         <p>Age: {age} years</p>
         <p>{hairColor}</p>
         <ul>
             {hobbies.map((item, i) => (
                 <li key={i}>{item}</li>
             ))}
         </ul>
        </>
    )
}
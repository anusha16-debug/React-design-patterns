export const LargePersonListItem = ({person}) => {
   const {name, age, hairColor, hobbies} = person;
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
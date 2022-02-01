import { LargePersonListItem } from "./people/LargePersonListItem";
import { SmallPersonListItem } from "./people/SmallPersonListItem";
import { RegularList } from "./RegularList";
import { Modal } from "./Modal";
import SplitScreen from "./SplitScreen";

const people = [
  {
  name: 'AA',
  age: 50,
  hairColor: "Brown",
  hobbies: ['golf', 'cycling']
 },
 {
  name: 'BB',
  age: 56,
  hairColor: "Black",
  hobbies: ['tennis', 'swimming']
 },
 {
  name: 'CC',
  age: 20,
  hairColor: "Blonde",
  hobbies: ['reading', 'cycling']
 },
 {
  name: 'DD',
  age: 45,
  hairColor: "Grey",
  hobbies: ['golf', 'running']
 },

]
const LeftHandComponent = ({name}) => {
  return <h1 style={{backgroundColor: "lightblue"}}>{name}</h1>
}

const RightHandComponent = ({message}) => {
  return <h1 style={{backgroundColor: "lightcoral"}}>{message}</h1>
}

function App() {
  return (
     <div>
       <SplitScreen  leftWeight={1} rightWeight={3}>
         <LeftHandComponent name="This is sidebar"/>
         <RightHandComponent message="I am a right hand container"/>
         </SplitScreen>

         {/* <RegularList items={people} resourceName="person" itemComponent={SmallPersonListItem}/>
         <RegularList items={people} resourceName="person" itemComponent={LargePersonListItem}/> */}
         <Modal>
            <LargePersonListItem person={people[0]}/>
         </Modal>

     </div>
  );
}

export default App;

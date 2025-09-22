const Fruits = ["Apple", "Banana", "Oragne", "Kiwi", "Tomatoes"];
const Age= 19
const And= 13

const LittleThings = () => {
  return (
    <div>
     {/* MapFuntion */}
       {
        Fruits.map((Items)=>(
            <h2>{Items}</h2>
        ))
       }
       {/* Ternarey Opreator */}
        {
            Age > 18 ?  'Above':'Not Good'
        }
          {/* && opreator */}
 <br/>
          {
            And >18 && 'Pass'
          }

    </div>
  )
}

export default LittleThings
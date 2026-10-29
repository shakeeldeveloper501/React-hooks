// import Card from "./Card";

const MapTypes = () => {
  //  const arr = ["Manas", "Muskan", "Mehek"]

  //   const arr = [
  //     { id: 1, name: "Manas Kumar Lal", age: 21 },
  //     { id: 2, name: "Muskan", age: 19 },
  //     { id: 3, name: "gabbar Kumar Lal", age: 17 },
  //     { id: 4, name: "babita", age: 15 },
  //     { id: 5, name: "zokorald", age: 22 },
  //   ];

  //   const arr = [
  //     ['html', 'css', 'react', 'javascript'],
  //     ['mongodb', 'node js', 'express js', 'aws']
  //   ]

  return (
    <div>
      {/* Map with Normal array */}
      {/* {arr.map((item, i)=>(
        <div key={i}>
        {item}
        </div>
    ))} */}

      {/* Map with objects in Array */}
      {/* {arr.map((item, i)=>(
        <div key={i}>
        <p>id:{item.id}</p>
        <p>name:{item.name}</p>
        <p>age:{item.age}</p>
        </div>
    ))} */}

      {/* Map with nested Array */}
      {/* {arr.map((nestedArray, i)=>(
        <div key={i}>
        {nestedArray.map((item, j)=>(
            <p key={j}>{item}</p>
        ))}
        </div>
    ))} */}
      {/* {arr.map((nestedArray, i)=>(
        <div key={i} >
        {nestedArray.map((item, j)=>(
            <p key={j}>{item}</p>
        ))}
        </div>
    ))} */}

      {/* Map with card  */}
      {/* {arr.map((user)=>(
        <Card key={user.id} userDetails={user}/>
    ))} */}

      {/* Map with conditional card  */}
      {/* {arr.map((user)=>{
        return user.age > 18 && <Card key={user.id} userDetails={user}/>
    })} */}

      {/* Map with  conditional rendering in Card  */}
      {/* {arr.map((user) => <Card key={user.id} userDetails={user} />)} */}

      {/* Project */}
      
    </div>
  );
};

export default MapTypes;

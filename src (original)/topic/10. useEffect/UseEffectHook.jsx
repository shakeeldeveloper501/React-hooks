// import { useEffect } from "react"

const UseEffectHook = () => {
  let setCount = "Ali"
const count = 2

    /* Ya current state/data ko update nei krta */
    setCount(count + 1) 
    setCount(count + 1) 

    /* Functional update current state/data ko update krta hy */
    setCount( (currentState ) => currentState + 1)
    setCount( (previousValue ) => previousValue + 1)
    setCount( (prev ) => prev + 1)



    // useEffect()
    // useEffect(function, [dependency]) // Ya two parameter leta hy, pahla function, dosra dependency array [] 
    // useEffect(()=>{
    // console.log("useEffect hook call ho rha h") // agr hum dependency array nei dety to ya jb bhi component re-render hota hy ya call hota rahta hy 
    // })
    return (
    <div>
        use Effect hook
    </div>
  )
}

export default UseEffectHook


const InlineCSS = () => {
  
    let styleObject = {
        backgroundColor:"yellow",
        color:"red"
    }
  
    return (
    <div>
      <h1 style={{
        backgroundColor:"black",
        color:"white"
      }}>Heading</h1>

      <p style={styleObject}>This is paragraph</p>
    </div>
  ) 
}

export default InlineCSS

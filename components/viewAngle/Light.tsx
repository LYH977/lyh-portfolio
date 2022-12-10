
const Light = () => {
  return (
    <>
      <ambientLight args={ ['#ffffff', 0.15] } />
      <pointLight args={ ['#ffffff', 1, 20, 10] } position={ [-3.2, 1, 0] } />
      <pointLight args={ ['#ffffff', 1, 20, 10] } position={ [3.2, 1, 0] } />
      <pointLight args={ ['#ffffff', 3, 20, 10] } position={ [0, 1, -4] } />
    </>
  )
}

export default Light

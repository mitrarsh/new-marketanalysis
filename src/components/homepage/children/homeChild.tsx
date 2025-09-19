

type HomeChildProps={
    children?:React.ReactNode 
}


const HomeChild = ({children}:HomeChildProps) => {
  return (
    <div className='homeChild layout-section'>
        {children}
    </div>
  )
}

export default HomeChild
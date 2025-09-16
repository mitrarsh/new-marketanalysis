type ArrowLiProps={
    children: React.ReactNode
}

const ArrowLi = ({children}:ArrowLiProps) => {
  return (
    <div className="flex arrow-li">
       <img src="/assets/icons/arrow-right.svg" alt="" /> 
       <h4>{children}</h4>
    </div>
  )
}

export default ArrowLi
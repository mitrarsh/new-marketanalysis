type BtnProps={
    btnClass?: string;
    children?:React.ReactNode 
}

const Btn = ({btnClass,children}:BtnProps) => {
  return (
    <button className={`btn ${btnClass}`} >
        {children}
    </button>
  )
}

export default Btn
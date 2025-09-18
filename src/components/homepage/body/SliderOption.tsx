type SliderOptionProps={
    image: string;
    children: React.ReactNode
}

const SliderOption = ({image, children}:SliderOptionProps) => {
  return (
        <div className="flex flex-col items-center slider-option slide">
            <img src={`/assets/icons/${image}.svg`} alt="" />
            {children}
      </div>
  )
}

export default SliderOption
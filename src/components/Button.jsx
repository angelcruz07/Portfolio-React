import '../css/button.css'

const Button = ({children, ...props}) => {
  return (
    <a {...props} className='btn'>{children}</a>
  )
}

export default Button
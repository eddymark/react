import Button from './Button';
import PropTypes from 'prop-types';



const Header = ({title}) => {
    const onClick = ()=> {
        console.log('click');
    }
    return(
       <header className="header">
        <h1>{title}</h1>
        <Button color='green' text='hello' onClick={onClick}/>
        <Button text='bye' />
        {/* <Button color='red' text='bye'/> */}
        {/* <Button/> */}
       </header>

    )
}

Header.defaultProps ={
    title: 'task tracker'
}


Header.propTypes = {
    title: PropTypes.string
}

export default Header
import Button from './Button';

const Header = () => {
    return(
       <header className="header">
        <h1>first app</h1>
        <Button color='green' text='hello'/>
        {/* <Button color='red' text='bye'/> */}
        <Button/>
       </header>

    )
}

export default Header
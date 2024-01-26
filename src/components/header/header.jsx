import './header.scss';

function Header({schools}) {
    return (
        <header>
            <h1>Harry Potter</h1>
            <h2>View all characters from the Harry Potter universe</h2>

            <div className='inputs'>
                <form action="">
                    <div className='name'>
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name'/>
                    </div>
                    
                    <div className='school'>
                        <label htmlFor="school">School</label>
                        <select name="" id="school">
                            <option value="">Choose one</option>
                            {schools.map((school)=>{
                                return <option value="">{school.name}</option>
                            })}
                        </select>
                    </div>
                </form>
            </div>
        </header>
    );
}

export default Header;
import { useEffect, useState } from 'react'
import './styles.css'


export default function GithubProfileFinder() {
    
    const [userName, setUserName] = useState('robertcheeseman');

    async function fetchGithubUserData() {
        const response = await fetch(`https://api.github.com/users/${userName}`);

        const data = response.json();

        console.log(data);
    }

    function handleSubmit() {

    }

    useEffect(()=> {
        fetchGithubUserData()
    }, [])


    return (
        <div className='github-profile-container'>
            <div className='input-wrapper'>
                <input 
                type="text" 
                name='search-by-username' 
                placeholder='Search Github User Name...' 
                value={userName}
                onChange={(event) => setUserName(event.target.value)}/>
                <button onClick={handleSubmit}>
                    Search
                </button>
            </div>
        </div>
    )
}
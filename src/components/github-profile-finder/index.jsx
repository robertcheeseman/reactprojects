import { useEffect, useState } from 'react'
import './styles.css'


export default function GithubProfileFinder() {
    
    const [userName, setUserName] = useState('robertcheeseman');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchGithubUserData() {
        setLoading(true)
        const response = await fetch(`https://api.github.com/users/${userName}`);

        const data = response.json();
        if(data) {
            setUserData(data)
            setLoading(false)
        }

        console.log(data);
    }

    function handleSubmit() {

    }

    useEffect(()=> {
        fetchGithubUserData()
    }, []);

    if(loading) {
        return <h1>Loading Data! Please wait!</h1>
    }


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
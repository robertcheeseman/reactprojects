import { useState } from 'react'
import './styles.css'


export default function GithubProfileFinder() {
    
    const [userName, setUserName] = useState('robertcheeseman')

    function handleSubmit() {

    }


    return (
        <div className='github-profile-container'>
            <div className='input-wrapper'>
                <input type="text" name='search-by-username' placeholder='Search Github User Name...' value={userName}/>
                <button onClick={handleSubmit}>
                    Search
                </button>
            </div>
        </div>
    )
}
import './styles.css'


export default function GithubProfileFinder() {
    return (
        <div className='github-profile-container'>
            <div className='input-wrapper'>
                <input type="text" name='search-by-username' placeholder='Search Github User Name...'/>
                <button>
                    Search
                </button>
            </div>
        </div>
    )
}
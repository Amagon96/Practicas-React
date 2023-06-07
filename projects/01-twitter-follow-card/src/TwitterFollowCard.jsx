import { useState } from "react"

export const TwitterFollowCard = ({ children, userName='default user', initialIsFollowing }) => {
    const [ isFollowing, setIsFollowing ] = useState(initialIsFollowing);
    const text = isFollowing ? 'Siguiendo' : 'Seguir'

    // useState return an array of 2 items ['value', 'setter function']
    // const state = useState(false);
    // const isFollowing = useState[0];
    // const setIsFollowing = useState[1]

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button';

    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' 
                     alt="dev avatar" 
                     src={`https://unavatar.io/${userName}`} />
                <div className='tw-followCard-info'>
                    <strong >{children}</strong>
                    <span className='tw-followCard-infoUserName'>{`@${userName}`}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}

import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';


const fetchRepo = async (name: any) => {
    const res = await fetch(`https://api.github.com/repos/vikash-sde/${name}`)
    const repo = await res.json();
    return repo;

}
const Repo = async ({ name }: any) => {
    const repo = await fetchRepo(name)

    return (
        <>
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
            <div className='card-stats'>
                <div className='card-stat'>
                    <FaStar />
                    <span>{repo.stargazers_count}</span>
                </div>
                <div className='card-stat'>
                    <FaCodeBranch />
                    <span>{repo.forks_count}</span>
                </div>
                <div className='card-stat'>
                    <FaEye />
                    <span>{repo.watchers_count}</span>
                </div>
            </div>
        </>
    )
}

export default Repo
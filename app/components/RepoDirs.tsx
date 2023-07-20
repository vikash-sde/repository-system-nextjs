import Link from 'next/link';
import React from 'react'


const fetchRepoContent = async (name: any) => {

    await new Promise((resolve) => setTimeout(resolve, 3000))
    const res = await fetch(`https://api.github.com/repos/vikash-sde/${name}/contents`)
    const repo = await res.json();
    return repo;

}

const RepoDirs = async ({ name }: any) => {

    const contents: any = await fetchRepoContent(name)

    const dirs = contents?.filter((content: { type: string; }) => content.type === "dir")
    return (
        <>
            <h3>Directories</h3>
            <ul>
                {dirs.map((dir: any) => (
                    <li key={dir.path}>
                        <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default RepoDirs
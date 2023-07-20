import Repo from '@/app/components/Repo'
import RepoDirs from '@/app/components/RepoDirs'
import Link from 'next/link'
import React from 'react'
import { Suspense } from 'react'

const RepoPage = ({ params }: any) => {

    const { name } = params
    return (
        <div className='card'>
            <Link href='/code/repos' className='btn btn-back'>
                Back To Repositories
            </Link>

            <Suspense fallback={<div> Loading repo...</div>}>
                <Repo name={name} />
            </Suspense>
            <Suspense fallback={<div> Loading directories...</div>}>
                <RepoDirs name={name} />
            </Suspense>

        </div>
    )
}

export default RepoPage
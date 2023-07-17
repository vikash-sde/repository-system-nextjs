import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="logo">
                        <Link href="/">Vikash Gupta</Link>
                    </div>

                    <div className="links">
                        <Link href="/about">About</Link>
                        <Link href="/about/team">Out Team</Link>
                        <Link href="/code/repos">Code</Link>

                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
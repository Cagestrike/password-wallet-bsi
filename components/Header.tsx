import Link from 'next/link'
import useUser from 'lib/useUser'
import {useRouter} from 'next/router'
import Image from 'next/image'
import fetchJson from 'lib/fetchJson'

export default function Header() {
    const {user, mutateUser} = useUser()
    const router = useRouter()

    return (
        <div className="slds-context-bar">
            <div className="slds-context-bar__primary">
                <div
                    className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover">
                    <div className="slds-context-bar__icon-action">
                        <button className="slds-button slds-icon-waffle_container slds-context-bar__button"
                                title="Description of the icon when needed">
          <span className="slds-icon-waffle">
            <span className="slds-r1"/>
            <span className="slds-r2"/>
            <span className="slds-r3"/>
            <span className="slds-r4"/>
            <span className="slds-r5"/>
            <span className="slds-r6"/>
            <span className="slds-r7"/>
            <span className="slds-r8"/>
            <span className="slds-r9"/>
          </span>
                            <span className="slds-assistive-text">Open App Launcher</span>
                        </button>
                    </div>
                    <span className="slds-context-bar__label-action slds-context-bar__app-name">
                        <span className="slds-truncate" title="App Name">Password wallet</span>
                    </span>
                </div>
            </div>
            <nav className="slds-context-bar__secondary slds-grid_align-end" role="navigation">
                <ul className="slds-grid">
                    <li className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click">
                        <Link href="/">
                            <a className="slds-context-bar__label-action" title="Menu Item">
                                <span className="slds-truncate" title="Home">Home</span>
                            </a>
                        </Link>
                    </li>
                    {user?.isLoggedIn === false && (
                        <>
                            <li className="slds-context-bar__item">
                                <Link href="/login">
                                    <a className="slds-context-bar__label-action" title="Menu Item">
                                        <span className="slds-truncate" title="Menu Item">Login</span>
                                    </a>
                                </Link>
                            </li>
                            <li className="slds-context-bar__item">
                                <Link href="/register">
                                    <a className="slds-context-bar__label-action">
                                        <span className="slds-truncate">Register</span>
                                    </a>
                                </Link>
                            </li>
                        </>
                    )}
                    {user?.isLoggedIn === true && (
                        <>
                            <li className="slds-context-bar__item">
                                <Link href="/profile-sg">
                                    <a className="slds-context-bar__label-action">
                                        <span className="slds-truncate">Profile</span>
                                    </a>
                                </Link>
                            </li>
                            <li className="slds-context-bar__item">
                                <Link href="/your-passwords">
                                    <a className="slds-context-bar__label-action">
                                        <span className="slds-truncate">Your passwords</span>
                                    </a>
                                </Link>
                            </li>
                            <li className="slds-context-bar__item">
                                <a className="slds-context-bar__label-action" href="/api/logout"
                                   onClick={async (e) => {
                                       e.preventDefault()
                                       mutateUser(
                                           await fetchJson('/api/logout', {method: 'POST'}),
                                           false
                                       )
                                       router.push('/login')
                                   }}
                                >
                                    <span className="slds-truncate">Logout</span>
                                </a>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    )
}

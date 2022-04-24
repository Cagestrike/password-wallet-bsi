import React from 'react'
import Layout from 'components/Layout'
import useUser from 'lib/useUser'
import {prisma} from 'lib/prisma';
import {sessionOptions} from 'lib/session'
import { withIronSessionSsr } from 'iron-session/next'
import { useRouter } from 'next/router';
import {Function_Run} from '@prisma/client'

export default function TakenActions({data} : {data: any}) {
    let {user} = useUser({
        redirectTo: '/login',
    })

    const router = useRouter()
    const refreshData = () => router.replace(router.asPath)

    return (
        <Layout>
            {user && (
                <>
                    <h2 className="slds-text-heading--medium slds-text-align--center">Taken actions</h2>
                    <div className="slds-align_absolute-center">
                        {/*{<pre>{JSON.stringify(data, null, 2)}</pre>}*/}
                    </div>
                    <table className="slds-table slds-table_cell-buffer slds-table_bordered"
                           aria-labelledby="element-with-table-label other-element-with-table-label">
                        <thead>
                        <tr className="slds-line-height_reset">
                            <th className="" scope="col">
                                <div className="slds-truncate" title="Id">Id</div>
                            </th>
                            <th className="" scope="col">
                                <div className="slds-truncate" title="Timestamp">Timestamp</div>
                            </th>
                            <th className="" scope="col">
                                <div className="slds-truncate" title="Function Id">Function Id</div>
                            </th>
                            <th className="" scope="col">
                                <div className="slds-truncate" title="Function name">Function name</div>
                            </th>
                            <th className="" scope="col">
                                <div className="slds-truncate" title="Description">Description</div>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {JSON.parse(data).map((functionRun: Function_Run) => (
                        <>
                            {/*<pre>{JSON.stringify(functionRun, null, 2)}</pre>*/}
                                <tr className="slds-hint-parent">
                                    <th scope="row">
                                        <div className="slds-truncate" title={functionRun.id.toString()}>
                                            {functionRun.id}
                                        </div>
                                    </th>
                                    <td>
                                        <div className="slds-truncate" title={functionRun.timestamp.toString()}>{functionRun.timestamp}</div>
                                    </td>
                                    <td>
                                        <div className="slds-truncate" title={functionRun.id_function.toString()}>{functionRun.id_function}</div>
                                    </td>
                                    <td>
                                        <div className="slds-truncate" title={functionRun.Function.function_name}>{functionRun.Function.function_name}</div>
                                    </td>
                                    <td>
                                        <div className="slds-truncate" title={functionRun.Function.description}>{functionRun.Function.description}</div>
                                    </td>
                                </tr>
                        </>
                    ))}
                        </tbody>
                    </table>
                </>
            )}
        </Layout>
    )
}

export const getServerSideProps = withIronSessionSsr(async function ({
                                                                         req,
                                                                         res,
                                                                     }) {
        const user = req.session.user

        if (!user || !user.isLoggedIn) {
            res.setHeader('location', '/login')
            return {
                props: {
                    data: {message: 'Session expired.'}
                },
            }
        }
        const takenActions = await prisma.function_Run.findMany({
            where: {
                id_user: user.id
            },
            orderBy: {
                timestamp: 'desc'
            },
            include: {
                Function: true
            }
        })
        return {
            props: {data: JSON.stringify(takenActions)},
        }
    },
    sessionOptions)


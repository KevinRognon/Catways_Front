"use client";

import RouteApi from "../../../components/ui/textcomponents/RouteApi";
import withAuth from "../../../components/withAuth";
import {api_routes} from "../../../constants/api_routes";



function Api() {

    return (
        <>
            <article className="grid place-items-center mt-8">
                <ul className="flex flex-col gap-4 w-fit">
                    {
                        api_routes.map(route => {
                            return <RouteApi method={route.method} route={route.route_url} key={route.id} desc={route.desc} />
                        })
                    }
                </ul>
            </article>
        </>
    )
}

export default withAuth(Api);
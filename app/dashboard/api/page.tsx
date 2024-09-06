"use client";

import withAuth from "../../../components/withAuth";



function Api() {

    return (
        <iframe 
            src={`${process.env.URL}/api`}
            style={{ width: '100%', height: '100dvh', border: 'none' }}
            title="Swagger UI"
        />
    )
}

export default withAuth(Api);
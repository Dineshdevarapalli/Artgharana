"use client";
import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

const QueryProvider = ({
    children
}) => {

    const [client] = React.useState(
        new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } })
    )

    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    );
}

export default QueryProvider
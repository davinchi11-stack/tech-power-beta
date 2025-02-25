import {QueryClient , QueryClientProvider} from "@tanstack/react-query"

const queryClient = new QueryClient()


export function QueryContainer (props: any) {
     return(
        <QueryClientProvider client={queryClient}>
            {props.children}
        </QueryClientProvider>
     )
}
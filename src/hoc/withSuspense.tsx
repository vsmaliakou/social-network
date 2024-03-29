import React, {ComponentType} from "react";

export function withSuspense <T>(Component: ComponentType<T>) {
    return (props: T) => {
        return <React.Suspense fallback={<div>Loading...</div>}>
            <Component {...props}/>
        </React.Suspense>
    }
}
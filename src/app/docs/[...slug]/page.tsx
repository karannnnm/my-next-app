


type DocProps = {
    params: {
        slug : string[]
    }
}

export default function Docs({params}:DocProps) {    
    {
        if(params.slug.length === 2){
            return <h1>viewing {params.slug[0]} and concept {params.slug[1]}</h1>
        }
        else if(params.slug.length === 1){
            return <h1>viewing {params.slug[0]} and concept null.</h1>
        }
    }
    return <h1>Docs Home page</h1> 
}



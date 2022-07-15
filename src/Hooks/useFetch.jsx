import { useEffect, useRef, useState } from "react"


export const useFetch = (url)=>{
    
    const isMonted = useRef(true)

    const [state,setState] = useState({data:null,loading:true,error:null})

    useEffect(()=>{
        return ()=>{
            isMonted.current = false
        }
    })

    useEffect(()=>{

        fetch(url)
            .then(resp => resp.json())
            .then(data=>{

                setTimeout(()=>{
                    if( isMonted.current ){
                        setState({
                            loading:false,
                            error:null,
                            data
                        })
                    }
            },4000)

            })

    },[url])

    return state
}
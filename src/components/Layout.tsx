import React, { useEffect } from 'react'
import Nav from 'components/Nav'
import styled from 'styled-components'

const Wrapper = styled.div`
height:100vh;
display: flex;
flex-direction:column;
`

const Main = styled.div`
flex-grow:1;
overflow:auto;
display:flex;
flex-direction:column;
.ant-steps {
    display:flex;
}
`

type Props = {
    scrollTop?: number
}

const Layout: React.FC<Props> = (props) => {
    // const mainRef = useRef<HTMLDivElement>(null)
    // useEffect(() =>{
    //    setTimeout(()=> {
    //     if(mainRef.current) {
    //         mainRef.current.scrollTop = props.scrollTop!
    //         console.log(mainRef.current.scrollTop)
    //     }
    //    }, 0)
    // },[props.scrollTop])
    useEffect(() => {
        const fn = () => {
            document.getElementById('layout')!.style.height = (document.body.clientHeight >= 568 ? document.body.clientHeight : 568 ) + 'px'
        }
        fn()
        window.addEventListener('resize', fn)
        return () => window.removeEventListener('resize', fn)
    }, [])
    return (
        <Wrapper id='layout'>
            <Main>
                {props.children}
            </Main>
            <Nav></Nav>
        </Wrapper>
    )
}

export default Layout

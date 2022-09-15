import styled from "styled-components";


export default function Home() {

    const StyleDiv = styled.div`
    color:red;
    background-color: #1a1a1a;
    font-size:50px;
    box-shadow: 5px 10px #888888;
    `
    const StyleP = styled.p`
    color:yellow`
    return (
        <>
            <StyleDiv>
                <h1>PWA</h1>
                <StyleP>
                    <p>color yelllow</p>

                </StyleP>

            </StyleDiv>
            <img src="logo192.png" alt="" />
        </>
    )
}

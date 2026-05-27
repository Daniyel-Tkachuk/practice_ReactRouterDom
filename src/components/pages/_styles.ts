import styled from "styled-components";

const IMAGE_SIZE = '300px';

const NavWrapper = styled.div`
    margin-left: 10px;
    font-size: 25px;
    & > a {
        text-decoration: none;
        color: #1e3786;
    }
    & > a.active {
        text-decoration: underline;
        color: #03eaff;
    }
    & > a:hover {
        color: steelblue;
    }
`

const NavImagesWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    
    & > a {
        width: ${IMAGE_SIZE};
        height: ${IMAGE_SIZE};
        cursor: pointer;
        & > img {
            width:  100%;
            height:  100%;
            object-fit: cover;
        }
    }
`

const CurrentModel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;

    & > img {
        width: 400px;
        height: 400px;
        object-fit: cover;
    }

    & > span.collection {
        font-size: 15px;
        margin-bottom: 10px;
    }
`


export const S = {
  NavWrapper,
  NavImagesWrapper,
  CurrentModel
}
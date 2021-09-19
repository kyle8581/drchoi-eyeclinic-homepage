import {React, useState} from 'react'
import styled from 'styled.components/macro'

const pageBar = styled.div`
    width:800px;
    height: 20px;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    font-size: 15px;
    color: #707070;
    font-family: NanumSquare_acEB;
`

function PageBar({totalReview,currentPage}){
    const range = (start,stop,step)=> Array.from({length:(stop-start)/step+1},(_,i)=> start + (i*step))
    const iniPageSet=(totalReview>9?range(1,10,1):range(1,totalReview,1))
    const [curPage,setcurPage] = useState(currentPage)
    const [pageSet, setpageSet] = useState(iniPageSet)
    const onClick=(clickedPage)=>{
        setcurPage(clickedPage)
    }
    const plusOne=()=>{
        setpageSet((
            totalReview>pageSet[0]+19?range(pageSet[0]+10,pageSet[0]+19,1):
            range(pageSet[0]+10,totalReview,1)
            ))
        setcurPage(pageSet)
    }
    return(
        <pageBar>
            {pageSet.map((ele)=>{
                <p>{ele}</p>
            })}
        </pageBar>
    )
    }
export default PageBar
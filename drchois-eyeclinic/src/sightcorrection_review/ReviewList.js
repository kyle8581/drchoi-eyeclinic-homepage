import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import { Link } from 'react-router-dom'
import ReviewBlock from './ReviewBlock.js'
import TopNav from '../TopNav.js'
import GreenCircleWithCheck from '../icon_components/GreenCircleWithCheck.js'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import FastForwardIcon from '@material-ui/icons/FastForward'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import FastRewindIcon from '@material-ui/icons/FastRewind'
import {
    ReviewPageContainer,
    ReviewPageWrapper,
    ReviewPage_sec1,
    ReviewPage_sec1_text,
    ReviewPage_sec1_img,
    ReviewPage,
    ListContainer,
    ReviewPage_sec2,
    PageNumberIndex,
    FilterContainer,
} from './ReviewList.components'

const loadReview = (
    setAllList,
    needToFetch,
    setNeedToFetch,
    collection,
    setOriginalList
) => {
    if (needToFetch) {
        collection.onSnapshot((s) => {
            let tmpList = []
            s.forEach((e) => {
                // tmpList.push(e.data())
                tmpList.push({ ...e.data(), id: e.id })
            })
            setAllList(tmpList)
            setOriginalList(tmpList)
        })
        setNeedToFetch(false)
    }
}
function ReviewList() {
    const db = firebase.firestore()
    const collection = db.collection('sightcorrection_comment')
    const [allList, setAllList] = useState([])
    const [pageIdx, setPageIdx] = useState(0)
    const [curPageList, setCurPageList] = useState([])
    const [needToFetch, setNeedToFetch] = useState(true)
    const [pageNumberList, setPageNumberList] = useState([])
    const [surgeryType, setSurgeryType] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')
    const [originalList, setOriginalList] = useState([])
    const [initialized, setInitialized] = useState(false)
    if (!initialized) {
        loadReview(
            setAllList,
            needToFetch,
            setNeedToFetch,
            collection,
            setOriginalList
        )
        setInitialized(true)
        console.log('initialize')
    }
    useEffect(() => {
        // console.log('all list length ' + allList.length)
        var tmppageNumList = []
        for (var i = 0; i < Math.ceil(allList.length / 5); i++) {
            tmppageNumList.push(i)
        }
        setPageNumberList(tmppageNumList)
        let tmp_curpage = allList.slice(pageIdx * 5, (pageIdx + 1) * 5)
        setCurPageList(tmp_curpage)
    }, [pageIdx, allList])
    useEffect(() => {
        let tmpAllList = []
        originalList.forEach((e) => {
            if (
                searchQuery === '' ||
                e.title.search(searchQuery) >= 0 ||
                e.name.search(searchQuery) >= 0 ||
                e.content.search(searchQuery) >= 0 ||
                e.surgeryType.search(searchQuery) >= 0
            ) {
                if (e.surgeryType === surgeryType || surgeryType === 'all') {
                    tmpAllList.push(e)
                }
            }
        })
        setAllList(tmpAllList)
    }, [searchQuery, surgeryType])
    console.log('render reveiw list')
    return (
        <>
            <ReviewPageContainer>
                <TopNav />
                <ReviewPage>
                    <ReviewPageWrapper>
                        <ReviewPage_sec1>
                            <ReviewPage_sec1_text>
                                <p>압구정최안과는</p>
                                <p>
                                    <span>안전한 수술</span>을 약속드립니다.
                                </p>
                                <h3>
                                    23년 경력의 주치의, 1:1 맞춤진료로 만족도
                                    높은 의료시스템
                                </h3>
                            </ReviewPage_sec1_text>
                            <ReviewPage_sec1_img src="surgery/Smile/smileinfo_human.png" />
                        </ReviewPage_sec1>
                        <ReviewPage_sec2>
                            <p>
                                압구정최안과
                                <span> 수술후기</span>
                            </p>
                            <div
                                className="information"
                                style={{
                                    alignItems: 'center',
                                    marginTop: '1rem',
                                    marginBottom: '0.5rem',
                                }}
                            >
                                <GreenCircleWithCheck className="green_circle_with_check" />
                                <p style={{ marginLeft: '1rem' }}>
                                    의료법 56조에 의거하여 개인인증 후 열람이
                                    가능합니다.
                                </p>
                            </div>
                        </ReviewPage_sec2>
                        <FilterContainer>
                            {/* <div>{surgeryType}</div> */}
                            <label htmlFor="surgeryType"></label>
                            <select
                                name="surgeryType"
                                onChange={(e) => {
                                    setSurgeryType(e.target.value)
                                }}
                            >
                                <option value="all">모든 수술</option>
                                <option value="라섹">라섹</option>
                                <option value="라식">라식</option>
                                <option value="스마일 라식">스마일 라식</option>
                            </select>
                            <label htmlFor="query">검색</label>
                            <input
                                type="text"
                                name="query"
                                onChange={(e) => {
                                    setSearchQuery(e.target.value)
                                }}
                            />
                        </FilterContainer>
                        <ListContainer>
                            {curPageList.map((review, index) => {
                                const reviewCount = pageIdx * 5 + index
                                if (index !== 0) {
                                    return (
                                        <div className="true">
                                            <ReviewBlock
                                                e={review}
                                                idx={index}
                                                allList={allList}
                                            />
                                        </div>
                                    )
                                } else {
                                    // 제일 처음
                                    return (
                                        <div className="false">
                                            <ReviewBlock
                                                e={review}
                                                idx={index}
                                                allList={allList}
                                            />
                                        </div>
                                    )
                                }
                            })}
                            {allList.length === 0 ? (
                                <div>검색 결과가 없습니다.</div>
                            ) : (
                                <></>
                            )}
                        </ListContainer>
                        <PageNumberIndex>
                            <FastRewindIcon 
                               onClick={(e) => {
                                if (pageIdx === 0) {
                                    alert('첫번째 페이지입니다.')
                                } else {
                                    setPageIdx(0)
                                }
                            }}
                            />
                            <ArrowLeftIcon
                                style={{
                                    transform: 'scale(1.6,1.2)',
                                    marginLeft: '1.5rem',
                                    marginRight:'1rem'
                                }}
                                onClick={(e) => {
                                    if (pageIdx === 0) {
                                        alert('첫번째 페이지입니다.')
                                    } else {
                                        setPageIdx(pageIdx - 1)
                                    }
                                }}
                            />
                            {pageNumberList.map((x, i) => (
                                <div
                                    key={x}
                                    className={
                                        'pageIndex' + ' ' + (pageIdx === i)
                                    }
                                    onClick={(x) => {
                                        setPageIdx(i)
                                    }}
                                >
                                    {i + 1}
                                </div>
                            ))}
                            <ArrowRightIcon
                                style={{
                                    transform: 'scale(1.6,1.2)',
                                    marginRight: '1.5rem',
                                    marginLeft : '1rem'
                    
                                }}
                                onClick={(e) => {
                                    if (pageIdx === pageNumberList.length - 1) {
                                        alert('마지막 페이지입니다.')
                                    } else {
                                        setPageIdx(pageIdx + 1)
                                    }
                                }}
                            />
                            <FastForwardIcon
                                onClick={(e) => {
                                    if (pageIdx === pageNumberList.length - 1) {
                                        alert('마지막 페이지입니다.')
                                    } else {
                                        setPageIdx(pageNumberList.length - 1)
                                    }
                                }}
                            />
                        </PageNumberIndex>
                        {JSON.stringify(pageNumberList)}
                        {/* {allList.length} */}
                        {/* {JSON.stringify(curPageList)} */}
                        <Link to="/create-sightcorrection-review">글쓰기</Link>
                    </ReviewPageWrapper>
                </ReviewPage>
            </ReviewPageContainer>
        </>
    )
}

export default ReviewList

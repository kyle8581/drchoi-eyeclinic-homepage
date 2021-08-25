import React, { useContext, useState, Fragment, useEffect, useRef } from 'react'
import firebase from 'firebase/app'
import { Link } from 'react-router-dom'
import ReviewBlock from './ReviewBlock.js'
import Select from 'react-select'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined'
import SearchIcon from '@material-ui/icons/Search'
import {
    FilterContainer,
    ListContainer,
} from '../sightcorrection_review/ReviewList.components'
import GreenCircleWithCheck from '../icon_components/GreenCircleWithCheck.js'
import useWindowDimensions from '../useWindowDimensions'
import TopNav from '../TopNav.js'
import {
    ReviewPageContainer,
    ReviewPageWrapper,
    ReviewPageSec1,
    ReviewPageSec1Text,
    ReviewPageSec1Img,
    ReviewPage,
    ReviewPageSec2,
    SearchContainer,
} from './ReviewListMobile.components'
import { UserContext } from '../UserContext'

function ReviewListMobile() {
    const container = document.querySelector('.container')
    const { userInfo } = useContext(UserContext)
    const [surgeryType, setSurgeryType] = useState('all')
    const [search, setSearch] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [reviews, setReviews] = useState([]) //로드한 리스트
    const [showList, setShowList] = useState(reviews) //보여줄 리스트
    // const [initialized, setInitialized] = useState(false)
    const [latestDoc, setLatestDoc] = useState(null)
    const [amount, setAmount] = useState(0)
    const [tableHeight, setTableHeight] = useState(0)
    const tableRef = useRef(null)
    const selectOptions = [
        { value: 'all', label: '전체' },
        { value: '라식', label: '라식' },
        { value: '라섹', label: '라섹' },
        { value: '스마일 라식', label: '스마일 라식' },
    ]
    const getTotalAmount = async () => {
        const db = firebase.firestore()
        const ref = db.collection('sightcorrection_comment')
        ref.where('show', '==', true).onSnapshot((s) => {
            setAmount(s.docs.length)
        })
    }
    const getNextReviews = async (doc) => {
        const db = firebase.firestore()
        const ref = db.collection('sightcorrection_comment')
        ref.limit(6)
            .orderBy('date')
            .startAfter(doc)
            .where('show', '==', true)
            .onSnapshot((s) => {
                s.forEach((doc) => {
                    reviews.push({ ...doc.data(), id: doc.id, key: doc.id })
                    setShowList(reviews)
                    setReviews(reviews)
                })
                setLatestDoc(s.docs[s.docs.length - 1])
            })
    }
    const handleScroll = (scrollTop, offsetHeight, scrollHeight) => {
        //is user at the bottom?
        console.log('scrolling')
        let triggerHeight = scrollTop + offsetHeight
        if (triggerHeight >= scrollHeight) {
            getNextReviews(latestDoc)
        }
    }
    //필터링
    useEffect(() => {
        let tmpAllList = []
        reviews.forEach((e) => {
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
        setShowList(tmpAllList)
    }, [searchQuery, surgeryType])

    // load initially
    useEffect(() => {
        getNextReviews(latestDoc)
        getTotalAmount()
        // setTableHeight(tableRef.current.clientHeight)
    }, [])
    // if (!initialized) {
    //     getNextReviews(latestDoc)
    //     getTotalAmount()
    //     setInitialized(true)
    // }
    return (
        <ReviewPageContainer>
            <TopNav />
            <ReviewPage
                onScroll={() => {
                    console.log('scrolling')
                }}
                onScroll={(container) => {
                    // console.log(4)
                    // console.log(
                    //     container.target.scrollHeight - container.target.scrollTop
                    // )
                    // console.log(container.target.clientHeight)
                    console.log(reviews)
                    console.log(amount)
                    if (reviews.length < amount) {
                        handleScroll(
                            container.target.scrollTop,
                            container.target.offsetHeight,
                            container.target.scrollHeight
                        )
                    }
                }}
            >
                <ReviewPageWrapper>
                    <ReviewPageSec1>
                        <ReviewPageSec1Text>
                            <p>압구정최안과는</p>
                            <p>
                                <span>안전한 수술</span>을 약속드립니다.
                            </p>
                            <div>
                                <h3>23년 경력의 주치의,</h3>
                                <h3>1:1 맞춤진료로 만족도 높은 의료시스템</h3>
                            </div>
                        </ReviewPageSec1Text>
                        <ReviewPageSec1Img src="surgery/Smile/smileinfo_human.png" />
                    </ReviewPageSec1>
                    <ReviewPageSec2>
                        <p>
                            압구정최안과
                            <span> 수술후기</span>
                        </p>
                        <div
                            className="information"
                            style={{
                                alignItems: 'center',
                                // marginBottom: '0.5rem',
                            }}
                        >
                            <GreenCircleWithCheck className="green_circle_with_check" />
                            <p
                                className="sec2_law"
                                // style={{ marginLeft: '1rem' }}
                            >
                                의료법 56조에 의거하여 개인인증 후 열람이
                                가능합니다.
                            </p>
                        </div>
                    </ReviewPageSec2>
                    <FilterContainer>
                        <label htmlFor="surgeryType"></label>
                        <Select
                            className="select_container"
                            onChange={(selectedOption) => {
                                setSurgeryType(selectedOption.value)
                            }}
                            style={{ fontFamily: 'NanumSquare_acR' }}
                            options={selectOptions}
                            classNamePrefix={true}
                            placeholder="전체"
                        />

                        <label className="search" htmlFor="query"></label>
                        <input
                            className="searchContent"
                            type="text"
                            name="query"
                            placeholder="  검색어를 입력하세요..."
                            onChange={(e) => {
                                setSearch(e.target.value)
                            }}
                        />
                        <SearchContainer
                            onClick={() => {
                                setSearchQuery(search)
                            }}
                        >
                            <SearchIcon className="searchIcon" />
                        </SearchContainer>
                        {userInfo.authority === 'admin' ? (
                            <Link
                                className="writeIcon"
                                style={{ width: '50px' }}
                                to="/create-sightcorrection-review"
                            >
                                <CreateOutlinedIcon
                                    style={{
                                        color: '#707070',
                                        width: '50px',
                                        marginRight: '100px',
                                    }}
                                />
                            </Link>
                        ) : (
                            <Fragment />
                        )}
                    </FilterContainer>
                    <ListContainer className="container">
                        {showList.map((review, index) => {
                            if (index !== 0) {
                                return (
                                    <div className="true">
                                        <ReviewBlock
                                            e={review}
                                            idx={index}
                                            allList={showList}
                                        />
                                    </div>
                                )
                            } else {
                                // 제일 처음
                                return (
                                    <div>
                                        <ReviewBlock
                                            e={review}
                                            idx={index}
                                            allList={showList}
                                        />
                                    </div>
                                )
                            }
                        })}
                        {showList.length === 0 ? (
                            <div>검색 결과가 없습니다.</div>
                        ) : (
                            <Fragment />
                        )}
                    </ListContainer>
                </ReviewPageWrapper>
            </ReviewPage>
        </ReviewPageContainer>
    )
}

export default ReviewListMobile

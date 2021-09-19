import React, { useContext, useState, Fragment, useEffect, useRef } from 'react'
import firebase from 'firebase/app'
import { Link, useParams } from 'react-router-dom'
import ReviewBlock from './ReviewBlock.js'
import { Placeholder, Segment } from 'semantic-ui-react'

import Select from 'react-select'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined'
import SearchIcon from '@material-ui/icons/Search'
import { FilterContainer, ListContainer } from '../review/ReviewList.components'
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

function ReviewListMobile({ reviewType, collectionId }) {
    const container = document.querySelector('.container')
    const { userInfo } = useContext(UserContext)
    const [surgeryType, setSurgeryType] = useState('all')
    const [search, setSearch] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [reviews, setReviews] = useState([]) //로드한 리스트
    const [showList, setShowList] = useState([]) //보여줄 리스트
    const [latestDoc, setLatestDoc] = useState(null)
    const [amount, setAmount] = useState(0)
    const [initializing, setInintializing] = useState(true)
    const { width, height } = useWindowDimensions()
    // load initially
    const getTotalAmount = async () => {
        const db = firebase.firestore()
        const ref = db.collection(collectionId)
        ref.where('show', '==', true).onSnapshot((s) => {
            setAmount(s.docs.length)
        })
    }
    const getNextReviews = async (doc) => {
        if (userInfo.login) {
            console.log('latestDoc: ' + JSON.stringify(latestDoc))
            if (initializing) {
                setShowList([])
                setReviews([])
                setInintializing(false)
            }
            const db = firebase.firestore()
            const ref = db.collection(collectionId)
            let cur = doc
            if (doc === undefined) {
                cur = null
            }

            ref.limit(6)
                .orderBy('date')
                .startAfter(cur)
                .where('show', '==', true)
                .onSnapshot((s) => {
                    s.forEach((d) => {
                        console.log(d.data().title)
                        console.log('index: ' + reviews.length)
                        console.log('what:' + s.docs[reviews.length])
                        reviews.push({
                            ...d.data(),
                            id: d.id,
                            key: d.id,
                            curDoc: s.docs[reviews.length],
                        })
                        setShowList(reviews)
                        setReviews(reviews)
                    })
                    setLatestDoc(s.docs[s.docs.length - 1])
                })
        }
    }
    const handleScroll = (scrollTop, offsetHeight, scrollHeight) => {
        //is user at the bottom?
        let triggerHeight = scrollTop + offsetHeight

        if (triggerHeight >= scrollHeight * (width / 750)) {
            getNextReviews(latestDoc)
        }
    }
    useEffect(() => {
        // alert('reviewType changed')
        setSurgeryType('all')
        setSearch('')
        setSearchQuery('')
        setReviews([])
        setShowList([])
        setLatestDoc(null)
        setAmount(0)
        setInintializing(true)
    }, [reviewType])
    useEffect(() => {
        if (initializing) {
            getNextReviews(null)
            getTotalAmount()
        }
    }, [initializing])
    useEffect(() => {}, [showList])

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
    }, [searchQuery, surgeryType, reviews])

    const allSelectOptions = {
        'sight-correction': [
            { value: 'all', label: '전체' },
            { value: '비쥬라식', label: '비쥬라식' },
            { value: '무통라섹', label: '무통라섹' },
        ],
        presbyopia: [
            { value: 'all', label: '전체' },
            { value: '노안', label: '노안' },
            { value: '백내장', label: '백내장' },
        ],
    }
    const selectOptions = allSelectOptions[reviewType]
    const scaleFactor = () => {
        if (width > 750) {
            return {}
        } else {
            return {
                transform: 'scale(' + width / 750 + ')',
                transformOrigin: 'top left',
                // marginBottom: reviewHeight - 1355 + 'px',
            }
        }
    }
    return (
        <ReviewPageContainer
            onScroll={(container) => {
                if (reviews.length < amount) {
                    handleScroll(
                        container.target.scrollTop,
                        container.target.offsetHeight,
                        container.target.scrollHeight
                    )
                }
            }}
        >
            <TopNav />
            <ReviewPage style={scaleFactor()}>
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
                        <ReviewPageSec1Img src="/surgery/Smile/smileinfo_human.png" />
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
                                to={'/review-create/' + reviewType}
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
                                    <div className="true" key={index}>
                                        <ReviewBlock
                                            e={review}
                                            idx={index}
                                            allList={showList}
                                            reviewType={reviewType}
                                            collectionId={collectionId}
                                        />
                                    </div>
                                )
                            } else {
                                // 제일 처음
                                return (
                                    <div key={index}>
                                        <ReviewBlock
                                            e={review}
                                            idx={index}
                                            allList={showList}
                                            reviewType={reviewType}
                                            collectionId={collectionId}
                                        />
                                    </div>
                                )
                            }
                        })}
                        {showList.length === 0 ? (
                            <Fragment>
                                <Segment>
                                    <Placeholder>
                                        <Placeholder.Header image>
                                            <Placeholder.Line />
                                            <Placeholder.Line />
                                        </Placeholder.Header>
                                    </Placeholder>
                                </Segment>
                                <Segment>
                                    <Placeholder>
                                        <Placeholder.Header image>
                                            <Placeholder.Line />
                                            <Placeholder.Line />
                                        </Placeholder.Header>
                                    </Placeholder>
                                </Segment>
                                <Segment>
                                    <Placeholder>
                                        <Placeholder.Header image>
                                            <Placeholder.Line />
                                            <Placeholder.Line />
                                        </Placeholder.Header>
                                    </Placeholder>
                                </Segment>
                            </Fragment>
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

import React, { useEffect, useState } from 'react';
import * as S from './Scrap.Styled';
import TeamBox from '../TeamBox/TeamBox';
import TopButton from '../HomePage/TopButton';
import Pagination from '../../components/Pagination/Pagination';
import { getMyRecruiting } from '../../service/profile_service';
//임시로 recruit 페이지와 동일하게

const Scrap = () => {
    const [limit, setLimit] = useState(6);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    const [data, setData] = useState([]);
    const [postContent4, setPostContent4] = useState([]);
    const [totalPage, setTotalPage] = useState();

    useEffect(() => {
        setPage(1);
        getMyRecruiting().then(response => {
            setPostContent4(response?.data);
            console.log(response?.data);
        });
    }, []);

    return (
        <div>
            <TopButton />
            <S.TopBox>
                <S.Spacer />
                <S.Title>내가 스크랩한 공고</S.Title>
            </S.TopBox>
            <S.BoxDetail>
                {postContent4?.map((postContent4, index) => (
                    <TeamBox
                        key={index}
                        showMoreDetail={true}
                        showWaitingJoin={false}
                        showSubBox={true}
                        borderColor={
                            postContent4.postType === true
                                ? 'rgba(0, 163, 255, 0.5)'
                                : 'rgba(231, 137, 255, 0.5)'
                        }
                        postContent={postContent4}
                        isMyParticipation={false}
                        postId={postContent4?.postId}
                    />
                ))}
                <Pagination
                    total={totalPage}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                />
            </S.BoxDetail>
        </div>
    );
};

export default Scrap;

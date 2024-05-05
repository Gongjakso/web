import React, { useEffect, useState } from 'react';
import * as S from './AppliedTeamStyled';
import TeamBox from '../TeamBox/TeamBox';
import TopButton from '../../pages/HomePage/TopButton';
import Pagination from '../../components/Pagination/Pagination';
import { getMyApplied } from '../../service/profile_service';

const TeamSupport = () => {
    const [limit, setLimit] = useState(6);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    const [data, setData] = useState([]);
    const [postContent2, setPostContent2] = useState([]);
    const [totalPage, setTotalPage] = useState();

    useEffect(() => {
        getMyApplied().then(response => {
            console.log(response.data.reverse());
            setPostContent2(response?.data);
        });
    }, []);

    const loadParticipatedPosts = page => {
        getMyApplied(page).then(response => {
            setPostContent2(response?.data);
        });
    };

    return (
        <div>
            <TopButton />
            <S.TopBox>
                <S.Spacer />
                <S.Title>내가 지원한 팀</S.Title>
            </S.TopBox>
            <S.BoxDetail>
                {postContent2?.map((postContent2, index) => (
                    <TeamBox
                        key={index}
                        showMoreDetail={false}
                        showWaitingJoin={true}
                        showSubBox={true}
                        borderColor={
                            postContent2.postType === true
                                ? 'rgba(231, 137, 255, 0.5)'
                                : 'rgba(0, 163, 255, 0.5)'
                        }
                        postContent={postContent2}
                        isMyParticipation={false}
                    />
                ))}
                <Pagination
                    total={totalPage}
                    page={page}
                    setPage={setPage}
                    loadPosts={loadParticipatedPosts}
                />
            </S.BoxDetail>
        </div>
    );
};

export default TeamSupport;

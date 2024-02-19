import React, { useEffect, useState } from 'react';
import * as S from './ParticipatedTeamStyled';
import TeamBox from '../TeamBox/TeamBox';
import Pagination from '../../components/Pagination/Pagination';
import { getMyParticipated } from '../../service/profile_service';

const TeamPart = () => {
    const [limit, setLimit] = useState(6);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    const [data, setData] = useState([]);

    const [postContent3, setPostContent3] = useState([]);
    const [totalPage, setTotalPage] = useState();

    useEffect(() => {
        getMyParticipated().then(response => {
            console.log(response.data);
            setPostContent3(response?.data);
        });
    }, []);

    return (
        <div>
            <S.TopBox>
                <S.Spacer />
                <S.Title>내가 참여한 공모전/프로젝트</S.Title>
            </S.TopBox>
            <S.BoxDetail>
                {postContent3?.participationLists?.map(
                    (postContent3, index) => (
                        <TeamBox
                            key={index}
                            showMoreDetail={false}
                            borderColor={
                                postContent3.postType === true
                                    ? 'rgba(0, 163, 255, 0.5)'
                                    : 'rgba(231, 137, 255, 0.5)'
                            }
                            showWaitingJoin={false}
                            showSubBox={false}
                            postContent={postContent3}
                            isMyParticipation={true}
                        />
                    ),
                )}

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

export default TeamPart;

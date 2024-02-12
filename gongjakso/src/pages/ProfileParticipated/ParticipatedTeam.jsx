import React, { useEffect, useState } from 'react';
import * as S from './ParticipatedTeamStyled';
import TeamBox from '../TeamBox/TeamBox';
import Pagination from '../../components/Pagination/Pagination';

const TeamPart = () => {
    const [limit, setLimit] = useState(6);
    const [page, setPage] = useState(1);

    const offset = (page - 1) * limit;
    return (
        <div>
            <S.TopBox>
                <S.Spacer />
                <S.Title>내가 참여한 공모전/프로젝트</S.Title>
            </S.TopBox>
            <S.BoxDetail>
                <TeamBox
                    showMoreDetail={false}
                    borderColor="#6F6F6F"
                    showWaitingJoin={false}
                    showSubBox={false}
                />
                <TeamBox
                    showMoreDetail={false}
                    borderColor="#6F6F6F"
                    showWaitingJoin={false}
                    showSubBox={false}
                />
                <Pagination
                    total={13}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                />
            </S.BoxDetail>
        </div>
    );
};

export default TeamPart;

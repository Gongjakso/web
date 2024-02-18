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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getMyParticipated();
                setData(response?.data);
                setPostContent3(response?.data);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

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
                    postContent={postContent3}
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

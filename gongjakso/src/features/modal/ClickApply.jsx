import * as S from './ApplyModal.styled';
import Close from '../../assets/images/Close.svg';
import { useEffect, useState } from 'react';
import {
    getApplication,
    patchNotRecruit,
    patchRecruit,
} from '../../service/apply_service';

const ClickApply = props => {
    const [applyData, setapplyData] = useState([]);
    const [refresh, setRefresh] = useState(1);

    const handleRefresh = () => {
        setRefresh(refresh * -1);
    };

    // 스크롤 방지
    useEffect(() => {
        document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
    }, []);

    useEffect(() => {
        getApplication(props.id, props.idNum).then(res => {
            setapplyData(res?.data);
            console.log(res?.data);
        });
    }, [refresh, handleRefresh]);

    const ClickRecruitBtn = () => {
        patchRecruit(props.idNum).then(res => {
            handleRefresh();
        });
        alert('지원자가 합류되었습니다.');
        props.setShowApply(false);
    };

    const ClickNotRecruitBtn = () => {
        patchNotRecruit(props.idNum).then(res => {
            handleRefresh();
        });
    };

    return (
        <div>
            <S.Background>
                <S.Modal w="55%" h="90%" bc={({ theme }) => theme.box1}>
                    <S.Backbtn
                        onClick={() => {
                            props.setShowApply(false);
                            handleRefresh();
                        }}
                    >
                        <img src={Close} alt="close-btn" />
                    </S.Backbtn>

                    <S.MainTitle>
                        <p>{props.idName}</p>

                        {/* 여기 전공 api 들어가야 함!! */}
                        <S.Major>컴퓨터공학과</S.Major>
                        <S.Major>010-0000-0000</S.Major>
                    </S.MainTitle>
                    <S.DetailBox>
                        <S.SubTitle>지원 분야</S.SubTitle>
                        <S.FormBox>
                            {props.recruitPart.map((item, i) => (
                                <S.RoundForm
                                    isSelected={item === applyData.recruit_part}
                                    style={{ cursor: 'default' }}
                                >
                                    {item === 'PLAN' && '기획'}
                                    {item === 'DESIGN' && '디자인'}
                                    {item === 'FE' && '프론트엔드'}
                                    {item === 'BE' && '백엔드'}
                                    {item === 'ETC' && '기타'}
                                    {item === 'LATER' && '추후조정'}
                                </S.RoundForm>
                            ))}
                        </S.FormBox>
                    </S.DetailBox>

                    {/* 프로젝트의 경우 */}
                    {props.type === true && (
                        <S.DetailBox>
                            <S.SubTitle>기술 스택</S.SubTitle>
                            <S.FormBox>
                                {props.recruitRole.map((item, i) => (
                                    <S.RoundForm
                                        isSelected={
                                            item === applyData.recruit_role
                                        }
                                        style={{ cursor: 'default' }}
                                    >
                                        {item === 'REACT' && 'React'}
                                        {item === 'TYPESCRIPT' && 'TypeScript'}
                                        {item === 'JAVASCRIPT' && 'JavaScript'}
                                        {item === 'NEXTJS' && 'Next.js'}
                                        {item === 'NODEJS' && 'Node.js'}
                                        {item === 'JAVA' && 'Java'}
                                        {item === 'SPRING' && 'Spring'}
                                        {item === 'KOTLIN' && 'Kotlin'}
                                        {item === 'FLUTTER' && 'Flutter'}
                                        {item === 'ETC' && 'etc'}
                                    </S.RoundForm>
                                ))}
                            </S.FormBox>
                        </S.DetailBox>
                    )}

                    <S.DetailBox2>
                        <S.SubTitle>지원 이유</S.SubTitle>
                        <S.TextBox>
                            <S.Content>{applyData?.application}</S.Content>
                        </S.TextBox>
                    </S.DetailBox2>

                    <S.ProfileApplyBox>
                        <S.ProfileApplyBtn
                            bg={({ theme }) => theme.LightGrey}
                            onClick={() => {
                                props.setShowApply(false);
                                ClickNotRecruitBtn();
                            }}
                        >
                            미선발
                        </S.ProfileApplyBtn>
                        <S.ProfileApplyBtn
                            bg={({ theme }) => theme.box1}
                            onClick={() => {
                                ClickRecruitBtn();
                            }}
                        >
                            합류하기
                        </S.ProfileApplyBtn>
                    </S.ProfileApplyBox>
                </S.Modal>
            </S.Background>
        </div>
    );
};

export default ClickApply;

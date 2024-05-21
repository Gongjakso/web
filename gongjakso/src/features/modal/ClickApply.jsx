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
    const [part, setPart] = useState([]);
    const [stack, setStack] = useState([]);
    const [decision, setDecision] = useState('');

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
            setPart(res?.data.category);
            setStack(res?.data.postStack);
            setDecision(res?.data.applyType);
            // console.log(res?.data);
        });
    }, [props.id, props.idNum]);

    const ClickRecruitBtn = () => {
        patchRecruit(props.idNum).then(res => {
            // console.log(res?.data);
        });
        alert('지원자가 합류되었습니다.');
    };

    const ClickNotRecruitBtn = () => {
        patchNotRecruit(props.idNum).then(res => {
            // console.log(res?.data);
        });
        alert('지원자를 미선발하였습니다.');
    };

    return (
        <div>
            <S.Background>
                <S.Modal $w="1000px" $h="850px" $bc={({ theme }) => theme.box1}>
                    <S.Decisionbtn>
                        {decision === 'PASS' ? (
                            <S.StateBtn $bg={({ theme }) => theme.box1}>
                                합류 완료
                            </S.StateBtn>
                        ) : decision === 'NOT_PASS' ? (
                            <S.StateBtn $bg={({ theme }) => theme.LightGrey}>
                                미선발
                            </S.StateBtn>
                        ) : null}
                    </S.Decisionbtn>
                    <S.Backbtn
                        onClick={() => {
                            props.setShowApply(false);
                            // handleRefresh();
                        }}
                    >
                        <img src={Close} alt="close-btn" />
                    </S.Backbtn>

                    <S.MainTitle>
                        <S.NameP>{applyData?.memberName}</S.NameP>
                        <S.Major>{applyData?.major}</S.Major>
                        <S.Major>{applyData?.phone}</S.Major>
                    </S.MainTitle>
                    <S.DetailBox>
                        <S.SubTitle>지원 분야</S.SubTitle>
                        <S.FormBox>
                            {part.map((item, i) => (
                                <S.RoundForm
                                    key={i}
                                    $isselected={
                                        item === applyData?.recruitPart
                                    }
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
                                {stack.map((item, i) => (
                                    <S.RoundForm
                                        $isselected={applyData?.applyStack.includes(
                                            item,
                                        )}
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
                                        {item === 'SWIFT' && 'Swift'}
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
                            {props.type ? (
                                decision === 'NONE' ||
                                decision === 'OPEN_APPLY' ? (
                                    <S.Content $h="180px">
                                        {applyData?.application}
                                    </S.Content>
                                ) : (
                                    <S.Content $h="230px">
                                        {applyData?.application}
                                    </S.Content>
                                )
                            ) : (
                                <S.Content $h="340px">
                                    {applyData?.application}
                                </S.Content>
                            )}
                        </S.TextBox>
                    </S.DetailBox2>

                    {decision === 'NONE' || decision === 'OPEN_APPLY' ? (
                        <S.ProfileApplyBox>
                            <S.ProfileApplyBtn
                                $bg={({ theme }) => theme.LightGrey}
                                onClick={() => {
                                    ClickNotRecruitBtn();
                                }}
                            >
                                미선발
                            </S.ProfileApplyBtn>
                            <S.ProfileApplyBtn
                                $bg={({ theme }) => theme.box1}
                                onClick={() => {
                                    ClickRecruitBtn();
                                }}
                            >
                                합류하기
                            </S.ProfileApplyBtn>
                        </S.ProfileApplyBox>
                    ) : null}
                </S.Modal>
            </S.Background>
        </div>
    );
};

export default ClickApply;

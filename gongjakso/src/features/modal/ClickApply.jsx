import * as S from './ApplyModal.styled';
import Close from '../../assets/images/Close.svg';
import { useEffect, useState } from 'react';
import {
    getApplication,
    patchNotRecruit,
    patchRecruit,
} from '../../service/apply_service';
import { useDispatch } from 'react-redux';
import { openAlertModal } from './modalSlice/alertModalSlice';
import AlertModal from '../../components/common/AlertModal/AlertModal';

const ClickApply = props => {
    const [applyData, setapplyData] = useState([]);
    const [part, setPart] = useState([]);
    const [stack, setStack] = useState([]);
    const [decision, setDecision] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달이 열려있는지 여부를 추적

    const dispatch = useDispatch();

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
        });
    }, [props.id, props.idNum]);

    const ClickRecruitBtn = () => {
        patchRecruit(props.idNum).then(res => {
            if (res?.response.data.code === 4007) {
                dispatch(
                    openAlertModal({
                        titleContent: `${applyData?.memberName}님 합류 실패`,
                        modalContent: `${res?.response.data.message}`,
                        onConfirm: () => {
                            props.setShowApply(false); // 확인 버튼을 클릭하면 setShowApply 함수 호출하여 모달을 닫음
                        },
                    }),
                );
            } else {
                dispatch(
                    openAlertModal({
                        titleContent: `${applyData?.memberName}님 합류 성공`,
                        modalContent: `${res?.response.data.message}`,
                        onConfirm: () => {
                            props.setShowApply(false); // 확인 버튼을 클릭하면 setShowApply 함수 호출하여 모달을 닫음
                        },
                    }),
                );
            }
        });
    };

    const ClickNotRecruitBtn = () => {
        patchNotRecruit(props.idNum);
        dispatch(
            openAlertModal({
                titleContent: `${applyData?.memberName}님을 미선발`,
                modalContent: `미선발 하였습니다.`,
                onConfirm: () => {
                    props.setShowApply(false); // 확인 버튼을 클릭하면 setShowApply 함수 호출하여 모달을 닫음
                },
            }),
        );
        // props.setShowApply(false); // 모달을 닫도록 상태를 변경
    };

    return (
        <div>
            <S.Background>
                <S.Modal $w="1000px" $h="700px" $bc={({ theme }) => theme.box1}>
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
                                        key={i}
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
                                    <S.Content $h="90px">
                                        {applyData?.application}
                                    </S.Content>
                                ) : (
                                    <S.Content $h="180px">
                                        {applyData?.application}
                                    </S.Content>
                                )
                            ) : (
                                <S.Content $h="300px">
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
            <AlertModal />
        </div>
    );
};

export default ClickApply;

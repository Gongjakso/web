import * as S from './ApplyModal.styled';
import Close from '../../assets/images/Close.svg';
import { Data, Fields } from '../../pages/ProfileRecruit/UserData';

const ClickApply = props => {
    return (
        <div>
            <S.Background>
                <S.Modal w="53%" h="80%" bc={({ theme }) => theme.box1}>
                    <S.Backbtn
                        onClick={() => {
                            props.setShowApply(false);
                        }}
                    >
                        <img src={Close} alt="close-btn" />
                    </S.Backbtn>

                    <S.MainTitle>{Data[props.item].name}</S.MainTitle>
                    <S.DetailBox>
                        <S.SubTitle>지원 분야</S.SubTitle>
                        <S.FormBox>
                            {Fields.map((item, i) => (
                                <S.RoundForm
                                    isSelected={item === Data[props.item].type}
                                    style={{ cursor: 'default' }}
                                >
                                    {item}
                                </S.RoundForm>
                            ))}
                        </S.FormBox>
                    </S.DetailBox>

                    <S.DetailBox2>
                        <S.SubTitle>지원 이유</S.SubTitle>
                        <S.TextBox>
                            <S.Content>{Data[props.item].content}</S.Content>
                        </S.TextBox>
                    </S.DetailBox2>

                    <S.ProfileApplyBox>
                        <S.ProfileApplyBtn
                            bg={({ theme }) => theme.LightGrey}
                            onClick={() => {
                                props.setShowApply(false);
                                props.setOpen(false);
                                props.setRefuse(true);
                            }}
                        >
                            미선발
                        </S.ProfileApplyBtn>
                        <S.ProfileApplyBtn
                            bg={({ theme }) => theme.box1}
                            onClick={() => {
                                props.setShowApply(false);
                                props.setOpen(false);
                                props.setPick(true);
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

import * as S from './ApplyModal.styled';
import Close from '../../assets/images/Close.svg';
import { useEffect, useState } from 'react';
import { getMyApplication } from '../../service/apply_service';

const ClickmyApply = props => {
    const [myApp, setmyApp] = useState([]);
    const [category, setCategory] = useState([]);
    const [stackCategory, setstackCategory] = useState([]);

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
        getMyApplication(props.id).then(res => {
            setmyApp(res?.data);
            setCategory(res?.data.category);
            setstackCategory(res?.data.postStack);
            // console.log(res?.data);
        });
    }, [props.id]);

    return (
        <div>
            <S.Background>
                <S.Modal $w="1000px" $h="700px" $bc={({ theme }) => theme.box1}>
                    <S.Backbtn
                        onClick={() => {
                            props.setOpen(false);
                        }}
                    >
                        <img src={Close} alt="close-btn" />
                    </S.Backbtn>

                    <S.MainTitle>
                        <p>{myApp?.memberName}</p>
                        <S.Major>{myApp?.major}</S.Major>
                    </S.MainTitle>
                    <S.DetailBox>
                        <S.SubTitle>지원 분야</S.SubTitle>
                        <S.FormBox>
                            {category.map((item, i) => (
                                <S.RoundForm
                                    key={i}
                                    $isselected={item === myApp?.recruitPart}
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
                                {stackCategory.map((item, i) => (
                                    <S.RoundForm
                                        key={i}
                                        $isselected={myApp?.applyStack.includes(
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
                            <S.Content $h="220px">
                                {myApp?.application}
                            </S.Content>
                        </S.TextBox>
                    </S.DetailBox2>
                </S.Modal>
            </S.Background>
        </div>
    );
};

export default ClickmyApply;

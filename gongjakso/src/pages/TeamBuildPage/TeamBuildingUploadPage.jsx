import React, { useState } from 'react';
import * as S from './TeamBuildingUploadPage.Styled';
import { Input } from '../../components/common/Input/Input';
import { useForm } from 'react-hook-form';
import CountGuest from '../../components/common/CountGuest/CountGuest';
import SelectCalendar from '../../components/common/Calendar/SelectCalendar';

const TeamBuildingUploadPage = ({ posts }) => {
    const [roles, setRoles] = useState({
        '기획/아이디어': 0,
        디자이너: 0,
        프론트엔드: 0,
        벡엔드: 0,
    });

    const language = [
        'React',
        'TypeScript',
        'JavaSript',
        'Next.js',
        'Node.js',
        'Java',
        'Spring',
        'Kotlin',
        'Flutter',
        'Acc',
    ];

    const [meeting, setMeeting] = useState('offline');
    const [complaint, setComplaint] = useState('kakao');
    const [dates, setDates] = useState([]);

    const [selectedLanguages, setSelectedLanguages] = useState([]);

    const [btn, setBtn] = useState(false);

    const MAX_ADULT_NUM = 4;
    const MAX_ROOM_NUM = 9;

    const {
        register,
        handleSubmit,
        // setFocus,
        // setValue,
        // setError,
        // clearErrors,
        // control,
        // trigger,
        formState: { errors, isSubmitted },
    } = useForm({
        mode: 'onSubmit',
        defaultValues: {
            title: null,
            description: null,
            link: null,
            people: null,
        },
    });

    const handleQuantityChange = (role, increment) => {
        setRoles(prevRoles => ({
            ...prevRoles,
            [role]: increment
                ? prevRoles[role] + 1
                : Math.max(0, prevRoles[role] - 1),
        }));
    };

    const handleOptionChange = option => {
        setMeeting(option);
        setBtn(true);
    };

    const handleComplain = option => {
        setComplaint(option);
        setBtn(true);
    };

    const handleLanguageClick = language => {
        const isSelected = selectedLanguages.includes(language);

        if (isSelected) {
            setSelectedLanguages(prevSelected =>
                prevSelected.filter(lang => lang !== language),
            );
        } else {
            setSelectedLanguages(prevSelected => [...prevSelected, language]);
        }
        console.log(selectedLanguages);
    };

    const handleApply = selectedDates => {
        setDates(selectedDates);
    };

    const submitContestBuild = data => {
        const newData = {
            title: data.title,
            content: data.description,
            link: data.link,
            people: data.people,
            guest: { ...roles },
            meeting: meeting,
            complaint: complaint,
            complainLink: data.complainLink,
            dates: dates,
        };
        console.log(newData);
    };
    const submitProjectBuild = data => {
        const newData = {
            title: data.title,
            content: data.description,
            people: data.people,
            guest: { ...roles },
            meeting: meeting,
            language: selectedLanguages,
            complaint: complaint,
            complainLink: data.complainLink,
            dates: dates,
        };
        console.log(newData);
    };

    return (
        <>
            {posts === 'contest' && (
                <>
                    <S.Title>
                        모집 기본 정보를 입력해주세요
                        <p>
                            추후에 공모전/프로젝트 홈에 올라갈 게시글
                            정보입니다.
                            <p>*표시가 있는 항목은 필수 항목입니다.</p>
                        </p>
                    </S.Title>
                    <S.Label>
                        <Input
                            label={'제목'}
                            id={'title'}
                            placeholder={
                                '공모전 이름 또는 프로젝트 이름을 입력해주세요. *게시 후 수정할 수 없습니다.'
                            }
                            error={errors?.title}
                            register={register}
                            registerOptions={{ required: '제목을 입력하세요' }}
                        />
                    </S.Label>

                    <S.Label>
                        <Input
                            label={'설명'}
                            id={'description'}
                            placeholder={
                                '사용자들이 공모전을 더 잘 이해할 수 있는 설명글을 적어주세요.'
                            }
                            register={register}
                            registerOptions={{}}
                        />
                    </S.Label>

                    <S.Label>
                        <Input
                            label={'공모전 홈페이지'}
                            type={'url'}
                            id={'link'}
                            placeholder={
                                '공모전 홈페이지 또는 공고 링크를 업로드 해주세요.'
                            }
                            register={register}
                            registerOptions={{}}
                        />
                    </S.Label>

                    <S.Label>
                        <Input
                            label={'인원'}
                            type={'number'}
                            id={'people'}
                            placeholder={
                                '모집 총 인원을 입력해주세요. *최대 8명 입니다.'
                            }
                            error={errors?.people}
                            register={register}
                            registerOptions={{
                                required: '인원을 입력해주세요. ',
                                min: 1,
                            }}
                            step={1}
                        />
                    </S.Label>
                    <S.Label>
                        <S.TapP>모집 분야</S.TapP>
                        <CountGuest
                            roles={roles}
                            onQuantityChange={handleQuantityChange}
                        />
                    </S.Label>
                    <S.Label>
                        <S.TapP>회의 방식</S.TapP>
                        <S.ClickBtn
                            isSelected={meeting === 'offline'}
                            onClick={() => handleOptionChange('offline')}
                        >
                            오프라인
                        </S.ClickBtn>
                        <S.ClickBtn
                            isSelected={meeting === 'online'}
                            onClick={() => handleOptionChange('online')}
                        >
                            온라인
                        </S.ClickBtn>
                    </S.Label>
                    <S.Label>
                        <S.TapP>회의 지역</S.TapP>
                    </S.Label>
                    <S.Label>
                        <S.TapP>예상 기간</S.TapP>
                        <SelectCalendar onApply={handleApply} />
                    </S.Label>
                    <S.Label>
                        <S.TapP>문의사항</S.TapP>
                        <S.Complain>
                            <div>
                                <S.ClickBtn
                                    isSelected={complaint === 'kakao'}
                                    onClick={() => handleComplain('kakao')}
                                >
                                    오픈카톡
                                </S.ClickBtn>
                                <S.ClickBtn
                                    isSelected={complaint === 'google'}
                                    onClick={() => handleComplain('google')}
                                >
                                    구글폼
                                </S.ClickBtn>
                            </div>
                            <Input
                                type={'url'}
                                id={'complainLink'}
                                placeholder={'*오픈채팅 링크를 입력해주세요.'}
                                register={register}
                                registerOptions={{}}
                            />
                        </S.Complain>
                    </S.Label>
                    <S.ButtonContent>
                        <S.Button $isDelete={true}>취소하기</S.Button>
                        <S.Button onClick={handleSubmit(submitContestBuild)}>
                            모집 시작하기
                        </S.Button>
                    </S.ButtonContent>
                </>
            )}
            {posts === 'project' && (
                <>
                    <S.Title>
                        모집 기본 정보를 입력해주세요
                        <p>
                            추후에 공모전/프로젝트 홈에 올라갈 게시글
                            정보입니다.
                            <p>*표시가 있는 항목은 필수 항목입니다.</p>
                        </p>
                    </S.Title>
                    <S.Label>
                        <Input
                            label={'제목'}
                            id={'title'}
                            placeholder={
                                '공모전 이름 또는 프로젝트 이름을 입력해주세요. *게시 후 수정할 수 없습니다.'
                            }
                            error={errors?.title}
                            register={register}
                            registerOptions={{ required: '제목을 입력하세요' }}
                        />
                    </S.Label>

                    <S.Label>
                        <Input
                            label={'설명'}
                            id={'description'}
                            placeholder={
                                '사용자들이 공모전을 더 잘 이해할 수 있는 설명글을 적어주세요.'
                            }
                            register={register}
                            registerOptions={{}}
                        />
                    </S.Label>
                    <S.Label>
                        <Input
                            label={'인원'}
                            type={'number'}
                            id={'people'}
                            placeholder={
                                '모집 총 인원을 입력해주세요. *최대 8명 입니다.'
                            }
                            error={errors?.people}
                            register={register}
                            registerOptions={{
                                required: '인원을 입력해주세요. ',
                                min: 1,
                            }}
                            step={1}
                        />
                    </S.Label>
                    <S.Label>
                        <S.TapP>모집 분야</S.TapP>
                        <CountGuest
                            roles={roles}
                            onQuantityChange={handleQuantityChange}
                        />
                    </S.Label>
                    <S.Label>
                        <S.TapP>회의 방식</S.TapP>
                        <S.ClickBtn
                            isSelected={meeting === 'offline'}
                            onClick={() => handleOptionChange('offline')}
                        >
                            오프라인
                        </S.ClickBtn>
                        <S.ClickBtn
                            isSelected={meeting === 'online'}
                            onClick={() => handleOptionChange('online')}
                        >
                            온라인
                        </S.ClickBtn>
                    </S.Label>
                    <S.Label>
                        <S.TapP>사용 언어</S.TapP>
                        <S.ButtonDiv>
                            {language.map((lang, index) => (
                                <S.ClickBtn
                                    key={index}
                                    isSelected={selectedLanguages.includes(
                                        lang,
                                    )}
                                    onClick={() => handleLanguageClick(lang)}
                                >
                                    {lang}
                                </S.ClickBtn>
                            ))}
                        </S.ButtonDiv>
                    </S.Label>
                    <S.Label>
                        <S.TapP>회의 지역</S.TapP>
                    </S.Label>
                    <S.Label>
                        <S.TapP>예상 기간</S.TapP>
                        <SelectCalendar onApply={handleApply} />
                    </S.Label>
                    <S.Label>
                        <S.TapP>문의사항</S.TapP>
                        <S.Complain>
                            <div>
                                <S.ClickBtn
                                    isSelected={complaint === 'kakao'}
                                    onClick={() => handleComplain('kakao')}
                                >
                                    오픈카톡
                                </S.ClickBtn>
                                <S.ClickBtn
                                    isSelected={complaint === 'google'}
                                    onClick={() => handleComplain('google')}
                                >
                                    구글폼
                                </S.ClickBtn>
                            </div>
                            <Input
                                type={'url'}
                                id={'complainLink'}
                                placeholder={'*오픈채팅 링크를 입력해주세요.'}
                                register={register}
                                registerOptions={{}}
                            />
                        </S.Complain>
                    </S.Label>
                    <S.ButtonContent>
                        <S.Button $isDelete={true}>취소하기</S.Button>
                        <S.Button onClick={handleSubmit(submitProjectBuild)}>
                            모집 시작하기
                        </S.Button>
                    </S.ButtonContent>
                </>
            )}
        </>
    );
};

export default TeamBuildingUploadPage;

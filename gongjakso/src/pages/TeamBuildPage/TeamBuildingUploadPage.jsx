import React, { useState, useEffect } from 'react';
import * as S from './TeamBuildingUploadPage.Styled';
import { Input } from '../../components/common/Input/Input';
import { useForm } from 'react-hook-form';
import CountGuest from '../../components/common/CountGuest/CountGuest';
import SelectCalendar from '../../components/common/Calendar/SelectCalendar';
import { postPosting } from '../../service/post_service';
import Multilevel from '../../components/common/Input/Multilevel';
import useCustomNavigate from '../../hooks/useNavigate';

const TeamBuildingUploadPage = ({ posts }) => {
    const goToPage = useCustomNavigate();

    const language = [
        'REACT',
        'TYPESCRIPT',
        'JAVASCRIPT',
        'NEXTJS',
        'NODEJS',
        'JAVA',
        'SPRING',
        'KOTLIN',
        'FLUTTER',
        'ETC',
    ];

    const [meeting, setMeeting] = useState('OFFLINE');
    const [complaint, setComplaint] = useState('true');

    const [description, setDescription] = useState('');

    const handleDescriptionChange = event => {
        setDescription(event.target.value);
    };

    const [languages, setLanguages] = useState([]);

    const [category, setCategory] = useState();

    const [btn, setBtn] = useState(false);

    const MAX_ADULT_NUM = 4;
    const MAX_ROOM_NUM = 9;

    const [dates, setDates] = useState([]);
    const [endDates, setEndDates] = useState([]);

    const [selectedLocalData, setSelectedLocalData] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState();
    //프로젝트/공모전 기간 설정
    const transformAndSetDates = (startDate, endDate) => {
        const parsedStartDate = new Date(startDate);
        const parsedEndDate = new Date(endDate);

        const formattedStartDate = `${parsedStartDate.toISOString().split('T')[0]}T02:32:22.376895959`;
        const formattedEndDate = `${parsedEndDate.toISOString().split('T')[0]}T02:32:22.376895959`;

        setDates({ startDate: formattedStartDate, endDate: formattedEndDate });
    };

    //마감 기한 설정
    const transformAndSetEndDates = (startDate, endDate) => {
        const parsedStartDate = new Date(startDate);
        const parsedEndDate = new Date(endDate);

        const formattedStartDate = `${parsedStartDate.toISOString().split('T')[0]}T02:32:22.376895959`;
        const formattedEndDate = `${parsedEndDate.toISOString().split('T')[0]}T02:32:22.376895959`;

        setEndDates({
            endDate: formattedEndDate,
        });
    };

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
            link: null,
            people: null,
        },
    });

    // const handleQuantityChange = (role, increment) => {
    //     setRoles(prevRoles => ({
    //         ...prevRoles,
    //         [role]: increment
    //             ? prevRoles[role] + 1
    //             : Math.max(0, prevRoles[role] - 1),
    //     }));
    // };

    // const category = {
    //     categories: Object.entries(roles)
    //         .filter(([_, size]) => size !== 0) // Filter out categories with size 0
    //         .map(([categoryType, size]) => ({ categoryType, size })),
    // };

    const handleOptionChange = option => {
        if (option === 'ONLINE') {
            if (meeting === 'ONLINE') {
                alert('둘중 하나를 꼭 선택해주세요');
            } else if (meeting === 'OFFLINE') {
                setMeeting('BOTH');
            } else if (meeting === 'BOTH') {
                setMeeting('OFFLINE');
            } else {
                setMeeting('ONLINE');
            }
        } else if (option === 'OFFLINE') {
            if (meeting === 'OFFLINE') {
                alert('둘중 하나를 꼭 선택해주세요');
            } else if (meeting === 'ONLINE') {
                setMeeting('BOTH');
            } else if (meeting === 'BOTH') {
                setMeeting('ONLINE');
            } else {
                setMeeting('OFFLINE');
            }
        } else {
            setMeeting(prevMeeting => (prevMeeting === 'BOTH' ? null : 'BOTH'));
        }
        setBtn(true);
    };

    const handleComplain = option => {
        setComplaint(option);
        setBtn(true);
    };

    const handleSelectedData = data => {
        //선택한 지역 반환
        setSelectedLocalData(data);
    };

    const handleLanguageClick = language => {
        const isSelected = languages.includes(language);

        if (isSelected) {
            setLanguages(prevSelected =>
                prevSelected.filter(lang => lang !== language),
            );
        } else {
            setLanguages(prevSelected => [...prevSelected, language]);
        }
    };

    useEffect(() => {
        const formattedLanguages = languages.map(language => ({
            stackNameType: language,
        }));
        setSelectedLanguage(formattedLanguages);
    }, [languages]);

    //프로젝트/공모전 기한 설정
    const handleApply = selectedDates => {
        transformAndSetDates(selectedDates.startDate, selectedDates.endDate);
    };
    //마감 기한 연장 설정
    const handleEndApply = selectedDates => {
        transformAndSetEndDates(selectedDates.startDate, selectedDates.endDate);
    };

    const handleCategory = selectCategory => {
        setCategory(selectCategory.category);
    };

    const submitContestBuild = data => {
        const newData = {
            title: data.title,
            contents: description,
            contestLink: data.link, //공모전 주소
            startDate: dates.startDate,
            endDate: dates.endDate,
            finishDate: endDates.endDate, // 공고 마감일
            maxPerson: data.people,
            stackNames: [],
            categories: category.categories, //참여하는 팀의 역할
            meetingMethod: meeting,
            meetingArea: selectedLocalData,
            questionMethod: complaint,
            questionLink: data.complainLink,
            postType: false,
        };
        console.log(newData);
        postPosting(newData).then(res => {
            console.log(res);
        });
        goToPage('/contest');
    };
    const submitProjectBuild = data => {
        const newData = {
            title: data.title,
            contents:
                '프로젝트 팀에 합류하세요: 열정적이고 재능 있는 구성원 모집!',
            contestLink: '',
            startDate: dates.startDate,
            endDate: dates.endDate,
            finishDate: endDates.endDate,
            maxPerson: 10,
            stackNames: selectedLanguage,
            categories: category.categories,
            meetingMethod: meeting,
            meetingArea: selectedLocalData,
            questionMethod: complaint,
            questionLink: data.complainLink,
            postType: true,
        };
        console.log(newData);
        postPosting(newData).then(res => {
            console.log(res);
        });
        goToPage('/project');
    };

    return (
        <>
            {posts === 'contest' && (
                <>
                    <S.Title>
                        모집 기본 정보를 입력해주세요
                        <S.MiniTitle>
                            <p>
                                추후에 공모전/프로젝트 홈에 올라갈 게시글
                                정보입니다.
                            </p>
                            <p>*표시가 있는 항목은 필수 항목입니다.</p>
                        </S.MiniTitle>
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
                        <S.TapT>설명</S.TapT>
                        <S.TextArea
                            name=""
                            id="description"
                            cols="30"
                            rows="10"
                            value={description}
                            onChange={handleDescriptionChange}
                            placeholder="사용자들이 공모전/프로젝트을 더 잘 이해할 수 있는 설명글을 적어주세요."
                        ></S.TextArea>
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
                            isProject={false}
                            onApply={handleCategory}
                        />
                    </S.Label>
                    <S.Label>
                        <S.TapP>회의 방식</S.TapP>
                        <S.ClickBtn
                            $isselected={
                                meeting === 'OFFLINE' || meeting === 'BOTH'
                            }
                            onClick={() => handleOptionChange('OFFLINE')}
                        >
                            오프라인
                        </S.ClickBtn>
                        <S.ClickBtn
                            $isselected={
                                meeting === 'ONLINE' || meeting === 'BOTH'
                            }
                            onClick={() => handleOptionChange('ONLINE')}
                        >
                            온라인
                        </S.ClickBtn>
                    </S.Label>
                    <S.Label>
                        <S.TapP>회의 지역</S.TapP>
                        <Multilevel
                            isPost={true}
                            onItemSelected={handleSelectedData}
                        />
                    </S.Label>
                    <S.Label>
                        <S.TapP>공모전 예상 기간</S.TapP>
                        <SelectCalendar onApply={handleApply} />
                    </S.Label>
                    <S.Label>
                        <S.TapP>공고 마감 기간</S.TapP>
                        <SelectCalendar onApply={handleEndApply} />
                    </S.Label>
                    <S.Label>
                        <S.TapP>문의사항</S.TapP>
                        <S.Complain>
                            <div>
                                <S.ClickBtn
                                    $isselected={complaint === 'true'}
                                    onClick={() => handleComplain('true')}
                                >
                                    오픈카톡
                                </S.ClickBtn>
                                <S.ClickBtn
                                    $isselected={complaint === 'false'}
                                    onClick={() => handleComplain('false')}
                                >
                                    구글폼
                                </S.ClickBtn>
                            </div>
                            <Input
                                type={'url'}
                                id={'complainLink'}
                                placeholder={'*링크를 입력해주세요.'}
                                register={register}
                                registerOptions={{
                                    required: '*문의사항 링크를 입력하세요',
                                }}
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
                        <S.MiniTitle>
                            <p>
                                추후에 공모전/프로젝트 홈에 올라갈 게시글
                                정보입니다.
                            </p>
                            <p>*표시가 있는 항목은 필수 항목입니다.</p>
                        </S.MiniTitle>
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
                            registerOptions={{ required: '내용을 입력하세요' }}
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
                        <CountGuest isProject={true} onApply={handleCategory} />
                    </S.Label>
                    <S.Label>
                        <S.TapP>회의 방식</S.TapP>
                        <S.ClickBtn
                            $isselected={
                                meeting === 'OFFLINE' || meeting === 'BOTH'
                            }
                            onClick={() => handleOptionChange('OFFLINE')}
                        >
                            오프라인
                        </S.ClickBtn>
                        <S.ClickBtn
                            $isselected={
                                meeting === 'ONLINE' || meeting === 'BOTH'
                            }
                            onClick={() => handleOptionChange('ONLINE')}
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
                                    $isselected={languages.includes(lang)}
                                    onClick={() => handleLanguageClick(lang)}
                                >
                                    {lang}
                                </S.ClickBtn>
                            ))}
                        </S.ButtonDiv>
                    </S.Label>
                    <S.Label>
                        <S.TapP>회의 지역</S.TapP>
                        <Multilevel
                            isPost={true}
                            onItemSelected={handleSelectedData}
                        />
                    </S.Label>
                    <S.Label>
                        <S.TapP>예상 기간</S.TapP>
                        <SelectCalendar onApply={handleApply} />
                    </S.Label>
                    <S.Label>
                        <S.TapP>공고 마감 기간</S.TapP>
                        <SelectCalendar onApply={handleEndApply} />
                    </S.Label>
                    <S.Label>
                        <S.TapP>문의사항</S.TapP>
                        <S.Complain>
                            <div>
                                <S.ClickBtn
                                    $isselected={complaint === 'true'}
                                    onClick={() => handleComplain('true')}
                                >
                                    오픈카톡
                                </S.ClickBtn>
                                <S.ClickBtn
                                    $isselected={complaint === 'false'}
                                    onClick={() => handleComplain('false')}
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

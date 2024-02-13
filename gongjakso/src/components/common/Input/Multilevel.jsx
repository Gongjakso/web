import React, { useState } from 'react';
<<<<<<< HEAD
// import Dropdown from 'react-multilevel-dropdown';
import * as S from './Multilevel.styled';
import Down from '../../../assets/images/Down.svg';

import { Dropdown } from 'react-nested-dropdown';
import 'react-nested-dropdown/dist/styles.css';

const Multilevel = () => {
    const [title, setTitle] = useState('지역');

    // const city = [
    //     '서울',
    //     '경기',
    //     '인천',
    //     '강원',
    //     '대전',
    //     '세종',
    //     '충남',
    //     '충북',
    //     '부산',
    //     '울산',
    //     '경남',
    //     '경북',
    //     '대구',
    //     '광주',
    //     '전남',
    //     '전북',
    //     '제주',
    // ];

    // const Arrow = () => {
    //     return (
    //         <S.Title>
    //             <img src={Down} />
    //         </S.Title>
    //     );
    // };

    const data = [
        '영등포구',
        '도봉구',
        '마포구',
        '구로구',
        '강서구',
        '강서구',
        '강서구',
        '강서구',
        '강서구',
    ];

    const items = [
        {
            label: '서울',
            items: data.map((item, id) => ({
                label: item,
                onSelect: () => {
                    setTitle(item);
                },
            })),
        },
        // {
        //     label: '영등포구',
        //     onSelect: () => {
        //         setTitle('영등포구');
        //     },
        // },
        // {
        //     label: '마포구',
        //     onSelect: () => {
        //         setTitle('마포구');
        //     },
        // },
        // {
        //     label: '동작구',
        //     onSelect: () => {
        //         setTitle('동작구');
        //     },
        // },

        {
            label: '부산',
            items: [
                {
                    label: 'Option 2.1',
                    onSelect: () => console.log('Option 2.1 selected'),
                },
                {
                    label: 'Option 2.2',
                    onSelect: () => console.log('Option 2.2 selected'),
                },
            ],
        },
    ];

    return (
        <S.Dropdown>
            <Dropdown items={items}>
                {({ isOpen, onClick }) => (
                    <button type="button" onClick={onClick}>
                        {title}
                    </button>
                )}
=======
import Dropdown from 'react-multilevel-dropdown';
import * as S from './Multilevel.styled';
import Down from '../../../assets/images/Down.svg';

const Multilevel = () => {
    const [title, setTitle] = useState('지역');

    const city = [
        '서울',
        '경기',
        '인천',
        '강원',
        '대전',
        '세종',
        '충남',
        '충북',
        '부산',
        '울산',
        '경남',
        '경북',
        '대구',
        '광주',
        '전남',
        '전북',
        '제주',
    ];

    const Arrow = () => {
        return (
            <S.Title>
                <img src={Down} />
            </S.Title>
        );
    };
    return (
        <S.Dropdown>
            <Dropdown
                title={
                    <>
                        {title}
                        <Arrow />
                    </>
                }
            >
                {city.map((item, index) => (
                    <Dropdown.Item
                        key={index}
                        onClick={() => {
                            setTitle(item);
                        }}
                    >
                        {item}
                        <Dropdown.Submenu>
                            <Dropdown.Item>Subitem 1</Dropdown.Item>
                            <Dropdown.Item>Subitem 2</Dropdown.Item>
                        </Dropdown.Submenu>
                    </Dropdown.Item>
                ))}
>>>>>>> 05fc67e98f2c136f2e27a413d061bdef7d4d7fed
            </Dropdown>
        </S.Dropdown>
    );
};

export default Multilevel;

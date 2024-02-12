import React, { useState } from 'react';
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
            </Dropdown>
        </S.Dropdown>
    );
};

export default Multilevel;

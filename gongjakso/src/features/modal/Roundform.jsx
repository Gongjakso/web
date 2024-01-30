import React, { useState } from 'react';
import * as S from './ApplyModal.styled';

// 지원 분야 (중복 선택 불가)

const FormFields = props => {
    const [data] = useState([
        ['기획', '디자인'],
        ['프론트엔드', '백엔드'],
    ]);
    const [clickedIndex, setClickedIndex] = useState(null);

    const Map = array => {
        return array.map((item, i) => {
            return (
                <S.RoundForm
                    onClick={() => handleClick(i)}
                    style={{
                        color: clickedIndex === i ? 'white' : 'grey',
                        background: clickedIndex === i ? 'black' : null,
                    }}
                >
                    {item}
                </S.RoundForm>
            );
        });
    };

    const handleClick = index => {
        setClickedIndex(index);
    };

    return (
        <div>{props.form[0] === '공모전' ? Map(data[0]) : Map(data[1])}</div>
    );
};

// 기술 스택 (중복 선택 가능)

const FormTech = props => {
    const [data] = useState(['React', 'TypeScript', 'JavaScript']);
    const [clickedIndex, setClickedIndex] = useState([]);

    const handleClick = index => {
        if (clickedIndex.includes(index)) {
            setClickedIndex(
                clickedIndex.filter(btnIndex => btnIndex !== index),
            );
        } else {
            setClickedIndex([...clickedIndex, index]);
        }
    };

    return data.map((item, i) => {
        return (
            <S.RoundForm
                onClick={() => handleClick(i)}
                isActive={clickedIndex.includes(i)}
                style={{
                    color: clickedIndex.includes(i) ? 'white' : 'grey',
                    background: clickedIndex.includes(i) ? 'black' : null,
                }}
            >
                {item}
            </S.RoundForm>
        );
    });
};

export { FormFields, FormTech };

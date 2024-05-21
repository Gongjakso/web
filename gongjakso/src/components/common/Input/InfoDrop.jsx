import React, { useEffect, useState } from 'react';

import * as S from './infoDrop.styled.jsx';
import Down from '../../../assets/images/Down.svg';
import Up from '../../../assets/images/icon.svg';

import { Dropdown } from 'react-nested-dropdown';
import 'react-nested-dropdown/dist/styles.css';

const InfoDrop = props => {
    const [title, setTitle] = useState('안녕');
    const [isOpen, setIsOpen] = useState(false);
    const [isPost, setIsPost] = useState(true);

    return (
        <S.Dropdown1 $isopen={isOpen}>
            <Dropdown items={props.items} closeOnScroll={false}>
                {({ isOpen, onClick }) => (
                    <S.Button
                        type="button"
                        onClick={() => {
                            onClick();
                            setIsOpen(true);
                        }}
                    >
                        {props.title}
                        {isOpen ? <img src={Down} /> : <img src={Up} />}
                    </S.Button>
                )}
            </Dropdown>
        </S.Dropdown1>
    );
};

export default InfoDrop;

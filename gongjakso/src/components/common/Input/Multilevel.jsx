import React, { useEffect, useState } from 'react';

import * as S from './Multilevel.styled';

import { Dropdown } from 'react-nested-dropdown';
import 'react-nested-dropdown/dist/styles.css';

import { mapData } from '../../../assets/mapData/mapData.jsx';

const Multilevel = ({ onItemSelected, ...props }) => {
    const [title, setTitle] = useState('지역');
    const [isOpen, setIsOpen] = useState(false);

    const items = mapData.map(item => ({
        label: item.city,
        items: item.region.map(region => ({
            label: region,
            onSelect: () => {
                const selectedData = `${item.city} ${region}`;
                setTitle(selectedData);
                onItemSelected(selectedData);
            },
        })),
    }));

    return (
        <S.Dropdown isPost={props.isPost} isOpen={isOpen}>
            <Dropdown items={items} closeOnScroll={false}>
                {({ isOpen, onClick }) => (
                    <S.Button
                        type="button"
                        onClick={() => {
                            onClick();
                            setIsOpen(isOpen);
                        }}
                    >
                        {title}
                        <S.UpdownComponent
                            isPost={props.isPost}
                            isOpen={isOpen}
                        />
                    </S.Button>
                )}
            </Dropdown>
        </S.Dropdown>
    );
};

export default Multilevel;

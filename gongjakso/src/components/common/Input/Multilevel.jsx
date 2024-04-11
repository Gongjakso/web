import React, { useEffect, useState } from 'react';

import * as S from './Multilevel.styled';

import { Dropdown } from 'react-nested-dropdown';
import 'react-nested-dropdown/dist/styles.css';

import { mapData } from '../../../assets/mapData/mapData.jsx';

const Multilevel = ({ onItemSelectedCity, onItemSelectedTown, ...props }) => {
    const [city, setCity] = useState('지역');
    const [town, setTown] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const items = mapData.map(item => ({
        label: item.city,
        items: item.region.map(region => ({
            label: region,
            onSelect: () => {
                const selectedCity = `${item.city}`;
                const selectedTown = ` ${region}`;
                setCity(selectedCity);
                setTown(selectedTown);
                onItemSelectedCity(selectedCity);
                onItemSelectedTown(selectedTown);
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
                        {city}
                        {town}
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

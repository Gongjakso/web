import React, { useEffect, useState } from 'react';

import * as S from './Multilevel.styled';

import { Dropdown } from 'react-nested-dropdown';
import 'react-nested-dropdown/dist/styles.css';

import { mapData } from '../../../assets/mapData/mapData.jsx';

const Multilevel = ({ onItemSelectedCity, onItemSelectedTown, ...props }) => {
    const [city, setCity] = useState('지역');
    const [town, setTown] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const items = mapData.map(item => {
        // Check if 'region' exists in the item
        if (item.region && item.region.length > 0) {
            return {
                label: item?.city,
                items: item?.region?.map(region => ({
                    label: region,
                    onSelect: () => {
                        const selectedCity = `${item.city}`;
                        const selectedTown = `${region}`;
                        setCity(selectedCity);
                        setTown(selectedTown);
                        onItemSelectedCity(selectedCity);
                        onItemSelectedTown(selectedTown);
                    },
                })),
            };
        } else {
            // If 'region' does not exist, return only the city
            return {
                label: item.city,
                onSelect: () => {
                    const selectedCity = `${item.city}`;
                    setCity(selectedCity);
                    setTown('');
                    onItemSelectedCity(selectedCity);
                    onItemSelectedTown('');
                },
            };
        }
    });

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
                        {city} {town}
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

import React, { useState, useRef, useEffect } from 'react';
import * as S from './Input.Styled';
import { WarningMsg } from './WarningMsg';
import Down from '../../../assets/images/Down.svg';
import Up from '../../../assets/images/dropUp.png';

const Input = props => {
    const {
        label,
        id,
        type,
        error,
        placeholder,
        step,
        register,
        registerOptions,
    } = props;
    const isLabel = !!label;
    return (
        <>
            <S.InputLabel $isLabel={isLabel} htmlFor={id}>
                {label}
            </S.InputLabel>
            <S.InputText
                id={id}
                type={type || 'text'}
                className={error ? 'warning' : null}
                placeholder={placeholder}
                step={step}
                {...register(id, registerOptions)}
            />
            {error && <WarningMsg msg={error.message} />}
        </>
    );
};

const SelectInput = props => {
    const {
        label,
        id,
        error,
        placeholder,
        selectOptions,
        register,
        registerOptions,
        onChange,
    } = props;

    const isLabel = !!label;
    const [selectedOption, setSelectedOption] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null); // Ref to select container

    useEffect(() => {
        const handleClickOutside = event => {
            if (
                selectRef.current &&
                !selectRef.current.contains(event.target)
            ) {
                setIsOpen(!isOpen);
            }
        };
        if (isOpen) {
            window.addEventListener('click', handleClickOutside);
        }

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen, selectRef]);

    const handleToggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectChange = event => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        onChange(selectedValue); // Call the onChange function with the selected value
    };
    return (
        <>
            <S.InputLabel isLabel={isLabel} htmlFor={id}>
                {label}
            </S.InputLabel>
            <S.SelectContainer ref={selectRef}>
                <S.SelectValue onClick={handleToggleOpen}>
                    {selectedOption || placeholder}
                    <S.Arrow src={isOpen ? Up : Down} alt="arrow" />
                </S.SelectValue>
                {isOpen && (
                    <S.OptionList>
                        {selectOptions.map((option, index) => (
                            <li
                                className="option"
                                key={index}
                                onClick={() => {
                                    handleSelectChange({
                                        target: { value: option },
                                    });
                                    handleToggleOpen();
                                }}
                            >
                                {option}
                            </li>
                        ))}
                    </S.OptionList>
                )}
            </S.SelectContainer>
        </>
    );
};

export { Input, SelectInput };

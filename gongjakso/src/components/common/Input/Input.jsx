import React from 'react';
import * as S from './Input.Styled';
import { WarningMsg } from './WarningMsg';

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
            <S.InputLabel isLabel={isLabel} htmlFor={id}>
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
    } = props;

    const isLabel = !!label;
    return (
        <>
            <S.InputLabel isLabel={isLabel} htmlFor={id}>
                {label}
            </S.InputLabel>
            <S.Select
                name={id}
                id={id}
                className={error ? 'warning' : null}
                {...register(id, registerOptions)}
            >
                <option value="" disabled selected hidden>
                    {placeholder}
                </option>
                {selectOptions.map((option, index) => {
                    return (
                        <option value={option} key={index}>
                            {option}
                        </option>
                    );
                })}
            </S.Select>
        </>
    );
};

export { Input, SelectInput };

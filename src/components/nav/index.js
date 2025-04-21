import React from 'react';
import { NavCont } from './styles';
import { Midi } from '../../theming/styles';
import { Switch } from '../switch';

const Nav = ({ toggleMode, mode, spread }) => {
    return (
        <Midi
            style={{
                mixBlendMode: 'difference',
            }}
        >
            <NavCont
                style={{
                    mixBlendMode: 'difference',
                }}
                onMouseDown={(e) => {
                    e.preventDefault();
                }}
            >
                <Switch spread={spread} mode={mode} toggleMode={toggleMode} />
            </NavCont>
        </Midi>
    );
};

export { Nav };

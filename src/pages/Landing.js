import React from 'react';
import {
    Main,
    Midi,
    Heading,
} from '../theming/styles';
import { Nav, Foot } from '../components';
import { Spread } from '../components/switch/styles';

const Landing = ({ toggleMode, mode, spread, setDisableScroll }) => {
    const spreadClass =
        spread === 'first'
            ? 'growBlack'
            : spread === 'second'
            ? 'growWhite'
            : '';

    return (
        <Main
            style={{
                position: 'relative',
                overflow: setDisableScroll ? 'hidden' : 'null',
                height: setDisableScroll ? '100vh' : 'unset',
            }}
        >
            <Spread className={spreadClass} />
            <Nav mode={mode} toggleMode={toggleMode} />
            <Midi style={{ mixBlendMode: 'difference' }}>
                <Heading
                    style={{
                        mixBlendMode: 'difference',
                        color: 'white',
                    }}
                >
                    <span style={{ fontWeight: 300 }}>Hi, I'm Anna</span><br/>
                    I build things which make sounds <br/>
                    with <span style={{ fontStyle: 'italic' }}> code</span>
                </Heading>
            </Midi>
            <Foot />
        </Main>
    );
};

export { Landing };

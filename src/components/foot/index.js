import React from 'react';
import { FootCont, FootFinal, FinalLeft, FinalRight } from './styles';
import { Full, Paragraph } from '../../theming/styles';

const Foot = () => {
    return (
        <FootCont>
            <Full>
                <FootFinal>
                    <FinalLeft>
                        <Paragraph style={{ fontWeight: 300 }}>
                            Theme designed and built by
                                <a href="https://www.juliacodes.com/"
                                   target="_blank"
                                   rel="noreferrer">
                                   Julia Johnson
                                </a>
                        </Paragraph>
                    </FinalLeft>
                    <FinalRight>
                        <a href='https://github.com/aniawsz' target="_blank" rel="noreferrer">
                            <Paragraph style={{ fontWeight: 300 }}>
                                GitHub
                            </Paragraph>
                        </a>
                        <a
                            href='https://www.linkedin.com/in/anna-wszeborowska/' target="_blank" rel="noreferrer"
                        >
                            <Paragraph style={{ fontWeight: 300 }}>
                                LinkedIn
                            </Paragraph>
                        </a>
                    </FinalRight>
                </FootFinal>
            </Full>
        </FootCont>
    );
};

export { Foot };

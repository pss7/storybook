import GlobalStyle from "../GlobalStyle";
import styled from 'styled-components';

export interface ImageProps {

    /**
* 이미지 경로를 적용합니다.
*/
    imageSrc?: string;

    /**
* 이미지 대체텍스트를 적용합니다.
*/
    imageAlt?: string;

}

function Image({imageSrc, imageAlt }: ImageProps) {

    return (
        <>
            <CommonImage src={imageSrc} alt={imageAlt} />
        </>
    )

}

const CommonImage = styled.img`
display: block;
width: 100%;
`;

export default Image